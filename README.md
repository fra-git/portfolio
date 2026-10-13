# Francesco Cimarra — Portfolio

One-page portfolio for **Francesco Cimarra**, Data & AI professional with a software engineering background, IT & Data Tools Intern at the European Space Agency and MSc Data Science & AI student at EDHEC Business School.

Live site: https://fra-git.github.io/portfolio/

## Structure

```
index.html              all page content
assets/css/style.css    styles; colours, fonts and spacing are tokens in :root at the top
assets/js/main.js       mobile menu, active nav link, scroll fade-in, copy-email button
assets/img/             favicon, Apple touch icon, social preview image (og-image.png)
.nojekyll               tells GitHub Pages to serve the files as they are
```

No build step, no framework, no dependencies apart from the Geist fonts loaded from Google Fonts. The page works without JavaScript.

## Filling in the placeholders

Search `index.html` for `[` to find every placeholder:

| Placeholder | Where | What to put |
| --- | --- | --- |
| `[WHAT YOU’RE LOOKING FOR …]`, `[DATE]` | About, “Looking for” box | Role type and availability date |
| `[PROJECT 1–3 …]`, `[YEAR]`, `[DOMAIN]`, `[Tech 1–3]` | Projects | Title, summary, problem, result, technologies |
| `[PROJECT n — GitHub URL]`, `[PROJECT 1 — Demo URL]` | Projects | Repository and demo links; delete a link if it does not exist |
| `[STATUS …]` | Education, CAPM box | Certification status |
| `[EMAIL]` | Contact | Your address, in both `href="mailto:…"` and the link text |
| `[CV_URL]` | Contact | Upload the PDF, e.g. `assets/Francesco-Cimarra-CV.pdf`, and link it |

To add a fourth project, copy one of the `<article class="project-card">` blocks. Only the first card has `is-featured`, which makes it span the full width.

## Keep up to date

- **After the ESA internship ends (Nov 2026):** update the hero status chip, the “Currently” stat, the `is-current` markers in the timeline, `jobTitle`/`worksFor` in the JSON-LD block in `<head>`, and regenerate `assets/img/og-image.png`, which also mentions ESA.
- **Accent colour:** change `--accent` (and `--accent-*`) in `assets/css/style.css`.

## Local preview

Open `index.html` in a browser, or run a static server from the repository root:

```
python3 -m http.server 8000
```

then visit http://localhost:8000.
