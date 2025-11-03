This directory hosts static design assets served by CRA at /assets/*.

Files here are referenced at runtime, e.g.:
/assets/common.css
/assets/sign-in-11-235.css
/assets/figmaimages/figma_image_30_811.png

Do not attempt to import these files from src/*.js as relative file imports outside src are blocked by CRA. Use <link rel="stylesheet" href="/assets/....css"> and <img src="/assets/..."> instead.
