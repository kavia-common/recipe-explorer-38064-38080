# CI Notes for recipe_app_frontend

- The React app uses Create React App (CRA) and requires a public/index.html with a #root element. This file is present.
- The dev server is configured with:
  - HOST=0.0.0.0
  - PORT from REACT_APP_PORT (defaults to 3000)
  - BROWSER=none

Recommended in CI (low memory, avoid exit 137):
- Use `npm run start:ci` (builds production, then serves statically via `serve`). This reduces memory vs webpack-dev-server and avoids force-kill (exit 137).
- Alternatively, run `npm run build` then `npm run serve`.

Health/Liveness:
- For a simple liveness check without building assets, `npm run healthcheck` starts a tiny HTTP server on REACT_APP_PORT (default 3000) responding with "ok".

Assets:
- The Sign In screen loads assets from `/assets/...`, which are placed under `public/assets`. Ensure any future extracted assets are copied into `public/assets` (not imported from outside src).

Environment variables used by scripts:
- REACT_APP_PORT (optional)
- Other REACT_APP_* vars are not required for startup, but can be provided via `.env`.

Tests:
- Tests assert the landing copy (`Recipe Explorer frontend is running`).

Notes:
- Do not import CSS or other files from outside `src/`; instead, reference them via `<link>` tags pointing to `/assets/...` or import within `src` when they are inside `src`.
- All design assets from the Figma export are copied to `public/assets/` to avoid "Module not found" errors about importing files outside `src`.

Known warnings:
- Webpack dev server may log deprecation notices (`onBeforeSetupMiddleware` / `onAfterSetupMiddleware`). These are benign under CRA v5. Prefer `start:ci` in CI to avoid running the dev server.
- Browserslist DB updates run on `prepare`/`postinstall` automatically.
