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
npm run dev       # http://localhost:3000
npm run build     # hasilnya ke folder out/
npm run preview   # build lalu sajikan lewat runtime Cloudflare lokal
```

## Deploy

Situs ini di-export jadi HTML statis (`output: "export"` di `next.config.ts`) dan
disajikan sebagai Cloudflare Worker tanpa `main` — tidak ada kode yang jalan per
request, Cloudflare cuma menyajikan file dari `out/`.

Sekali di awal:

```bash
npx wrangler login
```

Tiap mau naik:

```bash
npm run deploy
```

Deploy pertama dapat alamat `llian-me.<subdomain>.workers.dev`. Buat pasang domain
sendiri, DNS `llian.me` harus dipegang Cloudflare, lalu tambahkan lewat dashboard:
**Workers & Pages → llian-me → Settings → Domains & Routes**.

Semua yang bikin Next butuh server tidak dipakai di sini — tidak ada route handler,
server action, `next/image`, atau ISR — jadi export statisnya cukup. Kalau nanti ada
yang butuh server (misal form kontak yang benar-benar mengirim email), `output:
"export"` harus dilepas dan hostingnya ikut berubah.

Catatan: `next start` tidak berlaku lagi kalau `output: "export"` aktif. Pakai
`npm run preview` untuk mengecek hasil build secara lokal.

## Sistem visual

Palet, hierarki, dan grid-nya mengikuti [The Component Gallery](https://component.gallery):

- **Warna** — latar kertas hangat (`#f4f2ed`), bukan putih. Aksen satu-satunya merah (`#d63a2a`), dipakai buat titik penanda bagian aktif di nav dan titik di eyebrow.
- **Hierarki** — Instrument Serif buat semua nama dan judul, sans kapital berjarak buat label bagian, sans biasa buat sisanya, mono cuma buat tanggal dan jam.
- **Jarak** — cuma tiga token di `:root`, dan semuanya simetris atas-bawah: `--gutter` (kiri-kanan, sama di semua band), `--band-y` (atas-bawah hero/section/kontak), `--chrome-y` (atas-bawah header dan footer). Kalau suatu band butuh angka di luar itu, tokennya yang salah, bukan bandnya yang dikecualikan.
- **Grid** — kolom konten dibingkai dua garis vertikal yang jalan dari header sampai footer, tiap bagian dipisah garis horizontal yang mepet ke bingkai itu. Hero duduk di atas kertas milimeter 40px.

## Catatan

Light mode-nya dikunci: `color-scheme: light` di `:root` dan tidak ada satu pun blok `prefers-color-scheme` di project ini. Kalau nanti mau nambah dark mode, berarti nambah blok baru, bukan nimpa yang lama.

Jam di hero diambil dari `Asia/Jakarta` dan diisi setelah mount (`app/components/local-time.tsx`), jadi tidak ada hydration mismatch.
