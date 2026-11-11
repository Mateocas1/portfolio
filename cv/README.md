# CV source

`cv.tex` is the source of `../CV_Mateo_Vazquez_Castiglione.pdf` (one page, A4, single column, real text, working links).
The download is the public build: the phone line is left out by defining `\CVPublic` before the source.

Build (from the repo root, with [Tectonic](https://tectonic-typesetting.github.io/)):

```bash
cd cv && printf '\\def\\CVPublic{}\\input{cv.tex}\n' > public.tex && tectonic -c minimal public.tex \
  && cp public.pdf ../CV_Mateo_Vazquez_Castiglione.pdf && rm public.tex public.pdf
```

Packages: `fontenc`, `lmodern`, `babel`, `geometry`, `enumitem`, `titlesec`, `xurl`, `hyperref` (Tectonic downloads them on first run).
Build artifacts are not committed; keep the CV to one page when editing.
