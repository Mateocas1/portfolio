# portfolio

Personal portfolio of Mateo Vazquez — junior backend developer (APIs, integrations and data). Static site: plain
HTML, CSS and ES modules, no build step and no dependencies. Deployed at https://mateocas1.github.io/portfolio/.

## Preview locally

```sh
python3 -m http.server 8765
```

Then open http://localhost:8765/.

## Structure

- `index.html` — home; `<project>.html` — case pages; `escritos/` — long-form writing.
- `styles.css` — design tokens, ambient layer, glass system and shared layout; `css/` — feature styles.
- `script.js` — theme, language, menu, reveal and time-boxed content; `js/` — feature modules and per-section
  translations.
- `cv/` — source of `CV_Mateo_Vazquez.pdf` and how to rebuild it.
