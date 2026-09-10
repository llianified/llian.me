import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { site, uiCopy } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  variable: "--inter-font",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yoga Aprilliansyah N — Portfolio",
  description: `Portfolio ${site.name} — Front-End Developer berbasis di ${site.location}. Proyek, pengalaman, dan kontribusi digital.`,
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
  },
  icons: { icon: { url: "/favicon-dark.png", type: "image/png" } },
};

export const viewport: Viewport = {
  themeColor: "#131211",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      data-theme="dark"
      suppressHydrationWarning
      className={`bg-background ${inter.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{document.documentElement.dataset.theme=localStorage.getItem("llian-theme")==="light"?"light":"dark"}catch{}`,
          }}
        />
      </head>
      <body className="font-sans">
        <a className="skip-link" href="#main-content">
          <span lang="id">{uiCopy.id.skipToContent}</span>
          <span lang="en">{uiCopy.en.skipToContent}</span>
        </a>
        {children}
      </body>
    </html>
  );
}
