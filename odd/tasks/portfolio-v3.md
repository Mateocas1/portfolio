# Portfolio v3

Third iteration of the portfolio: the follow-ups proposed after the November 2026 redesign, plus the owner's UI
tastes. Owner: Mateo. Built with AI under ODD. Read every section until `## Log` before working on a task.

The owner was away (asleep, ~8 h) while this ran: every decision below was taken by the orchestrating session under
the standing permission in S1 and is recorded in `## Decisions` with its reasoning, so it can be reviewed and reverted.

## Specs

- **S1 Autonomy and seniority.** "implementar todo de la mejor forma que encuentres, siguiendo las convenciones. Y
  cómo haría la implementación un senior." / "no frenes, no te bloquees pidiéndome alguna decisión [...] asume el
  rol de un tech lead o de un software engineer senior con más de 15 años de experiencia [...] Si crees que es
  controversial o era algo que necesitaba de mí, toma la decisión, pero déjala documentada en un documento."
- **S2 Everything proposed.** "me interesó todo lo que nombraste". The proposals were: (a) the PDF CV is out of date
  (ofertasuper.com live, 21.797 products, 450 rindetuplata tests, "ofertaSUPER" name); (b) when ofertasSUPER comes
  back on 14/11, drop the "paused" flag and restore the live link; (c) a better photo (no white ID-style background);
  (d) a simple architecture diagram per project on the case pages; (e) a short "Escritos" section with the
  postmortem as its first entry.
- **S3 ODD conventions.** "Puedes incluso usar las convenciones que documenta Gentleman Programming como ODD, que usa
  en Gentle Shell."
- **S4 Delegation and model routing.** "Delega la cantidad que quieras en el modelo que veas necesario y el effort
  que veas necesario. No seas tacaño con los tokens, pero tampoco quememos tokens así por así." / "Si vas a delegar
  en Haiku [...] asegúrate que no sobrepase los 100K de contexto."
- **S5 Glassmorphism.** "algunas cosas que me gustan son el glassmorphism."
- **S6 Particle portrait.** "está mi foto ahí. Me gustaría quizás convertirla a ese efecto que son como partículas,
  que sea así, que se haría mi cara a partir de partículas. Ese efecto es conocido, así que intenta buscarlo. Si no
  estás seguro, puedes dejar la foto simplemente."
- **S7 Creative presentation.** "trabajar bien de una forma creativa, cómo usar en las tecnologías, en los proyectos,
  o cómo se muestran, quizás como una card, o mostrando el logo o el nombre y que se dé vuelta mostrando la
  contraparte que queda sin mostrar [...] para mostrar un criterio y un buen gusto en la UI y lo técnico en el front
  también."

## Tasks

| ID | Specs | Task | Route | Status | Commit |
|---|---|---|---|---|---|
| T1 | S1 S3 S5 S2b | Foundation: this document, `AGENTS.md`, glass system and ambient background, index structure and mount points, per-section i18n modules, time-boxed ofertasSUPER status, Person JSON-LD | Parent | done | 0e05894 |
| T2 | S6 | Particle portrait: canvas progressive enhancement over the photo | Opus subagent, high | done | 880f3f9 |
| T3 | S7 | Stack as flip cards: logo and name on the front, where and how it was used on the back | Opus subagent, high | done | ccb69c9 |
| T4 | S2d | Architecture diagram per case page, accessible and theme-aware | Sonnet subagent, high | done | a60f0ea |
| T5 | S2e | "Escritos": Spanish long-form postmortem page and index section | Sonnet subagent, medium | done | e44f5ac |
| T6 | S2a | CV: reproducible source and an updated one-page PDF | Sonnet subagent, high | done | a7720be |
| T7 | S1 | Integration, QA (overflow, console, both themes, both languages, reduced motion) and closing audit loop | Parent + Opus auditor | done | 1102eb0 |

Routing (S4): Opus for the two units where front-end craft is the deliverable (T2 canvas physics and performance, T3
3D interaction and accessibility); Sonnet for bounded, spec-heavy units (T4-T6). Haiku was not used: no unit was
both tiny and isolated enough to be worth a third model, and each unit needed more than 100k tokens of reading or
visual iteration.

## Decisions

Each one was the owner's call in principle (S1); taken by the session, with the reasoning, so it can be reverted.

- **D1 Where ODD lives.** `odd/` was gitignored ("local task docs"). This feature's document is committed because
  the session runs in an ephemeral cloud container: an ignored file would be lost, and S1 asks for the decisions to
  be documented. The rest of `odd/` stays ignored (`.gitignore` now ignores `odd/*` and re-includes this file), and
  `_config.yml` keeps `odd/`, `AGENTS.md`, `README.md` and `cv/` out of the published GitHub Pages site.
- **D2 Glass needs something behind it.** The v2 redesign removed glass because it blurred a flat colour. S5 brings
  it back, so the page now has a fixed ambient layer (two slow, very soft colour fields, amber and slate, plus film
  grain against banding) and glass is used on the surfaces that sit above it: header, number strip, project cards,
  stack cards, writing card, contact. Body text never sits on a low-contrast blur: glass panels keep an opaque-enough
  tint (contrast checked in both themes) and there is a solid fallback without `backdrop-filter`.
- **D3 Particles as progressive enhancement.** The `<img>` stays in the HTML (no-JS, crawlers, LCP, `alt`); the
  canvas replaces it only after the photo has decoded. Reduced motion renders the assembled portrait once, with no
  animation loop. The loop sleeps when the particles are at rest, off screen or in a hidden tab.
