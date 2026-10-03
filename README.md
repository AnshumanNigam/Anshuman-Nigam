# Anshuman Nigam — Portfolio

A minimal, editorial Next.js portfolio designed for GitHub Pages.

## Stack

- Next.js App Router
- TypeScript
- React
- next-themes for light/dark mode
- CSS animations + IntersectionObserver for restrained motion
- Static export for GitHub Pages

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

For the project site at `https://anshumannigam.github.io/Anshuman-Nigam/`, build with:

```bash
NEXT_PUBLIC_BASE_PATH=/Anshuman-Nigam npm run build
```

The static output is written to `out/`.

For a root-domain deployment later, use an empty base path instead:

```bash
NEXT_PUBLIC_BASE_PATH= npm run build
```

## GitHub Pages

The included workflow in `.github/workflows/deploy.yml` installs dependencies, typechecks the project, builds the static export with the `/Anshuman-Nigam` base path, and deploys `out/` to GitHub Pages.

In GitHub, make sure Pages is configured to use **GitHub Actions** as the source.

## Editing content

Most portfolio content is centralized in `lib/data.ts`.

Update:
- profile and email
- social links
- projects
- experience
- toolkit
- education
- recognition
- certifications

The main layout lives in `app/page.tsx`. Shared design and responsive behavior live in `app/globals.css`.
