# portfolio — agent guide

Personal portfolio of Mateo Vazquez, junior backend developer. Static site: plain HTML, CSS and ES modules, no build
step and no dependencies, published by GitHub Pages at `https://mateocas1.github.io/portfolio/` (a sub-path: every
URL in the site is relative).

## Start here

1. Read the current feature document in `odd/tasks/` completely (Specs, Tasks, Decisions, Log).
2. Work only on the files your task owns; other units may be running in parallel.

## Layout

| Path | What |
|---|---|
| `index.html` | Home: hero, numbers, projects, stack, writing, education, contact |
| `<project>.html` | Case pages (Spanish only, no language toggle) |
| `escritos/` | Long-form writing |
| `styles.css` | Core: tokens, ambient layer, glass, layout, shared components, case pages |
| `css/<feature>.css` | Feature styles, linked only by the pages that use them |
| `script.js` | Core module: theme, language, menu, reveal, time-boxed content, spotlight |
| `js/<feature>.js` | Feature modules (progressive enhancement) |
| `js/i18n/<section>.js` | Per-section translations, merged by `script.js` |
| `cv/` | Source of `CV_Mateo_Vazquez.pdf` |
| `odd/tasks/` | Feature documents (ODD); excluded from the published site by `_config.yml` |

## Conventions

- **Facts are verified.** Every number on the site comes from a project repository, its README or the owner's CV.
  Never round up, never invent. When a fact changes, update `index.html`, `script.js` (both languages), the case page
  and the CV together.
- **Copy:** Spanish in Río de la Plata voseo ("ganás", "escribime"), sentence case, no emoji, no hype words. English
  translations live in the i18n dictionaries. Code, comments, identifiers, commits and docs in English.
- **Design:** tokens on `:root` with light and dark values (both `[data-theme]` and `prefers-color-scheme`). The
  amber accent is for actions and live signals only; labels and metadata are neutral. Glass (`.glass`) only on
  surfaces above the ambient layer.
- **Progressive enhancement:** the HTML is complete without JavaScript; JS replaces or enhances, never creates the
  only copy of content. Every animation has a `prefers-reduced-motion` path.
- **Accessibility:** WCAG 2.1 AA contrast in both themes, visible focus, keyboard parity for every pointer
  interaction, a visible label contained in the accessible name.
- **i18n:** an element with `data-i18n` must contain text only (its `textContent` is replaced).
- Conventional Commits.

## Checks before a commit

```bash
python3 -m http.server 8765        # then open http://localhost:8765/
```

With Playwright (preinstalled), for every page at 360, 390, 768, 1024 and 1440 px in both themes: no horizontal
overflow (`document.documentElement.scrollWidth <= innerWidth`), no console errors, the language toggle swaps every
`data-i18n` node, and a reduced-motion run shows all content.
