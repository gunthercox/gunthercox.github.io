# gunthercox.com

Static personal website built with HTML + Tailwind CSS, deployed via GitHub Pages.

## Local Development

1. Start the environment:

```bash
docker compose up -d
```

2. Edit HTML/CSS files.
3. Open `http://localhost:8000` and refresh to preview changes.

Services:
- `tailwind` — watches `src/styles.css` and HTML files, writes `assets/styles.css`
- `web` — serves static files via nginx on port `8000`

## Before Committing

Build minified CSS, then verify the site:

```bash
docker compose run --rm tailwind npm run build:prod
```

Checklist:
- Home page loads and styles are present
- `Explore Projects` button scrolls to project sections
- Open Source / Photobooth / Robotics links work
- Privacy page is reachable at `/privacy/`
- `assets/styles.css` changed when style/class changes were made

Commit and push:
- `index.html`
- `privacy/index.html`
- `src/styles.css`
- `assets/styles.css`

## Deployment Notes

- GitHub Pages serves static files directly from this repo.
- `assets/styles.css` must be regenerated and committed after any style or class changes.
- Keep `CNAME`, `ads.txt`, and `sitemap.xml` in place.
