"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/content";
import styles from "../page.module.css";
import { stagger } from "./reveal";
import { ThemeToggle } from "./theme-toggle";

const sections = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contributions", label: "Contributions" },
  { id: "stack", label: "Stack" },
  { id: "capabilities", label: "How I work" },
  { id: "education", label: "Education" },
] as const;

const lastSectionId = sections[sections.length - 1].id;

export function SiteHeader() {
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-22% 0px -58% 0px" },
    );
    targets.forEach((target) => sectionObserver.observe(target));

    // The final section is too short to ever reach the active band, so the
    // footer being fully in view is what marks it active.
    const footer = document.getElementById("contact");
    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setActive(lastSectionId);
      },
      { threshold: 1 },
    );
    if (footer) footerObserver.observe(footer);

    const sentinelObserver = new IntersectionObserver(([entry]) => {
      if (entry) setScrolled(!entry.isIntersecting);
    });
    if (sentinelRef.current) sentinelObserver.observe(sentinelRef.current);

    return () => {
      sectionObserver.disconnect();
      footerObserver.disconnect();
      sentinelObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={sentinelRef} className={styles.scrollSentinel} aria-hidden="true" />
      <header
        className={`${styles.siteHeader} rv-load`}
        style={stagger(0)}
        data-scrolled={scrolled ? "" : undefined}
      >
        <Link href="/" className={`${styles.brand} font-serif`} aria-label={`${site.name}, back to top`}>
          {site.shortName}
        </Link>

        <nav className={styles.nav} aria-label="Sections">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={active === section.id ? "location" : undefined}
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className={styles.headerControls} aria-label="Display settings">
          <ThemeToggle />
          <span className={styles.shortcutHint} aria-hidden="true">
            press T
          </span>
        </div>
      </header>
    </>
  );
}
