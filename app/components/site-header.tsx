"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/content";
import styles from "../page.module.css";
import { BackIcon } from "./icons";
import { stagger } from "./motion";
import { ThemeToggle } from "./theme-toggle";

const sections = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contributions", label: "Contributions" },
  { id: "stack", label: "Stack" },
  { id: "capabilities", label: "How I work" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

const lastSectionId = sections[sections.length - 1].id;

type SiteHeaderProps = {
  /** Replaces the section nav with a back link on subpages. */
  back?: { href: string; label: string };
};

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry) setScrolled(!entry.isIntersecting);
    });
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return { scrolled, sentinelRef };
}

function SectionNav() {
  const [active, setActive] = useState<string | null>(null);

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
    const footer = document.getElementById("site-footer");
    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setActive(lastSectionId);
      },
      { threshold: 1 },
    );
    if (footer) footerObserver.observe(footer);

    return () => {
      sectionObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  return (
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
  );
}

export function SiteHeader({ back }: SiteHeaderProps) {
  const { scrolled, sentinelRef } = useScrolled();

  return (
    <>
      <div ref={sentinelRef} className={styles.scrollSentinel} aria-hidden="true" />
      <header
        className={`${styles.siteHeader} rv-load`}
        style={stagger(0)}
        data-scrolled={scrolled ? "" : undefined}
      >
        <Link href="/" className={`${styles.brand} font-serif`} aria-label={`${site.name}, back to home`}>
          {site.shortName}
        </Link>

        {back ? (
          <nav className={styles.backNav} aria-label="Page navigation">
            <Link href={back.href}>
              <BackIcon />
              <span>{back.label}</span>
            </Link>
          </nav>
        ) : (
          <SectionNav />
        )}

        <div className={styles.headerControls}>
          <ThemeToggle />
        </div>
      </header>
    </>
  );
}
