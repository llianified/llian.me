import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/lib/content";
import { ArrowIcon, BackIcon } from "./components/icons";
import { PortfolioFooter } from "./components/portfolio-footer";
import { stagger } from "./components/motion";
import { SiteHeader } from "./components/site-header";
import page from "./page.module.css";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  const copy = content.notFound;

  return (
    <div className={`${page.page} ${styles.shell}`}>
      <SiteHeader back={{ href: "/", label: copy.back }} />

      <main id="main-content" tabIndex={-1} className={styles.main}>
        <p className={`${styles.eyebrow} rv-load`} style={stagger(1)}>
          {copy.eyebrow}
        </p>
        <h1 className={`${styles.title} font-serif rv-load`} style={stagger(2)}>
          {copy.title}
        </h1>
        <p className={`${styles.body} rv-load`} style={stagger(3)}>
          {copy.body}
        </p>
        <nav className={`${styles.actions} rv-load`} style={stagger(4)} aria-label="Recovery links">
          <Link href="/">
            <BackIcon />
            <span>{copy.back}</span>
          </Link>
          <Link href="/#projects">
            <span>{copy.projects}</span>
            <ArrowIcon />
          </Link>
        </nav>
      </main>

      <PortfolioFooter />
    </div>
  );
}
