import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { content, site } from "@/lib/content";
import { ArrowIcon, BackIcon } from "./components/icons";
import { ThemeToggle } from "./components/theme-toggle";
import styles from "./not-found.module.css";

function stagger(index: number): CSSProperties {
  return { "--i": index } as CSSProperties;
}

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  const copy = content.notFound;

  return (
    <div className={styles.shell}>
      <header className={`${styles.header} rv-load`} style={stagger(0)}>
        <Link href="/" className={`${styles.brand} font-serif`} aria-label={`${site.name}, back to home`}>
          {site.shortName}
        </Link>
        <ThemeToggle />
      </header>

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
            <BackIcon /> {copy.back}
          </Link>
          <Link href="/#projects">
            {copy.projects} <ArrowIcon />
          </Link>
        </nav>
      </main>
    </div>
  );
}
