export type Entry = {
  co: string;
  date: string;
  role: string;
  href?: string;
};

export type ProjectThumbnail = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type Project = {
  name: string;
  badge: "live" | null;
  desc: string;
  stack: readonly string[];
  image?: ProjectThumbnail;
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
  technologies: "Technical stack",
  technologiesDescription: "Tools I have hands-on experience using to build and ship products.",
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
  shortName: "llian.me",
  url: "https://llian.me",
  timezone: "Asia/Jakarta",
  location: "Cianjur, Indonesia",
  year: 2026,
  cvHref: "/cv.pdf",
};

export const roles = ["Full-Stack Developer / Product Builder"] as const;

export const availability = {
  open: true,
  label: "Open to freelance and full-time work",
  detail: "Remote, or on-site around West Java.",
} as const;

export const contacts = {
  whatsapp: "https://wa.me/6285199273883",
  email: "mailto:llianified@gmail.com",
  github: "https://github.com/llianified",
  twitter: "https://x.com/llianified",
  instagram: "https://instagram.com/llianified",
};

export const technologyGroups = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    label: "Web",
    items: ["React", "Next.js", "Vite", "Tailwind CSS", "Node.js", "Express.js", "REST APIs"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "Drizzle ORM", "Database migrations"],
  },
  {
    label: "Cloud & systems",
    items: ["AWS EC2", "Vercel", "Railway", "GitHub Actions", "Linux", "Ubuntu", "SSH", "tmux", "screen"],
  },
  {
    label: "Workflow",
    items: ["Git", "GitHub", "npm", "pnpm", "Environment configuration", "Figma", "Canva"],
  },
] as const;

export const capabilities = [
  {
    title: "Full-stack delivery",
    description:
      "Building interfaces, integrating APIs, working with PostgreSQL, handling migrations and seed/reset workflows, and shipping to cloud environments.",
  },
  {
    title: "Product development",
    description:
      "Making practical UI/UX and feature decisions around engagement, retention, conversion, subscription pricing, monetization, rewards, referrals, and product experiments—without losing sight of the user experience.",
  },
  {
    title: "Automation & operations",
    description:
      "Working with automation, web scraping, Linux servers, remote development over SSH, and persistent command-line environments.",
  },
] as const;

const experience: Entry[] = [
  { co: "Zenius Store", date: "Mar – Sep 2021", role: "Digital Marketing" },
  {
    co: "Universitas Suryakancana",
    date: "Aug – Nov 2017",
    role: "Administrative Intern",
  },
];

const contributions: Entry[] = [
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
    co: "Injective",
    date: "Jan 2024 – Mar 2025",
    role: "Brand Ambassador",
    href: "https://injective.com",
  },
  {
    co: "Swisstronik",
    date: "Sep 2024 – Jan 2025",
    role: "Brand Ambassador",
    href: "https://swisstronik.com",
  },
  {
    co: "Verso",
    date: "Mar 2018 – Dec 2019",
    role: "Community Manager",
    href: "https://verso.network",
  },
];

const projects: Project[] = [
  {
    name: "taksirin",
    badge: "live",
    desc: "An order and production system for custom businesses, from the first quote to final delivery.",
    stack: ["Next.js", "PostgreSQL", "Prisma", "Playwright"],
    image: {
      src: "/projects/taksirin/board.png",
      width: 1600,
      height: 900,
      alt: "The Taksirin order board with seven production stages",
    },
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
    stack: ["Python", "Textual", "ccxt", "Solana"],
    image: {
      src: "/projects/llnx/tui-overview.png",
      width: 1800,
      height: 1187,
      alt: "The llnx terminal interface showing live status, trade logs, and settings",
    },
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
    stack: ["Next.js", "Tailwind CSS", "pdf-lib", "Cloudflare"],
    image: {
      src: "/projects/llian-dev/overview.png",
      width: 1200,
      height: 630,
      alt: "The llian.dev banner: small tools for real tasks, no account, no upload, no noise",
    },
    detailHref: "/projects/llian-dev",
    action: { label: "Visit", href: "https://llian.dev", kind: "live" },
  },
  {
    name: "llian.me",
    badge: "live",
    desc: "My personal corner of the internet, built with Next.js, React, and TypeScript.",
    stack: ["Next.js", "React", "CSS Modules", "Cloudflare"],
    detailHref: null,
    action: { label: "Visit", href: "https://llian.me", kind: "live" },
  },
];

export const content = {
  bio: {
    line1Prefix: "I’m a",
    line1LinkLabel: "Full-Stack Developer and Product Builder",
    line1Suffix: `based in ${site.location}. I build web applications, automation tools, and consumer-facing digital products from interface to deployment.`,
    detail:
      "I work across frontend, backend integration, databases, cloud deployment, troubleshooting, and product iteration.",
  },
  experience: {
    title: "Experience",
    sub: "Verified professional experience, kept concise.",
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
    title: "Web3 Contributions",
    sub: "Community, content, and ambassador contributions—not formal software engineering employment.",
    entries: contributions,
  },
  projects: {
    title: "Projects",
    sub: "Things I’ve shipped and still maintain. Cards with a case study open a detailed write-up.",
    items: projects,
  },
  notFound: {
    eyebrow: "404",
    title: "This page doesn’t exist.",
    body: "The link may be outdated, or the address was typed incorrectly.",
    back: "Back to home",
    projects: "See projects",
  },
  capabilities: {
    title: "How I work",
    sub: "Technical execution with product context.",
    items: capabilities,
  },
  footer: {
    creditPrefix: "Designed & developed by",
    creditName: "Yoga",
    copyright: "© 2026. All rights reserved.",
  },
} as const;
