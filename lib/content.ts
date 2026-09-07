/**
 * Semua isi situs ada di file ini.
 * Yang masih "#" berarti link-nya belum ada — tinggal isi.
 */

export const site = {
  name: "Yoga Aprilliansyah N",
  shortName: "Yoga",
  wordmark: "llian",
  domain: ".me",
  role: "Front-End Developer",
  city: "Cianjur, Indonesia",
  timezone: "Asia/Jakarta",
  year: 2026,
};

export const hero = {
  eyebrow: "Portofolio",
  headline: ["Bikin web, nulis,", "dan ngoprek", "hal-hal kecil."],
  emphasis: "ngoprek",
  intro:
    "Saya Yoga, 26 tahun, front-end developer asal Bandung yang sekarang tinggal di Cianjur. Sehari-hari ngulik React sama TypeScript. Sisanya nulis konten buat proyek Web3.",
};

export const contacts = {
  instagram: "#",
  x: "#",
  whatsapp: "#",
  email: "#",
  github: "https://github.com/llianified",
  cv: "#",
};

export const stack = [
  "React",
  "TypeScript",
  "Next.js",
  "Vite",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "Drizzle ORM",
  "PostgreSQL",
  "Vercel",
  "Figma",
  "GitHub",
  "Canva",
];

export const experience = {
  title: "Pengalaman",
  note: "Tempat saya pernah kerja.",
  items: [
    {
      org: "Zenius Store",
      role: "Digital Marketing",
      period: "Mar — Sep 2021",
    },
    {
      org: "Universitas Suryakancana",
      role: "Admin Magang",
      period: "Agu — Nov 2017",
    },
  ],
};

export const education = {
  title: "Pendidikan",
  note: "Sekolah saya dulu.",
  items: [
    {
      org: "SMK Pasundan 1 Cianjur",
      role: "Teknik Komputer & Jaringan",
      period: "Jul 2015 — Mei 2018",
    },
  ],
};

export const contributions = {
  title: "Kontribusi",
  note: "Yang saya kerjain bareng komunitas Web3.",
  items: [
    { org: "Nesa", role: "Brand Ambassador", period: "Mar 2024 — Mei 2025", href: "#" },
    { org: "Union", role: "Content Writer", period: "Jul 2024 — Apr 2025", href: "#" },
    { org: "Mitosis", role: "Content Writer", period: "Jul 2024 — Apr 2025", href: "#" },
    { org: "Story Protocol", role: "Content Writer", period: "Jul 2024 — Apr 2025", href: "#" },
    { org: "Injective", role: "Brand Ambassador", period: "Jan 2024 — Mar 2025", href: "#" },
    { org: "Swisstronik", role: "Brand Ambassador", period: "Sep 2024 — Jan 2025", href: "#" },
    { org: "Verso", role: "Community Manager", period: "Mar 2018 — Des 2019", href: "#" },
  ],
};

export const projects = {
  title: "Proyek",
  note: "Yang udah jadi dan yang masih digarap.",
  items: [
    {
      name: "portfolio",
      live: true,
      blurb: "Situs portofolio pribadi. Dibangun sendiri pakai React, Vite, dan TypeScript.",
      href: "https://llian.vercel.app",
      label: "Buka",
    },
    {
      name: "barcode-gen",
      live: true,
      blurb: "Generator barcode massal. Layout-nya bisa diatur, exportnya sekali banyak.",
      href: "#",
      label: "Buka",
    },
    {
      name: "jobstreet-scraper",
      live: false,
      blurb: "Tool open source buat narik data lowongan dari Jobstreet.",
      href: "https://github.com/llianified/jobstreet-scraper",
      label: "GitHub",
    },
    {
      name: "admob-auto-impression",
      live: false,
      blurb: "Tool open source buat ngotomasi volume tayangan AdMob.",
      href: "https://github.com/llianified/admob-auto-impression",
      label: "GitHub",
    },
  ],
};

export const outro = {
  note: "Paling gampang lewat email. Tapi kalau mau ngobrol dulu, DM aja.",
};
