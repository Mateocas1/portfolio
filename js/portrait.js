// Particle portrait.
//
// Progressive enhancement over the hero photo: once the <img> has decoded and
// the page is idle, the photo is analysed once (background removed, tone
// mapped), sampled on a jittered hex grid into a few thousand particles and
// drawn on one canvas. The particles drift in and assemble, are pushed away by
// the pointer and spring back. The loop sleeps when everything is at rest, off
// screen or in a hidden tab. Reduced motion draws the portrait once.

const WORK = 200; // side of the analysis bitmap (photo is 720x720)
const TAU = Math.PI * 2;
const STEP = 1000 / 60; // fixed physics step
const LEVELS = 6; // alpha levels per tint (draw batches)
const TINTS = [0, 0.16, 0.34]; // share of --accent mixed into --text
const INTRO_MS = 1900;

const container = document.querySelector("[data-portrait]");
const photo = container?.querySelector("img");
const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const schemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

if (container && photo && "IntersectionObserver" in window) {
  start().catch(() => {
    /* Anything unexpected: the photo simply stays. */
  });
}

async function start() {
  await photo.decode();
  await idle();
  const map = await analyse(photo);
  if (!map) return;
  mount(map);
}

function idle() {
  return new Promise((resolve) => {
    if ("requestIdleCallback" in window) requestIdleCallback(resolve, { timeout: 1500 });
    else setTimeout(resolve, 300);
  });
}

// ---------------------------------------------------------------------------
// Photo analysis (once): coverage (subject vs background), tone, warmth.

