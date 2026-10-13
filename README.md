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

## Hidden blocks, ready to switch on

Three blocks are already written in `index.html` but hidden inside HTML comments. Each one is wrapped between a `…-START` line and a `…-END -->` line; delete those two lines to show the block.

**Email** (`EMAIL-START` … `EMAIL-END`, Contact section)
1. Delete the two marker lines.
2. Replace `[EMAIL]` twice: in `href="mailto:[EMAIL]"` and in the link text.
3. Optionally change the Contact intro to say email is the fastest way to reach you.

**CV** (`CV-START` … `CV-END`, Contact section)
1. Upload the PDF, e.g. as `assets/Francesco-Cimarra-CV.pdf`.
2. Delete the two marker lines and set `href="assets/Francesco-Cimarra-CV.pdf"`.

**Projects section** (`PROJECTS-START` … `PROJECTS-END`, between Skills and Experience)
1. Delete the two marker lines.
2. Fill in the cards: replace every `[…]` (title, year, domain, summary, problem, result, technologies, links). Delete a link if it does not exist.
3. Add `<li><a href="#projects">Projects</a></li>` to the nav, after Skills.
4. Renumber the section labels: Projects `03`, Trajectory `04`, Contact `05`.
5. Optionally point the hero button back to `#projects` with the text “View projects”.

Card layout: the first card has `is-featured` and spans the full width. With 3 projects keep it as is; with 2 or 4 projects remove `is-featured` so the cards form an even grid. To add a card, copy an `<article class="project-card">` block.

## Keep up to date

- **After the ESA internship ends (Nov 2026):** update the hero status chip, the “Currently” stat, the `is-current` markers in the timeline, `jobTitle`/`worksFor` in the JSON-LD block in `<head>`, and regenerate `assets/img/og-image.png`, which also mentions ESA.
- **Availability:** “early 2027” appears in the About “Looking for” box and next to “Open to new opportunities” in Contact.
- **Accent colour:** change `--accent` (and `--accent-*`) in `assets/css/style.css`.

## Local preview

Open `index.html` in a browser, or run a static server from the repository root:

```
python3 -m http.server 8000
```

then visit http://localhost:8000.
