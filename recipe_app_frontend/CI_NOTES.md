# CI Notes for recipe_app_frontend

This project uses Create React App (CRA) and includes routing for a Sign In screen that depends on static assets served from `public/assets`.

What to run in CI to avoid exit code 137 (OOM):
- Use static serving instead of the webpack dev server.
- Recommended: `npm run start:ci` (runs a production build and serves it via `serve` on `0.0.0.0:${REACT_APP_PORT:-3000}`).
- Alternative: `npm run build && npm run serve`.

Why:
- The webpack dev server can consume more memory and is sometimes OOM-killed in constrained CI environments (exit 137).
- Static serving has a much lower memory footprint and is sufficient for healthchecks and UI verification.

Health/Liveness:
- If you only need to verify the container is up without building assets, run `npm run healthcheck`. It starts a tiny HTTP server on `REACT_APP_PORT` (default 3000) and responds with "ok".

Public assets and routing:
- CRA requires `public/index.html` with a `#root` element. This file is present under `public/index.html`.
- Figma-derived assets (CSS and images) are served from `/assets/...` and must reside in `public/assets`.
  - Already copied:
    - `public/assets/common.css`
    - `public/assets/sign-in-11-235.css`
    - `public/assets/figmaimages/*` (icons/bitmaps used by the Sign In screen)
- The React route `/sign-in` injects the required CSS from `/assets` at runtime and references `/assets/figmaimages/...`.

Environment variables:
- `REACT_APP_PORT` (optional; defaults to 3000)
- Other `REACT_APP_*` variables are not required for UI startup; they can be provided via `.env` if needed. See `.env.example`.

Tests:
- Tests assert the landing copy: "Recipe Explorer frontend is running".

Notes and known warnings:
- Do not import files from outside `src` in React modules. Reference assets via `/assets/...` from `public/assets`, or keep imports within `src`.
- Webpack dev server deprecation notices (e.g., `onBeforeSetupMiddleware` / `onAfterSetupMiddleware`) are benign under CRA v5.
- Browserslist DB updates run on `prepare`/`postinstall` automatically.

Quick commands:
- Start dev server (local dev): `npm start`
- Start in CI (static): `npm run start:ci`
- Build only: `npm run build`
- Serve built assets: `npm run serve`
- Healthcheck (no build): `npm run healthcheck`
