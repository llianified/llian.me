# llian.me

Clone homepage portfolio Vite lama di [llian.vercel.app](https://llian.vercel.app/) ke Next.js 16. Tampilan, isi bilingual, aset, tipografi, marquee, role rotator, language switch, jam Jakarta, dan responsive layout mengikuti versi produksi lama.

## Stack

- Next.js 16 App Router, React 19, dan TypeScript
- CSS Modules + global CSS, tanpa framework CSS atau library animasi
- Static export ke `out/`, disajikan sebagai Cloudflare assets-only Worker
- Geist, Geist Mono, dan Instrument Serif di-self-host lewat `next/font`

## Struktur penting

- `lib/content.ts` — seluruh data dan copy Indonesia/Inggris
- `app/components/portfolio.tsx` — UI serta interaksi homepage
- `app/components/icons.tsx` — ikon SVG/glyph lokal
- `app/page.module.css` — sistem visual dan responsive behavior
- `public/` — favicon dan apple icon (monogram serif "ll"), CV, gambar proyek, dan font untuk kartu Open Graph

Homepage dimulai dalam bahasa Indonesia. Tombol ID/EN mengganti seluruh copy dengan transisi blur. Role berganti tiap tiga detik, teknologi bergerak dalam marquee, dan jam mengikuti `Asia/Jakarta`.

Footer sengaja hanya menampilkan fallback `Visitor #— | Online —`. Tidak ada request statistik, polling, beacon, API route, server action, ISR, atau image optimizer. Section Projects memuat repository milik akun GitHub saat ini kecuali `tugas-duit`; proyek yang sudah online ditautkan ke situsnya, sementara `llnx` ditautkan ke GitHub.

## Menjalankan

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static export ke out/
npm run preview   # build lalu jalankan Cloudflare lokal
```

## Deploy

`next.config.ts` memakai `output: "export"`, sementara `wrangler.jsonc` menyajikan `./out` sebagai static assets. Login sekali dengan `npx wrangler login`, lalu deploy dengan:

```bash
npm run deploy
```

`next start` tidak digunakan untuk static export. Metadata dan `robots.txt` mengikuti situs lama: halaman tidak diindeks crawler.
