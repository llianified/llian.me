export type Language = "id" | "en";

export type Entry = {
  co: string;
  date: string;
  role: string;
  href?: string;
};

export type Project = {
  name: string;
  badge: "live" | null;
  desc: string;
  detailHref: string | null;
  action: {
    label: string;
    href: string;
    kind: "live" | "github";
  };
};

export type Section<T> = {
  title: string;
  sub: string;
  entries?: T[];
  items?: T[];
};

export const site = {
  name: "Yoga Aprilliansyah N",
  shortName: "Yoga",
  timezone: "Asia/Jakarta",
  location: "Cianjur, Indonesia",
  year: 2026,
  cvHref: "/cv.pdf",
};

export const roles = [
  "Front-End Developer",
  "Community Manager",
  "Digital Marketer",
  "Content Writer",
] as const;

export const contacts = {
  whatsapp: "https://wa.me/6285199273883",
  email: "mailto:llianified@gmail.com",
  github: "https://github.com/llianified",
  twitter: "https://x.com/llianified",
  instagram: "https://instagram.com/llianified",
};

export const technologies = [
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
] as const;

const experienceId: Entry[] = [
  { co: "Universitas Suryakancana", date: "agu – nov 2017", role: "Admin Magang" },
  { co: "Zenius Store", date: "mar – sep 2021", role: "Digital Marketing" },
];

const experienceEn: Entry[] = [
  { co: "Universitas Suryakancana", date: "aug – nov 2017", role: "Admin Intern" },
  { co: "Zenius Store", date: "mar – sep 2021", role: "Digital Marketing" },
];

const contributionsId: Entry[] = [
  { co: "Verso", date: "mar 2018 – des 2019", role: "Community Manager", href: "https://verso.network" },
  { co: "Injective", date: "jan 2024 – mar 2025", role: "Brand Ambassador", href: "https://injective.com" },
  { co: "Nesa", date: "mar 2024 – mei 2025", role: "Brand Ambassador", href: "https://nesa.ai" },
  { co: "Story Protocol", date: "jul 2024 – apr 2025", role: "Content Writer", href: "https://storyprotocol.xyz" },
  { co: "Union", date: "jul 2024 – apr 2025", role: "Content Writer", href: "https://union.build" },
  { co: "Mitosis", date: "jul 2024 – apr 2025", role: "Content Writer", href: "https://mitosis.org" },
  { co: "Swisstronik", date: "sep 2024 – jan 2025", role: "Brand Ambassador", href: "https://swisstronik.com" },
];

const contributionsEn: Entry[] = [
  { co: "Verso", date: "mar 2018 – dec 2019", role: "Community Manager", href: "https://verso.network" },
  { co: "Injective", date: "jan 2024 – mar 2025", role: "Brand Ambassador", href: "https://injective.com" },
  { co: "Nesa", date: "mar 2024 – may 2025", role: "Brand Ambassador", href: "https://nesa.ai" },
  { co: "Story Protocol", date: "jul 2024 – apr 2025", role: "Content Writer", href: "https://storyprotocol.xyz" },
  { co: "Union", date: "jul 2024 – apr 2025", role: "Content Writer", href: "https://union.build" },
  { co: "Mitosis", date: "jul 2024 – apr 2025", role: "Content Writer", href: "https://mitosis.org" },
  { co: "Swisstronik", date: "sep 2024 – jan 2025", role: "Brand Ambassador", href: "https://swisstronik.com" },
];

const projectsId: Project[] = [
  { name: "llian.me", badge: "live", desc: "Portfolio pribadi yang dibangun dengan Next.js, React, dan TypeScript.", detailHref: null, action: { label: "Kunjungi", href: "https://llian.me", kind: "live" } },
  { name: "taksirin", badge: "live", desc: "Sistem order dan produksi untuk bisnis custom di Indonesia, mulai dari penawaran harga sampai pelacakan pesanan.", detailHref: "/projects/taksirin", action: { label: "Kunjungi", href: "https://untitled-rouge-psi.vercel.app", kind: "live" } },
  { name: "llnx", badge: null, desc: "Bot trading kripto berbasis Python dengan mode paper, sandbox, dan live, lengkap dengan TUI dan pengaman risiko.", detailHref: "/projects/llnx", action: { label: "GitHub", href: "https://github.com/llianified/llnx", kind: "github" } },
  { name: "llian.dev", badge: "live", desc: "Kumpulan software dan utilitas local-first untuk browser tools dan catatan teknis.", detailHref: "/projects/llian-dev", action: { label: "Kunjungi", href: "https://llian.dev", kind: "live" } },
];

