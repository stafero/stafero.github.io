# stafero.github.io

Professional profile and portfolio of **Stanislav Ferenc** – published with GitHub Pages at <https://stafero.github.io/>.

Plain static site: no build step, no framework, no cookies and no analytics. The only external call is the CV download counter (see Notes).

## Structure

```
/
├── index.html            Page structure (sections, tabs, banner)
├── 404.html              "Page not found" page (served by GitHub Pages)
├── favicon.ico           Browser icon (must stay in the root)
├── robots.txt            Allows search engines, points to the sitemap
├── sitemap.xml           Single-page sitemap
├── .nojekyll             Tells GitHub Pages to serve files as-is (no Jekyll)
├── README.md             This file
└── assets/
    ├── css/styles.css    Layout, light/dark theme, banner, A4 print (CV) layout
    ├── js/data.js        ALL CONTENT – edit this to update the profile
    ├── js/app.js         Renders data.js into the page, tabs, theme, CV export
    ├── js/banner.js      Animated "governed data flow" banner behind the hero
    ├── js/counter.js     "CV downloads" counter under the hero buttons
    └── img/              Icons and the social preview image (og-image.png)
```

## Updating content

1. Edit `assets/js/data.js` (roles, projects, courses, workshops, …) and change `updated` at the top.
2. Open `index.html` locally in a browser to check.
3. Commit and push – GitHub Pages republishes within about a minute.

## Publishing (first time)

```bash
cd D:\repo\Public_Profile
git init
git branch -M main
git add .
git commit -m "Initial version of professional profile"
git remote add origin https://github.com/stafero/stafero.github.io.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
The site is live at <https://stafero.github.io/> after the first deployment finishes (Actions tab shows progress).

## Later updates

GitHub Pages lets browsers cache CSS/JS for 10 minutes. So that visitors get the new
files immediately, raise the version tag `?v=…` on the `<link>`/`<script>` lines in
`index.html` and `404.html` whenever you change a CSS or JS file (e.g. `?v=20261124-1`).
A plain `data.js` content change needs it too.


```bash
git add .
git commit -m "Update workshops"
git push
```

## Notes

- The "Download CV (PDF)" button opens the browser's print dialog with a dedicated A4 CV layout – choose "Save as PDF".
- The banner animation pauses when off-screen and is replaced by a still frame for visitors who prefer reduced motion.
- The headline (`person.headline` in data.js, parts separated by " · ") is revealed part by part, each part spinning once, on every page load; with reduced motion it is shown immediately.
- The e-mail address is assembled at runtime to keep it out of simple plain-text scrapers.
- CV download counter: uses the free public counter service abacus.jasoncameron.dev (settings `cvCounter` in data.js). The number is read on each page load and increased when the CV is exported (button or Ctrl+P), at most once per browser session. Open `https://stafero.github.io/?nocount` once in your own browsers so your own tests are not counted (`?count` undoes it). When opened from disk the counter shows a preview and never contacts the service.
