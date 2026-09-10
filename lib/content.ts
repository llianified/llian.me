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

export const uiCopy = {
  home: "Home",
  navigation: "Main navigation",
  work: "Work",
  about: "About",
  contact: "Contact",
  profileImage: "Profile photo of",
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
} as const;

export const site = {
  name: "Yoga Aprilliansyah N",
  shortName: "Yoga",
  timezone: "Asia/Jakarta",
  location: "Cianjur, Indonesia",
  year: 2026,
  cvHref: "/cv.pdf",
};

export const roles = ["Full-Stack Developer"] as const;

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

const experience: Entry[] = [
  {
    co: "Universitas Suryakancana",
    date: "Aug – Nov 2017",
    role: "Admin Intern",
  },
  { co: "Zenius Store", date: "Mar – Sep 2021", role: "Digital Marketing" },
];

const contributions: Entry[] = [
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

const projects: Project[] = [
  {
    name: "taksirin",
    badge: "live",
    desc: "An order and production system for custom businesses, from the first quote to final delivery.",
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
    desc: "A local-first collection of browser tools and practical technical notes.",
    detailHref: "/projects/llian-dev",
    action: { label: "Visit", href: "https://llian.dev", kind: "live" },
  },
  {
    name: "llian.me",
    badge: "live",
    desc: "My personal corner of the internet, built with Next.js, React, and TypeScript.",
    detailHref: null,
    action: { label: "Visit", href: "https://llian.me", kind: "live" },
  },
];

export const content = {
  bio: {
    line1Prefix: "I’m a",
    line1LinkLabel: "Full-Stack Developer",
    line1Suffix: `based in ${site.location}. I’ve also shipped three private Telegram Mini Apps.`,
  },
  experience: {
    title: "Experience",
    sub: "Where I learned by doing real work.",
    entries: experience,
  },
  education: {
    title: "Education",
    sub: "Where it all started.",
    entries: [
      {
        co: "SMK Pasundan 1 Cianjur",
        date: "Jul 2015 – May 2018",
        role: "Computer & Network Engineering",
      },
    ] as Entry[],
  },
  contributions: {
    title: "Digital Contributions",
    sub: "Work I’ve done across communities and digital media.",
    entries: contributions,
  },
  projects: {
    title: "Projects",
    sub: "A few things I’ve built and am still tinkering with.",
    items: projects,
  },
  footer: {
    creditPrefix: "Designed & developed by",
    creditName: "Yoga",
    copyright: "© 2026. All rights reserved.",
  },
} as const;
