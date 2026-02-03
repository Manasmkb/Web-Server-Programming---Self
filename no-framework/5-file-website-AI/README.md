# 5-File Website (AI) — No Framework

This folder contains a simple website built with **only five files**:

- `index.html` — page structure
- `styles.css` — styling (light/dark theme supported)
- `data.js` — local “data source” (acts like a mock API)
- `app.js` — DOM rendering + search/filter + theme persistence
- `README.md` — documentation

## How to run locally
1. Open `index.html` in a browser, or
2. Use VS Code Live Server (optional)

## What it demonstrates
- DOM APIs: `createElement`, `appendChild`, `DocumentFragment`
- Event handling: `input`, `change`, `click`
- Simple state: search query + dropdown selection
- Persistence: theme stored in `localStorage`

## How to extend
- Add more objects to `window.SITE_ITEMS` in `data.js`
- Add more categories/tags
- Change the CSS theme values in `styles.css`
