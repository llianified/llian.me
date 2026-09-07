"use client";

import { useEffect, useState } from "react";
import styles from "./nav.module.css";

const items = [
  { label: "Pengalaman", id: "pengalaman" },
  { label: "Kontribusi", id: "kontribusi" },
  { label: "Proyek", id: "proyek" },
  { label: "Kontak", id: "kontak" },
];

/** Titik merah menandai bagian yang lagi kebaca. */
export function Nav() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const onscreen = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );

        if (onscreen.length > 0) setActive(onscreen[0].target.id);
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.nav} aria-label="Bagian halaman">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={styles.link}
          data-active={active === item.id}
          aria-current={active === item.id ? "true" : undefined}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
