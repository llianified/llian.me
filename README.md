# llian.me

A single-page personal portfolio. Light mode only, by design.

**Type:** [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) for display, [Geist](https://fonts.google.com/specimen/Geist) + Geist Mono for everything else — both loaded and self-hosted through `next/font/google`.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19 + TypeScript
- Plain CSS — design tokens in `app/globals.css`, page styles in `app/page.module.css`. No CSS framework.

## Content

All copy is placeholder. It lives in one file — [`lib/content.ts`](lib/content.ts) — so swapping in the real thing means editing that file and nothing else.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm start
```

## Notes

The site is deliberately light-only: `color-scheme: light` is fixed in `:root` and there is no `prefers-color-scheme` block anywhere in the project. Adding dark mode means adding one — not overriding anything.
