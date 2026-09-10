import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--inter-font",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--instrument-serif-font",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yoga Aprilliansyah N — Portfolio",
  description: "Portfolio Yoga Aprilliansyah N — Front-End Developer berbasis di Bandung, Indonesia. Proyek, pengalaman, dan kontribusi digital.",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
  },
  icons: { icon: { url: "/favicon-light.png", type: "image/png" } },
};

export const viewport: Viewport = { themeColor: "#fdfdfc", colorScheme: "light" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`bg-background ${inter.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans">
        <a className="skip-link" href="#main-content">Lewati ke konten</a>
        {children}
      </body>
    </html>
  );
}
