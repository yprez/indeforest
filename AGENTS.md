# Indeforest

Community platform for forest-inspired music events and barter marketplace, based in Jerusalem. Currently a static site with events and a shop; future vision is a Django-based social network where anyone can set up a page, offer items/services/lessons, and trade via barter.

> **Note:** `CLAUDE.md` is a symlink to this file (`AGENTS.md`). Edit `AGENTS.md` directly.

## Current state

Static GitHub Pages site. Two pages:

| Page | Purpose |
|------|---------|
| `index.html` | Landing page with past/future events |
| `shop.html` | Barter shop with item listings |

Shared styles in `css/style.css`. Images in `images/`.

## General guidelines

- When suggesting changes to a file, prefer breaking them into smaller chunks
- Never tell the user "you're absolutely right" or similar affirmations
- Act autonomously on reversible changes; ask before changing the site structure or adding new pages
- Keep the forest aesthetic: dark theme, green accents, Cinzel font

## Constraints

- Vanilla HTML, CSS, and JavaScript only -- no frameworks or build tools
- CSS custom properties for all colors and spacing (defined in `css/style.css`)
- Accessibility: skip link, focus-visible styles, reduced-motion support, semantic HTML
- Mobile-first responsive design

## Development

```bash
# Local server
python -m http.server 8000 --directory ~/projects/indeforest

# Or open directly
open index.html
```

No build step. No tests. Manual browser testing only.

## Git standards

- Commit messages should be concise and descriptive
- Never add AI attribution or co-authorship markers to commits

## Future direction

The static site is the MVP. Next phases:

1. Fill in real shop items, add item photos
2. Connect barter buttons to WhatsApp/Telegram
3. When user accounts are needed, migrate to Django
4. Sections to add: music (player/radio), art (gallery), lessons
5. Barter system: users create pages and offer items/services in exchange
