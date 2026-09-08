import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function IconBase({ children, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      {children}
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return <IconBase {...props}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></IconBase>;
}

export function XIcon(props: IconProps) {
  return <IconBase {...props}><path d="M5 4l14 16M19 4L5 20" /></IconBase>;
}

export function WhatsAppIcon(props: IconProps) {
  return <IconBase {...props}><path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4A8 8 0 1 1 20 11.6Z" /><path d="M8.5 8.2c.5 3 2.3 5 5.4 6.3l1.5-1.4" /></IconBase>;
}

export function MailIcon(props: IconProps) {
  return <IconBase {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></IconBase>;
}

export function GitHubIcon(props: IconProps) {
  return <IconBase {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.2-.4 6.5-1.6 6.5-7A5.5 5.5 0 0 0 19 3.7 5.1 5.1 0 0 0 18.9 0S17.7-.4 15 1.5a13.4 13.4 0 0 0-7 0C5.3-.4 4.1 0 4.1 0A5.1 5.1 0 0 0 4 3.7a5.5 5.5 0 0 0-1.5 3.8c0 5.4 3.3 6.6 6.5 7A4.8 4.8 0 0 0 8 18v4" /><path d="M8 19c-3 .9-3-1.5-4-2" /></IconBase>;
}

export function FileIcon(props: IconProps) {
  return <IconBase {...props}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M8 13h8M8 17h5" /></IconBase>;
}

export function ArrowIcon(props: IconProps) {
  return <IconBase {...props}><path d="M7 17 17 7M7 7h10v10" /></IconBase>;
}

export function BackIcon(props: IconProps) {
  return <IconBase {...props}><path d="m15 18-6-6 6-6" /></IconBase>;
}

export function VerifiedIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" width="1em" height="1em" aria-label="Verified" {...props}><path fill="#1d9bf0" d="M22.25 12c0-1.43-1.23-2.44-1.67-3.62-.46-1.22-.12-2.77-1.03-3.68-.92-.92-2.47-.58-3.69-1.04C14.69 3.22 13.68 2 12.25 2S9.81 3.22 8.63 3.66c-1.22.46-2.77.12-3.68 1.04-.92.91-.58 2.46-1.04 3.68C3.47 9.56 2.25 10.57 2.25 12s1.22 2.44 1.66 3.62c.46 1.22.12 2.77 1.04 3.68.91.92 2.46.58 3.68 1.04C9.81 20.78 10.82 22 12.25 22s2.44-1.22 3.61-1.66c1.22-.46 2.77-.12 3.69-1.04.91-.91.57-2.46 1.03-3.68.44-1.18 1.67-2.19 1.67-3.62Z" /><path fill="#fff" d="m10.7 15.8-3-3 1.35-1.35 1.65 1.64 4.75-4.74 1.35 1.35-6.1 6.1Z" /></svg>;
}

const brandGlyphs: Record<string, string> = {
  React: "⚛",
  TypeScript: "TS",
  "Next.js": "N",
  Vite: "V",
  "Tailwind CSS": "≈",
  "Node.js": "⬡",
  "Express.js": "ex",
  "Drizzle ORM": "◢",
  PostgreSQL: "P",
  Vercel: "▲",
  Figma: "F",
  GitHub: "●",
  Canva: "C",
};

export function TechnologyIcon({ name }: { name: string }) {
  return <span aria-hidden>{brandGlyphs[name] ?? name.slice(0, 1)}</span>;
}
