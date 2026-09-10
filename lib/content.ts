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

const indonesianUI = {
  home: "Beranda",
  navigation: "Navigasi utama",
  work: "Proyek",
  about: "Tentang",
  contact: "Kontak",
  language: "Bahasa",
  greeting: "Halo, saya Yoga",
  profileImage: "Ilustrasi profil",
  explore: "Jelajahi proyek",
  cv: "Lihat CV",
  basedIn: "Berbasis di",
  localTime: "Waktu lokal",
  technologies: "Teknologi & alat",
  technologiesDescription: "Di balik setiap proyek.",
  idea: "Punya ide menarik?",
  connect: "Mari terhubung.",
  selectedWork: "Pilihan karya",
  behindTheWork: "Di balik layar",
  aboutDescription: "Perjalanan, alat, dan komunitas yang membentuk saya.",
  learning: "Selalu belajar.",
  caseStudy: "Studi kasus",
  featuredDescription: "Dari penawaran hingga pesanan.",
  workflow: "Alur Taksirin",
  quote: "Penawaran",
  production: "Produksi",
  tracking: "Pelacakan",
  personalDescription: "Ruang kecil saya di internet.",
  toolsDescription: "Hal berguna, langsung di browser.",
  stayInTouch: "Tetap terhubung",
  hello: "Berawal dari sebuah halo.",
  social: "Media sosial",
  backToTop: "Ke atas",
  skipToContent: "Lewati ke konten",
};

type InterfaceCopy = { [Key in keyof typeof indonesianUI]: string };

export const uiCopy: Record<Language, InterfaceCopy> = {
  id: indonesianUI,
  en: {
    home: "Home",
    navigation: "Main navigation",
    work: "Work",
    about: "About",
    contact: "Contact",
    language: "Language",
    greeting: "Hey, I’m Yoga",
    profileImage: "Profile illustration of",
    explore: "Explore projects",
    cv: "View CV",
    basedIn: "Based in",
    localTime: "Local time",
    technologies: "Technologies & tools",
    technologiesDescription: "Behind every project.",
    idea: "Have something in mind?",
    connect: "Let’s connect.",
    selectedWork: "Selected work",
    behindTheWork: "Behind the work",
    aboutDescription: "The journey, tools, and communities that shaped me.",
    learning: "Always learning.",
    caseStudy: "Case study",
    featuredDescription: "From first quote to final order.",
    workflow: "Taksirin workflow",
    quote: "Quote",
    production: "Production",
    tracking: "Tracking",
    personalDescription: "My little corner of the internet.",
    toolsDescription: "Useful things, directly in the browser.",
    stayInTouch: "Stay in touch",
    hello: "It starts with a hello.",
    social: "Social links",
    backToTop: "Back to top",
    skipToContent: "Skip to content",
  },
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
  {
    co: "Universitas Suryakancana",
    date: "Agu – Nov 2017",
    role: "Admin Magang",
  },
  { co: "Zenius Store", date: "Mar – Sep 2021", role: "Digital Marketing" },
];

const experienceEn: Entry[] = [
  {
    co: "Universitas Suryakancana",
    date: "Aug – Nov 2017",
    role: "Admin Intern",
  },
  { co: "Zenius Store", date: "Mar – Sep 2021", role: "Digital Marketing" },
];

const contributionsId: Entry[] = [
  {
    co: "Verso",
    date: "Mar 2018 – Des 2019",
    role: "Community Manager",
    href: "https://verso.network",
  },
  {
    co: "Injective",
    date: "Jan 2024 – Mar 2025",
    role: "Brand Ambassador",
    href: "https://injective.com",
  },
  {
    co: "Nesa",
    date: "Mar 2024 – Mei 2025",
    role: "Brand Ambassador",
    href: "https://nesa.ai",
  },
  {
    co: "Story Protocol",
    date: "Jul 2024 – Apr 2025",
    role: "Content Writer",
    href: "https://storyprotocol.xyz",
  },
  {
    co: "Union",
    date: "Jul 2024 – Apr 2025",
    role: "Content Writer",
    href: "https://union.build",
  },
  {
    co: "Mitosis",
    date: "Jul 2024 – Apr 2025",
    role: "Content Writer",
    href: "https://mitosis.org",
  },
  {
    co: "Swisstronik",
    date: "Sep 2024 – Jan 2025",
    role: "Brand Ambassador",
    href: "https://swisstronik.com",
  },
];