- **D4 Flip cards only for the stack, not for projects.** Projects are the main evidence a recruiter scans; hiding
  half of each behind a flip costs scanability and indexability. Technologies are the natural front/back pair: the
  name is the claim, the back is the proof ("dónde y cómo lo usé"). Projects get their creativity from glass cards
  with a pointer spotlight and a framed screenshot instead.
- **D5 ofertasSUPER status switches by date, not by hand.** The pause ends on 14/11/2026 02:45 ART, but Vercel will
  first serve the last pre-fix deployment; the fix ships with the first deploy after that (the daily refresh,
  ~16:15 ART). The page therefore switches at **2026-11-15 00:00 ART**: `data-until` / `data-from` elements are
  swapped by `script.js`, and without JavaScript the conservative "paused" state stays. If the site is not back by
  then, revert the timestamp in `index.html` and `ofertas-super.html`.
- **D6 Component stylesheets.** No build step, so per-feature CSS lives in `css/<feature>.css` next to the core
  `styles.css`, linked only by the pages that use it. Feature JS lives in `js/<feature>.js` as ES modules, and
  per-section translations in `js/i18n/<section>.js`, merged by `script.js`.
- **D7 CV source.** The original PDF was built with XeLaTeX (Latin Modern) from a source that is not in the repo.
  The new source is committed under `cv/` with its build command, so the next update is a text edit, not a
  rewrite. Facts are only updated where a repo or the portfolio proves them; nothing new is claimed.
- **D8 The photo.** S6 says "si no estás seguro, puedes dejar la foto". The particle effect uses the existing photo;
  its white background is removed by the particle sampler (only the subject becomes particles), which also answers
  proposal S2c without asking the owner for a new photo. A new photo with a neutral background would still improve
  the static fallback.

- **D9 Private repository links (found during T4).** `Mateocas1/mena-nails` is private (anonymous clone asks for
  credentials; the account's repository search lists it as private), so the "Repositorio" links on the home page
  and on `mena-nails-inventario.html` were a 404 for every visitor. They are replaced: the inventory case page says
  the code belongs to the client, and the bookings product links the public `Mateocas1/receipt-verifier` (the
  receipt verifier the case page describes: deepseek-v4-flash → qwen3.8-flash → Tesseract cascade, 6 models,
  150 receipts). That repository states that every published number comes from synthetic data, so the "0/30 false
  approvals" claim now says "sintéticos" everywhere it appears (home, case page, both languages). The CV keeps the
  owner's wording; worth aligning on the next CV edit.

## Log

- **L1** (2026-11-05, owner): the S1-S7 message; the owner is away ~8 h and asked for no blocking questions.
- **L2** (2026-11-05, parent): plan and routing as in `## Tasks`; decisions D1-D8 taken before delegating so every
  worker builds against the same contracts (tokens, mount points, file ownership).
- **L3** (2026-11-05, T5 integrated): article verified against the repo postmortem (numbers spot-checked); parent
  changed its tables to stack as labeled blocks under 560 px instead of scrolling sideways. Reading time 8 min
  (≈1,690 words) matches the index card.
- **L4** (2026-11-05, T6 integrated): XeLaTeX installed in the container; `pdftotext` diff against the previous PDF
  shows only the intended fact changes; one A4 page, fonts embedded, 9 links preserved.
- **L5** (2026-11-05, T4 integrated, commit `feat(case-pages)`): four HTML/CSS diagrams checked at 1440 and 390 px
  in both themes. The worker could not clone `mena-nails`, which surfaced D9; D9 shipped in the same commit.
- **L6** (2026-11-05, T3 integrated, ccb69c9): 20 flip cards verified (mouse, keyboard, tap, no-JS, reduced motion,
  EN). Parent fixes: names on one baseline in the grid; `--faint` raised to AA (it measured 4.1:1 dark, 3.9:1
  light, flagged by the worker); removed the unused `.skills` CSS and old `stack.*` keys.
- **L7** (2026-11-05, T2 integrated, 880f3f9): particle portrait verified in both themes, pointer, theme toggle,
  reduced motion and phone layout; ~5,100 particles at 1.4 ms/frame. Parent fix from the worker's note: the page now
  follows live OS theme changes while no theme is stored.
- **L8** (2026-11-05, T7): parent QA matrix (6 pages × 5 widths × 2 themes; console, overflow, 18 internal links and
  anchors, EN leftovers, reduced motion, no-JS): clean. Closing audit round 1 (Opus, independent): six low findings,
  all qualifying (F1 the 60× figure is the broadest search, not the most expensive route; F2 "sintéticos" missing on
  a stack card; F3 mobile menu focus order; F4 toggles announced the opposite state with `aria-pressed`; F5
  attributes and title stayed Spanish in EN; F6 `--faint` under 4.5:1 over the amber glow), plus "≈ 25.000" from its
  not-pursued list because AGENTS.md forbids inflating. Fixed in 1102eb0; CV rebuilt.
- **L9** (2026-11-05, closing audit round 2): no qualifying finding; fixes complete, no regressions. **The loop ends at
  round 2.** Not pursued: the CV keeps "30 comprobantes adversariales" without "sintéticos" (D9, owner's wording);
  desktop tab order reaches the toggles before the nav (deliberate F3 trade-off).
- **L10** (2026-11-05, follow-up): a reminder fires in this session on 2026-11-15 10:00 ART to check that
  ofertasuper.com really answers after the D5 switch, and to clean up the expired `data-until` nodes.

## Open for the owner

Nothing blocks. Worth a look when you are back:

1. D1-D9 above, especially D4 (flip only on the stack) and D5 (status switch by date).
2. The CV line about the receipt verifier could say "sintéticos" like the site (D9).
3. A photo with a neutral background would improve the no-JS fallback (D8); the particle portrait already removes it.
