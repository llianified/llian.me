import type { Metadata, Viewport } from "next";
import { Google_Sans_Flex, Instrument_Serif } from "next/font/google";
import { site, uiCopy } from "@/lib/content";
import "./globals.css";

const googleSans = Google_Sans_Flex({
  variable: "--google-sans-flex",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yoga Aprilliansyah N — Full-Stack Developer & Product Builder",
  description: `${site.name} is a Full-Stack Developer and Product Builder based in ${site.location}, working across frontend, backend, databases, deployment, and product development.`,
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
  },
  icons: { icon: { url: "/favicon-light.png", type: "image/png" } },
};

export const viewport: Viewport = {
  themeColor: "#fdfdfc",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  userScalable: true,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`bg-background ${googleSans.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{document.documentElement.dataset.theme=localStorage.getItem("llian-theme")==="dark"?"dark":"light"}catch{}`,
          }}
        />
      </head>
      <body className="font-sans">
        <a className="skip-link" href="#main-content">
          {uiCopy.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}