const contributionsEn: Entry[] = [
  {
    co: "Verso",
    date: "Mar 2018 – Dec 2019",
    role: "Community Manager",
    href: "https://verso.network",
  },
  {
    co: "Injective",
    date: "Jan 2024 – Mar 2025",
    role: "Brand Ambassador",
    href: "https://injective.com",
  },
  {
    co: "Nesa",
    date: "Mar 2024 – May 2025",
    role: "Brand Ambassador",
    href: "https://nesa.ai",
  },
  {
    co: "Story Protocol",
    date: "Jul 2024 – Apr 2025",
    role: "Content Writer",
    href: "https://storyprotocol.xyz",
  },
  {
    co: "Union",
    date: "Jul 2024 – Apr 2025",
    role: "Content Writer",
    href: "https://union.build",
  },
  {
    co: "Mitosis",
    date: "Jul 2024 – Apr 2025",
    role: "Content Writer",
    href: "https://mitosis.org",
  },
  {
    co: "Swisstronik",
    date: "Sep 2024 – Jan 2025",
    role: "Brand Ambassador",
    href: "https://swisstronik.com",
  },
];

const projectsId: Project[] = [
  {
    name: "taksirin",
    badge: "live",
    desc: "Sistem order dan produksi untuk bisnis custom di Indonesia, mulai dari penawaran harga sampai pelacakan pesanan.",
    detailHref: "/projects/taksirin",
    action: {
      label: "Kunjungi",
      href: "https://untitled-rouge-psi.vercel.app",
      kind: "live",
    },
  },
  {
    name: "llnx",
    badge: null,
    desc: "Bot trading kripto berbasis Python dengan mode paper, sandbox, dan live, lengkap dengan TUI dan pengaman risiko.",
    detailHref: "/projects/llnx",
    action: {
      label: "GitHub",
      href: "https://github.com/llianified/llnx",
      kind: "github",
    },
  },
  {
    name: "llian.dev",
    badge: "live",
    desc: "Kumpulan software dan utilitas local-first untuk browser tools dan catatan teknis.",
    detailHref: "/projects/llian-dev",
    action: { label: "Kunjungi", href: "https://llian.dev", kind: "live" },
  },
];

const projectsEn: Project[] = [
  {
    name: "taksirin",
    badge: "live",
    desc: "An order and production system for custom businesses in Indonesia, covering everything from quotes to order tracking.",
    detailHref: "/projects/taksirin",
    action: {
      label: "Visit",
      href: "https://untitled-rouge-psi.vercel.app",
      kind: "live",
    },
  },
  {
    name: "llnx",
    badge: null,
    desc: "A Python crypto trading bot with paper, sandbox, and live modes, plus a TUI and built-in risk controls.",
    detailHref: "/projects/llnx",
    action: {
      label: "GitHub",
      href: "https://github.com/llianified/llnx",
      kind: "github",
    },
  },
  {
    name: "llian.dev",
    badge: "live",
    desc: "A local-first collection of browser tools and technical notes.",
    detailHref: "/projects/llian-dev",
    action: { label: "Visit", href: "https://llian.dev", kind: "live" },
  },
];

export const content = {
  id: {
    bio: {
      line1Prefix: "Saya adalah",
      line1LinkLabel: "Front-End Developer",
      line1Suffix: `berusia 26 tahun yang berbasis di ${site.location}.`,
    },
    experience: {
      title: "Pengalaman",
      sub: "Tempat saya belajar sambil berkarya.",
      entries: experienceId,
    },
    education: {
      title: "Pendidikan",
      sub: "Tempat semuanya dimulai.",
      entries: [
        {
          co: "SMK Pasundan 1 Cianjur",
          date: "Jul 2015 – Mei 2018",
          role: "Teknik Komputer & Jaringan",
        },
      ] as Entry[],
    },
    contributions: {
      title: "Kontribusi Digital",
      sub: "Kontribusi saya di berbagai komunitas dan media.",
      entries: contributionsId,
    },
    projects: {
      title: "Proyek",
      sub: "Beberapa hal yang sudah dan sedang saya bangun.",
      items: projectsId,
    },
    footer: {
      creditPrefix: "Designed & Developed by",
      creditName: "Yoga",
      copyright: "© 2026 All rights reserved.",
    },
  },
  en: {
    bio: {
      line1Prefix: "I'm a",
      line1LinkLabel: "Front-End Developer",
      line1Suffix: `based in ${site.location}.`,
    },
    experience: {
      title: "Experience",
      sub: "Where I learned by doing real work.",
      entries: experienceEn,
    },
    education: {
      title: "Education",
      sub: "Where it all started.",
      entries: [
        {
          co: "SMK Pasundan 1 Cianjur",
          date: "July 2015 – May 2018",
          role: "Computer & Network Engineering",
        },
      ] as Entry[],
    },
    contributions: {
      title: "Digital Contributions",
      sub: "My work across different communities and media.",
      entries: contributionsEn,
    },
    projects: {
      title: "Projects",
      sub: "A few things I've built and am currently working on.",
      items: projectsEn,
    },
    footer: {
      creditPrefix: "Designed & Developed by",
      creditName: "Yoga",
      copyright: "© 2026 All rights reserved.",
    },
  },
} as const;
