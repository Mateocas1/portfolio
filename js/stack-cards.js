// Stack flip cards.
//
// Progressive enhancement over complete HTML: without this module every card
// shows both faces. With it, the faces share one 3D stage and:
// - the toggle (a real <button>, aria-pressed) flips a card with click, tap,
//   Enter or Space; each card is independent, so tapping another card does not
//   flip the first one back;
// - a mouse hovering an unflipped card previews its back after a short intent
//   delay, so sweeping across the grid does not flip a row of cards; leaving
//   returns the card to its pressed state, and a click always flips what is on
//   screen;
// - every card gets the height of the tallest one, re-measured on resize,
//   language change and font load.

const root = document.querySelector("[data-stack-cards]");

if (root) enhance(root);

function enhance(stage) {
  const cards = [...stage.querySelectorAll("[data-stack-card]")];
  if (!cards.length) return;

  const mouseCanHover = window.matchMedia("(hover: hover) and (pointer: fine)");
  const HOVER_INTENT_MS = 140;

  for (const card of cards) {
    const toggle = card.querySelector(".stack-card__toggle");
    if (!toggle) continue;

    let pressed = false; // the state the button reports
    let peeking = false; // mouse-hover preview, visual only
    let intent = 0;
    let frame = 0;

    const render = () => card.classList.toggle("is-flipped", pressed || peeking);

    toggle.addEventListener("click", () => {
      // A click flips whatever is on screen, peek included.
      const showingBack = pressed || peeking;
      window.clearTimeout(intent);
      peeking = false;
      pressed = !showingBack;
      toggle.setAttribute("aria-pressed", String(pressed));
      render();
    });

    card.addEventListener("pointerenter", (event) => {
      if (event.pointerType !== "mouse" || !mouseCanHover.matches) return;
      card.classList.add("is-hovered");
      if (pressed) return;
      intent = window.setTimeout(() => {
        peeking = true;
        render();
      }, HOVER_INTENT_MS);
    });

    card.addEventListener("pointerleave", () => {
      window.clearTimeout(intent);
      card.classList.remove("is-hovered");
      if (!peeking) return;
      peeking = false;
      render();
    });

    card.addEventListener("pointermove", (event) => {
      if (event.pointerType !== "mouse" || frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${Math.round(event.clientX - rect.left)}px`);
        card.style.setProperty("--my", `${Math.round(event.clientY - rect.top)}px`);
      });
    });

    toggle.hidden = false;
  }

  stage.querySelectorAll(".stack-hint[data-stack-js]").forEach((node) => {
    node.hidden = false;
  });
  stage.classList.add("is-interactive");

  // Equal heights: measure every card at its natural height (the taller of
  // its two faces), then give them all the tallest one.
  const equalize = () => {
    stage.classList.add("is-measuring");
    let tallest = 0;
    for (const card of cards) {
      tallest = Math.max(tallest, card.getBoundingClientRect().height);
    }
    stage.classList.remove("is-measuring");
    stage.style.setProperty("--stack-card-h", `${Math.ceil(tallest)}px`);
  };

  let scheduled = 0;
  const schedule = () => {
    if (scheduled) return;
    scheduled = window.requestAnimationFrame(() => {
      scheduled = 0;
      equalize();
    });
  };

  equalize();

  if ("ResizeObserver" in window) {
    let lastWidth = stage.clientWidth;
    new ResizeObserver(() => {
      // Only a width change can change wrapping; setting the height would
      // otherwise trigger this observer again.
      if (stage.clientWidth === lastWidth) return;
      lastWidth = stage.clientWidth;
      schedule();
    }).observe(stage);
  } else {
    window.addEventListener("resize", schedule);
  }

  // script.js swaps every data-i18n node when the language changes.
  new MutationObserver(schedule).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["lang"],
  });

  document.fonts?.ready.then(schedule);
}
