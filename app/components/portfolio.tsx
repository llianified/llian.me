"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "../page.module.css";
import {
  content,
  contacts,
  roles,
  site,
  technologies,
  uiCopy,
  type Entry,
  type Language,
} from "@/lib/content";
import {
  ArrowIcon,
  CodeIcon,
  FileIcon,
  GitHubIcon,
  GlobeIcon,
} from "./icons";
import { LocalTime } from "./local-time";
import { PortfolioFooter } from "./portfolio-footer";
import { ProjectCards } from "./project-cards";
import { ThemeToggle } from "./theme-toggle";

const externalProps = { target: "_blank", rel: "noreferrer" } as const;

type LocalizedProps = { language: Language };

function LanguageToggle({
  language,
  onChange,
}: LocalizedProps & { onChange: (language: Language) => void }) {
  const nextLanguage = language === "id" ? "en" : "id";
  const label =
    language === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia";

  return (
    <button
      type="button"
      className={styles.languageToggle}
      lang={language}
      aria-label={label}
      title={label}
      onClick={() => onChange(nextLanguage)}
    >
      {language.toUpperCase()}
    </button>
  );
}

function Topbar({
  language,
  onChange,
}: LocalizedProps & { onChange: (language: Language) => void }) {
  const ui = uiCopy[language];
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function dismissOutside(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    function dismissOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    const desktop = window.matchMedia("(min-width: 681px)");
    function dismissOnDesktop() {
      if (desktop.matches) setMenuOpen(false);
    }

    document.addEventListener("pointerdown", dismissOutside);
    document.addEventListener("keydown", dismissOnEscape);
    desktop.addEventListener("change", dismissOnDesktop);
    return () => {
      document.removeEventListener("pointerdown", dismissOutside);
      document.removeEventListener("keydown", dismissOnEscape);
      desktop.removeEventListener("change", dismissOnDesktop);
    };
  }, [menuOpen]);

  function navigateToSection(id: string) {
    if (!menuOpen) return;
    setMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.tabIndex = -1;
      section.focus({ preventScroll: true });
    }
  }

  return (
    <header
      ref={headerRef}
      className={styles.topbar}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setMenuOpen(false);
        }
      }}
    >
      <a
        className={styles.wordmark}
        href="#main-content"
        aria-label={`llian.me — ${ui.home}`}
        onClick={() => navigateToSection("main-content")}
      >
        llian<span>.me</span>
      </a>
      <div className={styles.controls}>
        <LanguageToggle language={language} onChange={onChange} />
        <ThemeToggle language={language} />
        <button
          ref={menuButtonRef}
          type="button"
          className={styles.menuToggle}
          aria-expanded={menuOpen}
          aria-controls="portfolio-navigation"
          aria-label={language === "id" ? "Menu navigasi" : "Navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menu
          <span className={styles.menuChevron} aria-hidden="true" />
        </button>
      </div>
      <nav
        id="portfolio-navigation"
        className={styles.navigation}
        aria-label={ui.navigation}
        data-open={menuOpen}
      >
        <a href="#projects" onClick={() => navigateToSection("projects")}>
          {ui.work}<ArrowIcon />
        </a>
        <a href="#about" onClick={() => navigateToSection("about")}>
          {ui.about}<ArrowIcon />
        </a>
        <a href="#contact" onClick={() => navigateToSection("contact")}>
          {ui.contact}<ArrowIcon />
        </a>
      </nav>
    </header>
  );
}

function Profile({ language }: LocalizedProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const bio = content[language].bio;
  const ui = uiCopy[language];

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let interval: number | undefined;

    function updateRotation() {
      window.clearInterval(interval);
      if (!preference.matches && !document.hidden) {
        interval = window.setInterval(
          () => setRoleIndex((index) => (index + 1) % roles.length),
          4000,
        );
      }
    }

    updateRotation();
    preference.addEventListener("change", updateRotation);
    document.addEventListener("visibilitychange", updateRotation);
    return () => {
      window.clearInterval(interval);
      preference.removeEventListener("change", updateRotation);
      document.removeEventListener("visibilitychange", updateRotation);
    };
  }, []);

  return (
    <section className={styles.profile} aria-labelledby="profile-name">
      <div className={styles.profileMain}>
        <div className={styles.profileTop}>
          <Image
            src="/pfp.jpg"
            alt={`${ui.profileImage} ${site.name}`}
            width={64}
            height={64}
            unoptimized
            loading="eager"
            className={styles.avatar}
          />
          <div className={styles.profileIdentity}>
            <p className={styles.smallLabel}>{ui.greeting}</p>
            <h1 id="profile-name" className={`${styles.name} font-sans`}>
              {site.name}
            </h1>
          </div>
        </div>
        <div className={styles.profileBody}>
          <div className={styles.profileByline}>
            <div className={styles.roleWrap}>
              <CodeIcon />
              <p key={roleIndex} className={styles.role}>{roles[roleIndex]}</p>
            </div>
            <a href={contacts.github} {...externalProps} className={styles.profileHandle}>
              <GitHubIcon />
              @llianified
            </a>
          </div>
          <p className={styles.lead}>
            {bio.line1Prefix}{" "}
            <a href={contacts.github} {...externalProps}>{bio.line1LinkLabel}</a>{" "}
            {bio.line1Suffix}
          </p>
        </div>
        <div className={styles.introActions}>
          <a className={styles.primaryAction} href="#projects">
            {ui.explore}<ArrowIcon />
          </a>
          <a className={styles.secondaryAction} href={site.cvHref} {...externalProps}>
            <FileIcon />{ui.cv}
          </a>
        </div>
      </div>
      <aside className={styles.profileMeta} aria-label={ui.basedIn}>
        <div className={styles.locationDetails}>
          <p className={styles.locationLine}><GlobeIcon />{site.location}</p>
          <p className={styles.localTime}>
            <span className="sr-only">{ui.localTime}: </span>
            <LocalTime /> WIB <span className={styles.timezone}>(UTC +7)</span>
          </p>
        </div>
        <div className={styles.quickContact}>
          <p className={styles.smallLabel}>{ui.idea}</p>
          <a href={contacts.email}>{ui.connect}<ArrowIcon /></a>
        </div>
      </aside>
    </section>
  );
}