const projectsEn: Project[] = [
  { name: "llian.me", badge: "live", desc: "My personal portfolio, built with Next.js, React, and TypeScript.", detailHref: null, action: { label: "Visit", href: "https://llian.me", kind: "live" } },
  { name: "taksirin", badge: "live", desc: "An order and production system for custom businesses in Indonesia, covering everything from quotes to order tracking.", detailHref: "/projects/taksirin", action: { label: "Visit", href: "https://untitled-rouge-psi.vercel.app", kind: "live" } },
  { name: "llnx", badge: null, desc: "A Python crypto trading bot with paper, sandbox, and live modes, plus a TUI and built-in risk controls.", detailHref: "/projects/llnx", action: { label: "GitHub", href: "https://github.com/llianified/llnx", kind: "github" } },
  { name: "llian.dev", badge: "live", desc: "A local-first collection of browser tools and technical notes.", detailHref: "/projects/llian-dev", action: { label: "Visit", href: "https://llian.dev", kind: "live" } },
];

export const content = {
  id: {
    bio: {
      line1Prefix: "Saya adalah",
      line1LinkLabel: "Front-End Developer",
      line1Suffix: "berusia 26 tahun yang berbasis di Bandung, Indonesia.",
      line2Prefix: "Kamu bisa menghubungi saya lewat",
      line2Instagram: "Instagram",
      line2Twitter: "Twitter / X",
      line2Or: "atau",
      line2Email: "email",
      line2GitPrefix: ". Semua proyek saya bisa dilihat di",
      line2GitLabel: "GitHub",
      cvPrefix: "Lihat ",
      cvLabel: "CV",
      cvSuffix: " saya di sini.",
    },
    experience: { title: "Pengalaman", sub: "Tempat saya belajar sambil berkarya.", entries: experienceId },
    education: { title: "Pendidikan", sub: "Tempat semuanya dimulai.", entries: [{ co: "SMK Pasundan 1 Cianjur", date: "jul 2015 – mei 2018", role: "Teknik Komputer & Jaringan" }] as Entry[] },
    contributions: { title: "Kontribusi Digital", sub: "Kontribusi saya di berbagai komunitas dan media.", entries: contributionsId },
    projects: { title: "Proyek", sub: "Beberapa hal yang sudah dan sedang saya bangun.", items: projectsId },
    footer: { creditPrefix: "Designed & Developed by", creditName: "Yoga", copyright: "© 2026 All rights reserved.", visitorsLabel: "Visitor", onlineLabel: "Online", location: "Cianjur, Indonesia" },
  },
  en: {
    bio: {
      line1Prefix: "I'm a",
      line1LinkLabel: "Front-End Developer",
      line1Suffix: "based in Bandung, Indonesia.",
      line2Prefix: "You can reach me on",
      line2Instagram: "Instagram",
      line2Twitter: "Twitter / X",
      line2Or: "or by",
      line2Email: "email",
      line2GitPrefix: ". You can find all my projects on",
      line2GitLabel: "GitHub",
      cvPrefix: "Take a look at my ",
      cvLabel: "CV",
      cvSuffix: " here.",
    },
    experience: { title: "Experience", sub: "Where I learned by doing real work.", entries: experienceEn },
    education: { title: "Education", sub: "Where it all started.", entries: [{ co: "SMK Pasundan 1 Cianjur", date: "july 2015 – may 2018", role: "Computer & Network Engineering" }] as Entry[] },
    contributions: { title: "Digital Contributions", sub: "My work across different communities and media.", entries: contributionsEn },
    projects: { title: "Projects", sub: "A few things I've built and am currently working on.", items: projectsEn },
    footer: { creditPrefix: "Designed & Developed by", creditName: "Yoga", copyright: "© 2026 All rights reserved.", visitorsLabel: "Visitors", onlineLabel: "Online", location: "Cianjur, Indonesia" },
  },
} as const;
