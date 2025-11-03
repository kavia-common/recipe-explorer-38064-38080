This directory contains static assets served at the root. For CRA the only required file is index.html providing a #root element.

CI note:
- Use `npm run start:ci` which builds production assets and serves them via a static server (low memory).
- Avoid `npm start` in CI because webpack dev server may be killed by OOM (exit 137) under constrained environments.

Environment:
- REACT_APP_PORT (default 3000) controls the port for both build serve and healthcheck.
- Place public assets under public/assets and reference them as /assets/...
