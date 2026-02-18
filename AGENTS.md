# Indeforest

Community platform for forest-inspired music events and barter marketplace, based in Jerusalem. Static single-page app with a Bandcamp shuffle player, event posters, and an art/barter section.

> **Note:** `CLAUDE.md` is a symlink to this file (`AGENTS.md`). Edit `AGENTS.md` directly.

## General guidelines

- When suggesting changes to a file, prefer breaking them into smaller chunks
- Never tell the user "you're absolutely right" or similar affirmations
- Act autonomously on reversible changes; ask before changing the site structure or adding new views
- Keep the forest aesthetic: dark theme, green accents, Cinzel font

## Constraints

- Vanilla HTML, CSS, and JavaScript only -- no frameworks or build tools
- CSS custom properties for all colors and spacing (defined in `:root` in `css/style.css`)
- Accessibility: skip link, focus-visible styles, reduced-motion support, semantic HTML
- Mobile-first responsive design

## Architecture

Single-page app with hash-based view switching. Music plays continuously across views.

```
indeforest/
├── index.html          # All views (events, art) + player bar
├── css/style.css       # All styles, CSS custom properties
├── js/
│   ├── music.js        # Bandcamp player, track catalog, EQ bars
│   ├── nav.js          # SPA view switching (hash routing)
│   └── leaves.js       # Floating leaves/flowers animation
├── images/
│   ├── logo.png        # White tree logo
│   └── poster[1-4].jpeg
├── AGENTS.md
└── CNAME               # GitHub Pages domain
```

### Views

Two views toggled by `data-nav` attributes and `hidden` property. Default: events.

| View | Content |
|------|---------|
| `#events` | Past event posters (grid), future events placeholder |
| `#art` | Barter items with WhatsApp links |

### Music player

Fixed bottom bar with Bandcamp iframe embed, prev/next history, track name link, and EQ bar visualizer. Shuffles randomly from the track catalog defined in `js/music.js` as album/track ID pairs.

Embed URL pattern: `https://bandcamp.com/EmbeddedPlayer/album={id}/size=small/bgcol=0d1f0d/linkcol=7cb87c/track={id}/transparent=false/autoplay=true/`

### Floating leaves

Background animation spawning emoji particles (leaves with 15% chance of flowers). Max 20 particles, new one every 2s. Respects `prefers-reduced-motion`. Defined in `js/leaves.js`.

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

1. Fill in real art items, add item photos, connect WhatsApp number to barter links
2. When user accounts are needed, migrate to Django
3. Barter system: users create pages and offer items/services in exchange
4. New sections: art gallery, lessons
