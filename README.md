# llian.me

Situs portofolio satu halaman punya Yoga Aprilliansyah N. Light mode saja, memang disengaja.

**Font:** [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) buat display, [Geist](https://fonts.google.com/specimen/Geist) + Geist Mono buat sisanya. Dua-duanya di-self-host lewat `next/font/google`.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19 + TypeScript
- CSS biasa — token di `app/globals.css`, style halaman di `app/page.module.css`. Tanpa framework CSS.

## Isi situs

Semua teks dan data ada di satu file: [`lib/content.ts`](lib/content.ts). Mau ganti apa pun, cukup edit file itu.

Link yang masih `"#"` berarti belum diisi:

- `contacts` — Instagram, X, WhatsApp, email, CV
- `contributions` — tujuh link "Visit" ke proyek Web3
- `projects` — URL live `barcode-gen`

## Jalanin

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm start
```

## Catatan

Light mode-nya dikunci: `color-scheme: light` di `:root` dan tidak ada satu pun blok `prefers-color-scheme` di project ini. Kalau nanti mau nambah dark mode, berarti nambah blok baru, bukan nimpa yang lama.

Jam di hero diambil dari `Asia/Jakarta` dan diisi setelah mount (`app/components/local-time.tsx`), jadi tidak ada hydration mismatch.
