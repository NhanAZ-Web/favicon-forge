# Favicon Forge

A static Astro web app that turns a logo into a complete favicon package. Image processing and ZIP creation happen in the browser; the source file is never uploaded.

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Astro in the terminal.

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

The workflow at `.github/workflows/deploy.yml` builds and deploys on every push to `main`. It selects `BASE_PATH` automatically: project sites use `https://username.github.io/repository-name/`, while `username.github.io` repositories use the root domain.

In the repository, enable **Settings → Pages → Source: GitHub Actions**.

## Generated package

- `favicon.ico` containing 16×16, 32×32 and 48×48 icons.
- `favicon-16x16.png` and `favicon-32x32.png`.
- `apple-touch-icon.png` at 180×180.
- `android-chrome-192x192.png` and `android-chrome-512x512.png`.
- `android-chrome-512x512-maskable.png` for Android PWA installs.
- `site.webmanifest`.
- `favicon-snippet.html` and `README.txt` setup instructions.
