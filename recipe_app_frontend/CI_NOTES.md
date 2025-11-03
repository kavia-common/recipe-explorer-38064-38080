# CI Notes for recipe_app_frontend

- The React app uses Create React App (CRA) and requires a public/index.html with a #root element. This file is now present.
- The dev server is configured with:
  - HOST=0.0.0.0
  - PORT from REACT_APP_PORT (defaults to 3000)
  - BROWSER=none
- In CI, use `npm run start:ci` or `npm run build` then `npm run serve` for a static serve.
- The Sign In screen loads assets from `/assets/...`, which are placed under `public/assets`. Ensure any future extracted assets are copied into `public/assets` (not imported from outside src).
- Environment variables used by scripts:
  - REACT_APP_PORT (optional)
  - other REACT_APP_* vars are not required for startup, but can be provided via `.env`.
- Tests no longer rely on the CRA starter "learn react" content and instead assert the landing copy.

Notes:
- Do not import CSS or other files from outside `src/`; instead, reference them via `<link>` tags pointing to `/assets/...` or import within `src` when they are inside `src`.
- All design assets from the Figma export have been copied to `public/assets/` to avoid "Module not found" errors about importing files outside `src`.
