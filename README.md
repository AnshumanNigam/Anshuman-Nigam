# Anshuman Nigam: portfolio

Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion.
Light and dark themes (follows the system, with a manual toggle).

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

## Edit content

Everything (projects, experience, toolkit, education, links) is in `lib/data.ts`.
Colours for both themes are the CSS variables at the top of `app/globals.css`.

## Deploy

`npm run build` creates a static site in `out/`.

- Vercel / Netlify / Cloudflare Pages: import the repo, no settings needed.
- GitHub Pages: publish the contents of `out/` (for example with a GitHub Action
  that runs the build). Because the repo is `anshumannigam.github.io`, no
  `basePath` is needed. For a sub-path, add `basePath: "/repo-name"` to `next.config.ts`.

## Structure

```
app/            layout, page, global styles, favicon
components/     nav, hero, projects, visuals (animated SVGs), experience,
                toolkit, education, contact, theme toggle, motion helpers
lib/data.ts     all site content
```
