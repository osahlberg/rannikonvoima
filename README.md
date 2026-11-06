# Rannikon Voima — lean SPA

A dependency-free single-page app migrated from the WordPress site at rannikonvoima.com. Plain HTML/CSS/JS, hash-based routing, no build step.

## Structure

- `index.html` — shell (header, nav, footer, mount point)
- `css/styles.css` — all styling (design tokens at the top)
- `js/data.js` — site content (offers, membership fees, board contacts) — edit this to update content, no HTML required
- `js/app.js` — router + page templates
- `assets/img/` — logo, hero photo (pulled from the live site)

## Pages

Etusivu (`#/`), Jäseneksi (`#/jaseneksi`), Yhteystiedot (`#/yhteystiedot`).

Ajankohtaista, Sponsorit and Tulosarkisto were dropped from this lean version, including their content (events/announcements, sponsor logos, results archive) — none of it is in the app anymore.

## Running locally

Any static file server works, e.g.:

```bash
npx serve .
```

or open `index.html` directly — it has no build step or server-side dependency.

## Known gaps / next steps

- **Forms don't submit anywhere yet.** The membership application (Jäseneksi) and contact (Yhteystiedot) forms currently just open the visitor's email client with a pre-filled message to rannikonvoima@gmail.com (same behavior the old WordPress forms likely had via an email plugin). For real form handling, wire them to a form backend (e.g. Formspree, a small serverless function, or Google Forms) and replace the `mailto:` logic in `js/app.js`.
- Not yet deployed — any static host works (Netlify, Vercel, GitHub Pages, Cloudflare Pages).