function smoothstep(a, b, x) {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

// Separable box blur with a running sum (cost independent of the radius),
// edges clamped. A few passes approximate a Gaussian.
function boxBlur(src, w, r, passes) {
  const a = Float32Array.from(src);
  const b = new Float32Array(a.length);
  const norm = 1 / (2 * r + 1);
  const line = (from, to, start, stride) => {
    let s = 0;
    for (let k = -r; k <= r; k++) s += from[start + Math.min(w - 1, Math.max(0, k)) * stride];
    for (let x = 0; x < w; x++) {
      to[start + x * stride] = s * norm;
      const add = Math.min(w - 1, x + r + 1);
      const drop = Math.max(0, x - r);
      s += from[start + add * stride] - from[start + drop * stride];
    }
  };
  for (let p = 0; p < passes; p++) {
    for (let y = 0; y < w; y++) line(a, b, y * w, 1);
    for (let x = 0; x < w; x++) line(b, a, x, w);
  }
  return a;
}

// Split across idle callbacks so no stage becomes a long task.
async function analyse(image) {
  const W = WORK;
  const N = W * W;
  const c = document.createElement("canvas");
  c.width = c.height = W;
  const g = c.getContext("2d", { willReadFrequently: true });
  if (!g) return null;
  g.imageSmoothingQuality = "high";
  g.drawImage(image, 0, 0, W, W);
  const px = g.getImageData(0, 0, W, W).data;

  const lum = new Float32Array(N);
  const sat = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    const r = px[i * 4] / 255;
    const gr = px[i * 4 + 1] / 255;
    const b = px[i * 4 + 2] / 255;
    const max = Math.max(r, gr, b);
    const min = Math.min(r, gr, b);
    lum[i] = 0.2126 * r + 0.7152 * gr + 0.0722 * b;
    sat[i] = max > 0 ? (max - min) / max : 0;
  }

  await idle();

  // Background: near-white, low-chroma pixels connected to the frame edge.
  // Skin is pale here but warm (saturation > 0.18); the wall is neutral (< 0.02).
  const isBg = (i) => sat[i] < 0.1 && lum[i] > 0.6;
  const bg = new Uint8Array(N);
  const stack = new Int32Array(N);
  let top = 0;
  const seed = (i) => {
    if (!bg[i] && isBg(i)) {
      bg[i] = 1;
      stack[top++] = i;
    }
  };
  for (let k = 0; k < W; k++) {
    seed(k);
    seed((W - 1) * W + k);
    seed(k * W);
    seed(k * W + W - 1);
  }
  while (top) {
    const i = stack[--top];
    const x = i % W;
    if (x > 0) seed(i - 1);
    if (x < W - 1) seed(i + 1);
    if (i >= W) seed(i - W);
    if (i < N - W) seed(i + W);
  }

  // Morphological opening (erode, then dilate, 1 px) of the subject: lone
  // hair strands thinner than ~6 px in the photo would become stray dots.
  const opened = new Uint8Array(N);
  for (let i = 0; i < N; i++) {
    const x = i % W;
    opened[i] =
      bg[i] ||
      (x > 0 && bg[i - 1]) ||
      (x < W - 1 && bg[i + 1]) ||
      (i >= W && bg[i - W]) ||
      (i < N - W && bg[i + W])
        ? 1
        : 0;
  }
  for (let i = 0; i < N; i++) {
    const x = i % W;
    bg[i] =
      opened[i] &&
      (x === 0 || opened[i - 1]) &&
      (x === W - 1 || opened[i + 1]) &&
      (i < W || opened[i - W]) &&
      (i >= N - W || opened[i + W])
        ? 1
        : 0;
  }

  // Keep only the largest subject region: specks of wall texture or a lone
  // stray hair would otherwise become floating particles.
  const label = new Int32Array(N);
  let best = 0;
  let bestSize = 0;
  for (let i0 = 0, id = 0; i0 < N; i0++) {
    if (bg[i0] || label[i0]) continue;
    id++;
    let area = 0;
    label[i0] = id;
    stack[top++] = i0;
    while (top) {
      const i = stack[--top];
      area++;
      const x = i % W;
      for (let k = 0; k < 4; k++) {
        const j = k === 0 ? (x > 0 ? i - 1 : -1) : k === 1 ? (x < W - 1 ? i + 1 : -1) : k === 2 ? i - W : i + W;
        if (j >= 0 && j < N && !bg[j] && !label[j]) {
          label[j] = id;
          stack[top++] = j;
        }
      }
    }
    if (area > bestSize) {
      bestSize = area;
      best = id;
    }
  }
  await idle();

  const solid = new Float32Array(N);
  for (let i = 0; i < N; i++) solid[i] = label[i] === best ? 1 : 0;
  const cover = boxBlur(solid, W, 1, 2);

  // Tone: contrast stretch over the subject plus local contrast, so the
  // features survive the coarse particle grid.
  const hist = new Uint32Array(256);
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (cover[i] > 0.9) {
      hist[Math.min(255, (lum[i] * 255) | 0)]++;
      count++;
    }
  }
  const pct = (p) => {
    let acc = 0;
    for (let v = 0; v < 256; v++) {
      acc += hist[v];
      if (acc >= count * p) return v / 255;
    }
    return 1;
  };
  const lo = pct(0.02);
  const hi = pct(0.985);
  const span = Math.max(0.05, hi - lo);
  const soft = boxBlur(lum, W, 5, 2);

  const alpha = new Float32Array(N);
  const tone = new Float32Array(N);
  const warm = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    const x = (i % W) / W;
    const y = Math.floor(i / W) / W;
    let a = cover[i];
    // Grey anti-aliased fringe between hair and wall: drop its light part.
    if (a < 0.999 && sat[i] < 0.12) a *= 1 - smoothstep(0.2, 0.42, lum[i]);
    // Let the shoulders dissolve instead of ending on the photo's hard edge.
    a *= 1 - smoothstep(0.8, 0.99, y);
    // The hair touches the top of the frame: soften that cut too.
    a *= smoothstep(0.004, 0.03, y);
    a *= 1 - smoothstep(0.3, 0.5, Math.abs(x - 0.5)) * smoothstep(0.62, 0.92, y);
    alpha[i] = a;
    const t = (lum[i] - lo) / span + (1.1 * (lum[i] - soft[i])) / span;
    tone[i] = Math.min(1, Math.max(0, t));
    warm[i] = smoothstep(0.14, 0.34, sat[i]) * smoothstep(0.25, 0.5, lum[i]);
  }
  return { alpha, tone, warm };
}

function sample(arr, u, v) {
  const W = WORK;
  const x = Math.min(W - 1.001, Math.max(0, u * W - 0.5));
  const y = Math.min(W - 1.001, Math.max(0, v * W - 0.5));
  const x0 = x | 0;
  const y0 = y | 0;
  const fx = x - x0;
  const fy = y - y0;
  const i = y0 * W + x0;
  const top = arr[i] + (arr[i + 1] - arr[i]) * fx;
  const bottom = arr[i + W] + (arr[i + W + 1] - arr[i + W]) * fx;
  return top + (bottom - top) * fy;
}

// Deterministic jitter, so a re-sample on resize does not reshuffle the face.
function rng(seed) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---------------------------------------------------------------------------
// Canvas, particles and loop.

