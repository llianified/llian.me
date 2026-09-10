"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../page.module.css";
import { content, contacts, roles, site, technologies, type Entry, type Language, type Project } from "@/lib/content";
import { ArrowIcon, FileIcon } from "./icons";
import { LocalTime } from "./local-time";

const externalProps = { target: "_blank", rel: "noreferrer" } as const;

function SectionHeading({ title, sub }: { title: string; sub: string }) {
  return <header className={styles.sectionHeading}><h2 className="font-serif">{title}</h2><p>{sub}</p></header>;
}

function Entries({ entries }: { entries: readonly Entry[] }) {
  return (
    <div className={styles.entries}>
      {entries.map((entry) => (
        <div className={styles.entry} key={`${entry.co}-${entry.date}`}>
          <div className={styles.entryLeft}>
            {entry.href ? <a className={styles.entryCompany} href={entry.href} {...externalProps}>{entry.co}<ArrowIcon /></a> : <span className={styles.entryCompany}>{entry.co}</span>}
            <span className={styles.entryRole}>{entry.role}</span>
          </div>
          <span className={styles.entryDate}>{entry.date}</span>
        </div>
      ))}
    </div>
  );
}

function Projects({ projects, language }: { projects: readonly Project[]; language: Language }) {
  return (
    <div className={styles.projects}>
      {projects.map((project) => (
        <article className={styles.project} key={project.name}>
          <div className={styles.projectIdentity}>
            <h3 className={styles.projectName}>
              {project.detailHref ? <Link href={project.detailHref}>{project.name}</Link> : project.name}
            </h3>
            {project.badge && <span className={styles.badge}><span aria-hidden="true" />{project.badge}</span>}
          </div>
          <p className={styles.projectDesc}>{project.desc}</p>
          <div className={styles.projectActions}>
            {project.detailHref && <Link href={project.detailHref} aria-label={`${language === "id" ? "Studi kasus" : "Case study"}: ${project.name}`}>{language === "id" ? "Studi kasus" : "Case study"}<ArrowIcon /></Link>}
            <a href={project.action.href} {...externalProps} aria-label={`${project.action.label} ${project.name}`}>{project.action.label}<ArrowIcon /></a>
          </div>
        </article>
      ))}
    </div>
  );
}

function TechnologyStack({ language }: { language: Language }) {
  return (
    <div className={styles.technologySection}>
      <p className={styles.smallLabel}>{language === "id" ? "Teknologi & alat" : "Technologies & tools"}</p>
      <ul className={styles.technologies}>
        {technologies.map((technology) => <li key={technology}>{technology}</li>)}
      </ul>
    </div>
  );
}

function Profile({ language, onChange }: { language: Language; onChange: (language: Language) => void }) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let interval: number | undefined;
    const updateRotation = () => {
      window.clearInterval(interval);
      if (!preference.matches) interval = window.setInterval(() => setRoleIndex((index) => (index + 1) % roles.length), 4000);
    };
    updateRotation();
    preference.addEventListener("change", updateRotation);
    return () => { window.clearInterval(interval); preference.removeEventListener("change", updateRotation); };
  }, []);

  return (
    <header>
      <div className={styles.topbar}>
        <a className={styles.wordmark} href="#main-content">llian.me<span aria-hidden="true"> / </span><span>Portfolio</span></a>
        <div className={styles.languages} role="group" aria-label={language === "id" ? "Bahasa" : "Language"}>
          <button type="button" lang="id" aria-label="Bahasa Indonesia" aria-pressed={language === "id"} onClick={() => onChange("id")}>ID</button>
          <span aria-hidden="true">/</span>
          <button type="button" lang="en" aria-label="English" aria-pressed={language === "en"} onClick={() => onChange("en")}>EN</button>
        </div>
      </div>
      <div className={styles.profile}>
        <Image src="/pfp.jpg" alt={site.name} width={72} height={72} unoptimized preload className={styles.avatar} />
        <div className={styles.profileText}>
          <h1 className={`${styles.name} font-serif`}>{site.name}</h1>
          <div className={styles.roleWrap}><p key={roleIndex} className={styles.role}>{roles[roleIndex]}</p></div>
        </div>
      </div>
    </header>
  );
}

function Biography({ language }: { language: Language }) {
  const bio = content[language].bio;
  return (
    <div className={styles.biography}>
      <p className={styles.lead}>{bio.line1Prefix} <a href={contacts.github} {...externalProps}>{bio.line1LinkLabel}</a> {bio.line1Suffix}</p>
      <p className={styles.bio}>
        {bio.line2Prefix} <a href={contacts.instagram} {...externalProps}>{bio.line2Instagram}</a>, <a href={contacts.twitter} {...externalProps}>{bio.line2Twitter}</a>, <a href={contacts.whatsapp} {...externalProps}>WhatsApp</a> {bio.line2Or} <a href={contacts.email}>{bio.line2Email}</a>{bio.line2GitPrefix} <a href={contacts.github} {...externalProps}>{bio.line2GitLabel}</a>.
      </p>
      <p className={styles.cv}>{bio.cvPrefix}<a href={site.cvHref} {...externalProps}><FileIcon />{bio.cvLabel}<ArrowIcon /></a>{bio.cvSuffix}</p>
    </div>
  );
}

export function Portfolio() {
  const [language, setLanguage] = useState<Language>("id");
  const copy = content[language];

  return (
    <main id="main-content" tabIndex={-1} lang={language} className={styles.page}>
      <Profile language={language} onChange={setLanguage} />
      <Biography language={language} />
      <TechnologyStack language={language} />
      <section id="projects" className={styles.section}>
        <SectionHeading title={copy.projects.title} sub={copy.projects.sub} />
        <Projects projects={copy.projects.items} language={language} />
      </section>
      <section className={styles.section}>
        <SectionHeading title={copy.experience.title} sub={copy.experience.sub} />
        <Entries entries={copy.experience.entries} />
      </section>
      <section className={styles.section}>
        <SectionHeading title={copy.education.title} sub={copy.education.sub} />
        <Entries entries={copy.education.entries} />
      </section>
      <section className={styles.section}>
        <SectionHeading title={copy.contributions.title} sub={copy.contributions.sub} />
        <Entries entries={copy.contributions.entries} />
      </section>
      <footer className={styles.footer}>
        <div><p>{copy.footer.creditPrefix} <strong>{copy.footer.creditName}</strong></p><p>{copy.footer.copyright}</p></div>
        <p className={styles.footerLocation}>{copy.footer.location}<span><LocalTime /> WIB</span></p>
      </footer>
    </main>
  );
}