function TechnologyStack({ language }: LocalizedProps) {
  const ui = uiCopy[language];
  return (
    <section className={styles.technologySection} aria-labelledby="stack-title">
      <header className={styles.groupHeading}>
        <h3 id="stack-title">{ui.technologies}</h3>
        <p>{ui.technologiesDescription}</p>
      </header>
      <ul className={styles.technologies}>
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </section>
  );
}

function Entries({ entries }: { entries: readonly Entry[] }) {
  return (
    <ul className={styles.entries}>
      {entries.map((entry) => (
        <li className={styles.entry} key={`${entry.co}-${entry.date}`}>
          <div className={styles.entryLeft}>
            {entry.href ? (
              <a
                className={styles.entryCompany}
                href={entry.href}
                {...externalProps}
              >
                {entry.co}
                <ArrowIcon />
              </a>
            ) : (
              <span className={styles.entryCompany}>{entry.co}</span>
            )}
            <span className={styles.entryRole}>{entry.role}</span>
          </div>
          <span className={styles.entryDate}>{entry.date}</span>
        </li>
      ))}
    </ul>
  );
}

function HistorySection({
  id,
  section,
}: {
  id: string;
  section: { title: string; sub: string; entries: readonly Entry[] };
}) {
  return (
    <section className={styles.historySection} aria-labelledby={id}>
      <header className={styles.groupHeading}>
        <h3 id={id}>{section.title}</h3>
        <p>{section.sub}</p>
      </header>
      <Entries entries={section.entries} />
    </section>
  );
}

export function Portfolio() {
  const [language, setLanguage] = useState<Language>("id");
  const copy = content[language];
  const ui = uiCopy[language];

  useEffect(() => {
    document.documentElement.lang = language;
    return () => {
      document.documentElement.lang = "id";
    };
  }, [language]);

  return (
    <div lang={language} className={styles.page}>
      <Topbar language={language} onChange={setLanguage} />
      <main id="main-content" tabIndex={-1} className={styles.main}>
        <Profile language={language} />
        <section
          id="projects"
          className={styles.section}
          aria-labelledby="projects-title"
        >
          <header className={styles.sectionHeading}>
            <div>
              <h2 id="projects-title">
                {ui.selectedWork}
                <span className={styles.sectionCount}>
                  {" "}
                  ({String(copy.projects.items.length).padStart(2, "0")})
                </span>
              </h2>
              <p>{copy.projects.sub}</p>
            </div>
            <a href={contacts.github} {...externalProps}>
              GitHub
              <ArrowIcon />
            </a>
          </header>
          <ProjectCards projects={copy.projects.items} language={language} />
        </section>
        <section
          id="about"
          className={styles.section}
          aria-labelledby="about-title"
        >
          <header className={styles.sectionHeading}>
            <div>
              <h2 id="about-title">{ui.behindTheWork}</h2>
              <p>{ui.aboutDescription}</p>
            </div>
            <span className={styles.sectionAside}>{ui.learning}</span>
          </header>
          <div className={styles.aboutContent}>
            <TechnologyStack language={language} />
            <div className={styles.aboutGrid}>
              <div className={styles.aboutLeft}>
                <HistorySection id="experience-title" section={copy.experience} />
                <HistorySection id="education-title" section={copy.education} />
              </div>
              <HistorySection id="contributions-title" section={copy.contributions} />
            </div>
          </div>
        </section>
        <PortfolioFooter language={language} />
      </main>
    </div>
  );
}