function mount(map) {
  const canvas = document.createElement("canvas");
  canvas.setAttribute("aria-hidden", "true");
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let size = 0; // CSS px, square
  let dpr = 1;
  let spacing = 4;
  let n = 0;
  // Per particle: home, tween start offset, physics offset and velocity,
  // sampled photo values, drawn radius. Typed arrays, sized per layout.
  let hx, hy, sx, sy, delay, ox, oy, vx, vy, pTone, pAlpha, pWarm, radius;
  let order = new Int32Array(0); // particle indices grouped by draw batch
  const batchEnd = new Int32Array(TINTS.length * LEVELS);
  let batchStyle = [];

  let introAt = -1; // timestamp the assembly started, -1 = not yet
  let introDone = false;
  let running = false;
  let raf = 0;
  let maxV = 0; // largest speed and offset after the last physics step
  let maxO = 0;
  let onScreen = false;
  let last = 0;
  let acc = 0;
  const pointer = { x: 0, y: 0, active: false };

  // Physics constants, scaled with the rendered size in layout().
  const K = 0.045; // spring stiffness per step
  const DAMP = 0.86; // velocity kept per step
  let reach = 70; // repulsion radius
  let push = 3; // repulsion strength at the pointer

  function layout() {
    const rect = container.getBoundingClientRect();
    const next = Math.round(rect.width);
    if (!next) return false;
    size = next;
    dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = Math.round(size * dpr);
    canvas.height = Math.round(size * dpr);
    reach = size * 0.2;
    push = size * 0.014;

    // Particle count scales with the rendered size: ~96 columns at 400 px
    // (about 5k particles), 58 at phone size (about 1.9k).
    const cols = Math.round(Math.min(96, Math.max(58, size / 4.15)));
    spacing = size / cols;
    const rowH = spacing * 0.866;
    const rows = Math.floor(size / rowH);
    const cap = cols * rows;
    const tx = new Float32Array(cap);
    const ty = new Float32Array(cap);
    const tt = new Float32Array(cap);
    const ta = new Float32Array(cap);
    const tw = new Float32Array(cap);
    const rand = rng(7);
    n = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = (c + 0.5 + (r & 1 ? 0.25 : -0.25) + (rand() - 0.5) * 0.3) * spacing;
        const y = (r + 0.5 + (rand() - 0.5) * 0.3) * rowH;
        const u = x / size;
        const v = y / size;
        const a = sample(map.alpha, u, v);
        if (a < 0.06) continue;
        tx[n] = x;
        ty[n] = y;
        ta[n] = a;
        tt[n] = sample(map.tone, u, v);
        tw[n] = sample(map.warm, u, v);
        n++;
      }
    }
    hx = tx.slice(0, n);
    hy = ty.slice(0, n);
    pAlpha = ta.slice(0, n);
    pTone = tt.slice(0, n);
    pWarm = tw.slice(0, n);
    sx = new Float32Array(n);
    sy = new Float32Array(n);
    delay = new Float32Array(n);
    ox = new Float32Array(n);
    oy = new Float32Array(n);
    vx = new Float32Array(n);
    vy = new Float32Array(n);
    radius = new Float32Array(n);
    order = new Int32Array(n);

    // Assembly: each particle starts somewhere in a soft disc of dust around
    // the face and is released with a small stagger, top of the head first.
    const half = size / 2;
    for (let i = 0; i < n; i++) {
      const ang = rand() * TAU;
      const dist = Math.sqrt(rand()) * half * 0.98;
      sx[i] = half + Math.cos(ang) * dist - hx[i];
      sy[i] = half + Math.sin(ang) * dist - hy[i];
      delay[i] = rand() * 0.28 + (hy[i] / size) * 0.12;
    }
    container.dataset.particles = String(n);
    return true;
  }

  // Theme: read the tokens and map tone to ink as contrast against the page
  // background, so dark hair and the black t-shirt still read on #0f0f0e.
  const probe = document.createElement("canvas").getContext("2d");
  function color(token, fallback) {
    const raw = getComputedStyle(document.documentElement).getPropertyValue(token).trim();
    probe.fillStyle = fallback;
    if (raw) probe.fillStyle = raw;
    const v = probe.fillStyle;
    if (v.startsWith("#")) {
      return [1, 3, 5].map((k) => parseInt(v.slice(k, k + 2), 16));
    }
    const m = v.match(/[\d.]+/g) || [0, 0, 0];
    return m.slice(0, 3).map(Number);
  }

  function paint() {
    const bg = color("--bg", "#0f0f0e");
    const text = color("--text", "#ecebe6");
    const accent = color("--accent", "#e3a857");
    const dark = 0.2126 * bg[0] + 0.7152 * bg[1] + 0.0722 * bg[2] < 128;

    batchStyle = [];
    for (let t = 0; t < TINTS.length; t++) {
      const mix = TINTS[t];
      const rgb = text.map((v, k) => Math.round(v + (accent[k] - v) * mix));
      for (let l = 0; l < LEVELS; l++) {
        const a = 0.3 + (0.7 * (l + 1)) / LEVELS;
        batchStyle.push(`rgba(${rgb[0]},${rgb[1]},${rgb[2]},${a.toFixed(3)})`);
      }
    }

    // Ink: how far a particle stands out from the page. Dark theme: light
    // parts of the photo; light theme: dark parts. A floor keeps hair and
    // t-shirt present as a quiet texture in the dark theme.
    const counts = new Int32Array(batchEnd.length);
    const batch = new Int16Array(n);
    for (let i = 0; i < n; i++) {
      const t = pTone[i];
      const v = dark ? Math.pow(t, 1.7) : Math.pow(1 - t, 0.9);
      const ink = pAlpha[i] * (dark ? 0.17 + 0.83 * v : 0.12 + 0.88 * v);
      if (ink < 0.07) {
        batch[i] = -1;
        continue;
      }
      // Light dots on a dark page read larger (irradiation): draw them smaller.
      radius[i] = spacing * (dark ? 0.08 + 0.31 * Math.sqrt(ink) : 0.1 + 0.37 * Math.sqrt(ink));
      const level = Math.min(LEVELS - 1, Math.floor(ink * LEVELS));
      // Warmth only where the photo is warm (skin, lips): a touch of amber.
      const tint = Math.min(TINTS.length - 1, Math.round(pWarm[i] * (dark ? v : 0.6) * 2));
      const b = tint * LEVELS + level;
      batch[i] = b;
      counts[b]++;
    }
    let sum = 0;
    for (let b = 0; b < counts.length; b++) {
      sum += counts[b];
      batchEnd[b] = sum;
    }
    const fill = new Int32Array(counts.length);
    for (let b = 1; b < counts.length; b++) fill[b] = batchEnd[b - 1];
    for (let i = 0; i < n; i++) if (batch[i] >= 0) order[fill[batch[i]]++] = i;
  }

  function draw(now) {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, size, size);
    let intro = 1;
    if (!introDone) {
      const t = (now - introAt) / INTRO_MS;
      ctx.globalAlpha = Math.min(1, t * 2.2);
      intro = t;
    } else {
      ctx.globalAlpha = 1;
    }
    let from = 0;
    for (let b = 0; b < batchEnd.length; b++) {
      const to = batchEnd[b];
      if (to === from) continue;
      ctx.fillStyle = batchStyle[b];
      ctx.beginPath();
      for (let k = from; k < to; k++) {
        const i = order[k];
        let x = hx[i] + ox[i];
        let y = hy[i] + oy[i];
        if (intro < 1) {
          const p = Math.min(1, Math.max(0, (intro - delay[i]) / (1 - 0.4)));
          const e = 1 - p;
          const rest = e * e * e; // ease-out cubic
          x += sx[i] * rest;
          y += sy[i] * rest;
        }
        const r = radius[i];
        ctx.moveTo(x + r, y);
        ctx.arc(x, y, r, 0, TAU);
      }
      ctx.fill();
      from = to;
    }
  }

  // One fixed physics step; records the largest speed and offset (rest test).
  function step() {
    maxV = 0;
    maxO = 0;
    const R = reach;
    const R2 = R * R;
    const mx = pointer.x;
    const my = pointer.y;
    const active = pointer.active;
    for (let i = 0; i < n; i++) {
      let fx = -K * ox[i];
      let fy = -K * oy[i];
      if (active) {
        const dx = hx[i] + ox[i] - mx;
        const dy = hy[i] + oy[i] - my;
        const d2 = dx * dx + dy * dy;
        if (d2 < R2) {
          const d = Math.sqrt(d2) + 0.001;
          const f = 1 - d / R;
          const s = (f * f * push) / d;
          fx += dx * s;
          fy += dy * s;
        }
      }
      const nvx = (vx[i] + fx) * DAMP;
      const nvy = (vy[i] + fy) * DAMP;
      vx[i] = nvx;
      vy[i] = nvy;
      ox[i] += nvx;
      oy[i] += nvy;
      const v = Math.abs(nvx) + Math.abs(nvy);
      if (v > maxV) maxV = v;
      const o = Math.abs(ox[i]) + Math.abs(oy[i]);
      if (o > maxO) maxO = o;
    }
  }

  function settle() {
    ox.fill(0);
    oy.fill(0);
    vx.fill(0);
    vy.fill(0);
  }

  // Ripple from a tap or click: an outward kick, then the springs bring the
  // particles home.
  function kick(x, y) {
    const R = reach * 1.35;
    for (let i = 0; i < n; i++) {
      const dx = hx[i] + ox[i] - x;
      const dy = hy[i] + oy[i] - y;
      const d2 = dx * dx + dy * dy;
      if (d2 < R * R) {
        const d = Math.sqrt(d2) + 0.001;
        const s = ((1 - d / R) * push * 2.4) / d;
        vx[i] += dx * s;
        vy[i] += dy * s;
      }
    }
  }

  function frame(now) {
    if (!running) return;
    if (introAt < 0) introAt = now;
    acc += Math.min(64, now - last);
    last = now;
    let steps = 0;
    while (acc >= STEP && steps < 4) {
      step();
      acc -= STEP;
      steps++;
    }
    if (!introDone && now - introAt >= INTRO_MS) introDone = true;
    const still = steps > 0 && maxV < 0.01 && (pointer.active || maxO < 0.05);
    const asleep = introDone && still;
    if (asleep && !pointer.active) settle();
    draw(now);
    if (asleep) running = false;
    else raf = requestAnimationFrame(frame);
  }

  function stop() {
    running = false;
    cancelAnimationFrame(raf);
  }

  function wake() {
    if (running || reduceQuery.matches || !onScreen || document.hidden) return;
    running = true;
    acc = 0;
    raf = requestAnimationFrame((now) => {
      last = now;
      frame(now);
    });
  }

  function renderStatic() {
    introAt = 0;
    introDone = true;
    settle();
    draw(0);
  }

  // Mount only once there is something to draw; otherwise the photo stays.
  if (!layout()) return;
  paint();
  container.append(canvas);

  // Pointer: mouse and pen push continuously; touch kicks on tap and pushes
  // while the finger moves, without blocking page scroll (passive listeners).
  function local(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    const scale = rect.width ? size / rect.width : 1;
    pointer.x = (clientX - rect.left) * scale;
    pointer.y = (clientY - rect.top) * scale;
  }
  function interactive() {
    return !reduceQuery.matches && n > 0;
  }
  canvas.addEventListener("pointermove", (e) => {
    if (e.pointerType === "touch" || !interactive()) return;
    local(e.clientX, e.clientY);
    pointer.active = true;
    wake();
  });
  canvas.addEventListener("pointerleave", (e) => {
    if (e.pointerType === "touch") return;
    pointer.active = false;
    wake();
  });
  canvas.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "touch" || !interactive()) return;
    local(e.clientX, e.clientY);
    kick(pointer.x, pointer.y);
    wake();
  });
  canvas.addEventListener(
    "touchstart",
    (e) => {
      if (!interactive()) return;
      const t = e.touches[0];
      local(t.clientX, t.clientY);
      kick(pointer.x, pointer.y);
      pointer.active = true;
      wake();
    },
    { passive: true },
  );
  canvas.addEventListener(
    "touchmove",
    (e) => {
      if (!interactive()) return;
      const t = e.touches[0];
      local(t.clientX, t.clientY);
      wake();
    },
    { passive: true },
  );
  const release = () => {
    pointer.active = false;
    wake();
  };
  canvas.addEventListener("touchend", release, { passive: true });
  canvas.addEventListener("touchcancel", release, { passive: true });

  // Sleep off screen; the assembly starts the first time the portrait is seen.
  new IntersectionObserver((entries) => {
    onScreen = entries[entries.length - 1].isIntersecting;
    if (!onScreen) {
      stop();
      return;
    }
    container.classList.add("is-particles");
    wake();
  }).observe(canvas);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else wake();
  });

  // Theme: data-theme toggles, or the OS scheme when nothing is stored.
  const repaint = () => {
    paint();
    if (!running && introAt >= 0) draw(performance.now());
  };
  new MutationObserver(repaint).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  schemeQuery.addEventListener("change", repaint);

  reduceQuery.addEventListener("change", () => {
    if (!reduceQuery.matches) return;
    stop();
    pointer.active = false;
    renderStatic();
  });

  // Debounced re-sample on resize (the grid depends on the rendered size).
  let resizeTimer = 0;
  new ResizeObserver(() => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const width = Math.round(container.getBoundingClientRect().width);
      const ratio = Math.min(2, window.devicePixelRatio || 1);
      if (width === size && ratio === dpr) return;
      if (!layout()) return;
      paint();
      if (introAt < 0) return; // not seen yet: the assembly still runs later
      introDone = true;
      draw(performance.now());
    }, 160);
  }).observe(container);

  if (reduceQuery.matches) {
    container.classList.add("is-particles");
    renderStatic();
  }
}
