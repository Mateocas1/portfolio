# CV source

`cv.tex` is the source of `../CV_Mateo_Vazquez.pdf` (one page, A4, single column, real text, working links).

Build (from the repo root):

```bash
cd cv && xelatex -interaction=nonstopmode cv.tex && cp cv.pdf ../CV_Mateo_Vazquez.pdf
```

Toolchain: XeLaTeX (TeX Live) with `fontspec` (Latin Modern Roman), `geometry`, `microtype` and `hyperref`.
On Debian/Ubuntu: `apt-get install texlive-xetex texlive-latex-recommended texlive-latex-extra texlive-fonts-recommended lmodern`.
Build artifacts (`*.aux`, `*.log`, `cv.pdf`) are not committed; keep the CV to one page when editing.
