"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
import { FileIcon } from "./icons";
import { PortfolioFooter, SocialRail } from "./portfolio-footer";
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

function FloatingControls({
  language,
  onChange,
}: LocalizedProps & { onChange: (language: Language) => void }) {
  return (
    <div className={styles.floatingControls} aria-label={uiCopy[language].language}>
      <LanguageToggle language={language} onChange={onChange} />
      <ThemeToggle language={language} />
      <span className={styles.shortcutHint} aria-hidden="true">
        press T
      </span>
    </div>
  );
}

function InlineContacts({ language }: LocalizedProps) {
  const ui = uiCopy[language];
  return (
    <div className={styles.inlineContacts}>
      <p>
        {language === "id" ? "Hubungi saya lewat" : "Reach me at"}{" "}
        <a href={contacts.email}>email</a>{" "}
        {language === "id" ? "atau" : "or"}{" "}
        <a href={contacts.whatsapp} {...externalProps}>
          {language === "id" ? "telepon cepat" : "a quick call"}
        </a>
        .
      </p>
      <p>
        {language === "id" ? "Temukan saya di" : "Find me on"}{" "}
        <a href={contacts.github} {...externalProps}>GitHub</a>,{" "}
        <a href={contacts.twitter} {...externalProps}>X / Twitter</a>,{" "}
        <a href={contacts.instagram} {...externalProps}>Instagram</a>, {language === "id" ? "baca" : "read"}{" "}
        <a href={site.cvHref} {...externalProps}>CV</a>, {language === "id" ? "atau lihat" : "or see my"}{" "}
        <a href="#projects">{ui.work.toLowerCase()}</a>.
      </p>
    </div>
  );
}

function FeaturedProject({
  href,
  image,
  title,
}: {
  href: string;
  image: string;
  title: string;
}) {
  return (
    <Link className={styles.featuredProject} href={href}>
      <span className={styles.featuredImage}>
        <Image src={image} alt="" fill sizes="280px" unoptimized />
      </span>
      <span>{title}</span>
    </Link>
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
    <aside className={styles.profileColumn} aria-labelledby="profile-name">
      <header className={styles.profileHeader}>
        <Image
          src="/pfp.jpg"
          alt={`${ui.profileImage} ${site.name}`}
          width={52}
          height={52}
          priority
          unoptimized
          className={styles.avatar}
        />
        <div>
          <h1 id="profile-name" className="font-serif">{site.name}</h1>
          <p key={roleIndex} className={styles.role}>{roles[roleIndex]}</p>
        </div>
      </header>

      <p className={styles.bio}>
        {bio.line1Prefix}{" "}
        <a href={contacts.github} {...externalProps}>{bio.line1LinkLabel}</a>{" "}
        {bio.line1Suffix}
      </p>

      <InlineContacts language={language} />

      <section className={styles.recent} aria-labelledby="recent-title">
        <h2 id="recent-title">
          <span aria-hidden="true"># </span>
          {language === "id" ? "Baru dikirim" : "Recently shipped"}
        </h2>
        <FeaturedProject
          href="/projects/llnx"
          image="/projects/llnx/tui-overview.png"
          title="llnx — crypto execution system"
        />
        <FeaturedProject
          href="/projects/llian-dev"
          image="/projects/llian-dev/overview.png"
          title="llian.dev — local-first web tools"
        />
        <a className={styles.allProjects} href="#projects">
          {language === "id" ? "semua proyek" : "all projects"} →
        </a>
      </section>
    </aside>
  );
}

function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className={styles.sectionTitle}>
      <span aria-hidden="true"># </span>
      {children}
    </h2>
  );
}

function Timeline({ entries }: { entries: readonly Entry[] }) {
  return (
    <ul className={styles.timeline}>
      {entries.map((entry) => (
        <li key={`${entry.co}-${entry.date}`}>
          <span className={styles.timelineMark} aria-hidden="true">
            {entry.co.slice(0, 1)}
          </span>
          <div className={styles.timelineIdentity}>
            {entry.href ? (
              <a href={entry.href} {...externalProps}>{entry.co}</a>
            ) : (
              <strong>{entry.co}</strong>
            )}
            <span>{entry.role}</span>
          </div>
          <time>{entry.date}</time>
        </li>
      ))}
    </ul>
  );
}

function Contributions({ language }: LocalizedProps) {
  const section = content[language].contributions;
  return (
    <section id="contributions" className={styles.contentSection} aria-labelledby="contributions-title">
      <SectionTitle id="contributions-title">{section.title}</SectionTitle>
      <p className={styles.sectionSubtitle}>{section.sub}</p>
      <div className={styles.contributionGrid}>
        {section.entries.map((entry) => (
          <article className={styles.contribution} key={`${entry.co}-${entry.date}`}>
            <p>{entry.date}</p>
            <h3>{entry.href ? <a href={entry.href} {...externalProps}>{entry.co}</a> : entry.co}</h3>
            <p>{entry.role}</p>
            {entry.href && (
              <a className={styles.readLink} href={entry.href} {...externalProps}>
                <FileIcon /> {language === "id" ? "lihat kontribusi" : "view contribution"}
              </a>
            )}
          </article>
        ))}
      </div>
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
      <SocialRail language={language} />
      <FloatingControls language={language} onChange={setLanguage} />
      <Profile language={language} />

      <main id="main-content" tabIndex={-1} className={styles.main}>
        <section id="experience" className={styles.contentSection} aria-labelledby="experience-title">
          <SectionTitle id="experience-title">{copy.experience.title}</SectionTitle>
          <Timeline entries={copy.experience.entries} />
        </section>

        <section id="projects" className={styles.contentSection} aria-labelledby="projects-title">
          <SectionTitle id="projects-title">{copy.projects.title}</SectionTitle>
          <ProjectCards projects={copy.projects.items} language={language} />
        </section>

        <Contributions language={language} />

        <section id="education" className={styles.contentSection} aria-labelledby="education-title">
          <SectionTitle id="education-title">{copy.education.title}</SectionTitle>
          <Timeline entries={copy.education.entries} />
        </section>

        <section id="engineering" className={styles.contentSection} aria-labelledby="engineering-title">
          <SectionTitle id="engineering-title">{ui.technologies}</SectionTitle>
          <p className={styles.engineeringLine}>
            {technologies.map((technology, index) => (
              <span key={technology}>
                {technology}{index < technologies.length - 1 && <i aria-hidden="true">·</i>}
              </span>
            ))}
          </p>
          <a className={styles.resumeLink} href={site.cvHref} {...externalProps}>
            <FileIcon /> {ui.cv}
          </a>
        </section>

        <PortfolioFooter language={language} />
      </main>
    </div>
  );
}
