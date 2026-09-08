"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import styles from "../page.module.css";
import { content, contacts, roles, site, technologies, type Entry, type Language, type Project } from "@/lib/content";
import { ArrowIcon, FileIcon, GitHubIcon, InstagramIcon, MailIcon, TechnologyIcon, VerifiedIcon, WhatsAppIcon, XIcon } from "./icons";
import { LocalTime } from "./local-time";

function externalProps(external = true) {
  return external ? { target: "_blank", rel: "noreferrer" } : {};
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.dataset.visible = "true";
        observer.disconnect();
      }
    }, { threshold: 0.08 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`${styles.reveal} ${className}`}>{children}</div>;
}

function SectionHeading({ title, sub }: { title: string; sub: string }) {
  return <><h2 className={styles.sectionTitle}><span className={styles.hash}>#</span>{title}</h2><p className={styles.sectionSub}>{sub}</p></>;
}

function Entries({ entries }: { entries: readonly Entry[] }) {
  return (
    <div className={styles.entriesGrid}>
      {entries.map((entry) => (
        <div className={styles.entryRow} key={`${entry.co}-${entry.date}`}>
          <div className={styles.entryLeft}>
            <span className={styles.entryCompany}>{entry.co}</span>
            <span className={styles.entryRole}>{entry.role}</span>
          </div>
          <span className={styles.entryDate}>{entry.date}</span>
        </div>
      ))}
    </div>
  );
}

function Contributions({ entries }: { entries: readonly Entry[] }) {
  return (
    <div className={styles.contributionsGrid}>
      {entries.map((entry) => (
        <div key={entry.co}>
          <div className={styles.contributionTop}>
            <a className={styles.entryCompany} href={entry.href} {...externalProps()}>{entry.co}</a>
            <span className={styles.entryDate}>{entry.date}</span>
          </div>
          <p className={styles.entryRole}>{entry.role}</p>
        </div>
      ))}
    </div>
  );
}

function Projects({ projects }: { projects: readonly Project[] }) {
  return (
    <div className={styles.projectsGrid}>
      {projects.map((project) => (
        <article className={styles.project} key={project.name}>
          <h3 className={styles.projectName}>
            {project.detailHref ? (
              <Link className={styles.projectDetailLink} href={project.detailHref}>{project.name}</Link>
            ) : (
              project.name
            )}
            {project.badge && <span className={styles.badge}><span className={styles.badgeDot} />{project.badge}</span>}
          </h3>
          <p className={styles.projectDesc}>
            {project.detailHref ? <Link href={project.detailHref}>{project.desc}</Link> : project.desc}
          </p>
          <div className={styles.projectActions}>
            {project.detailHref && <Link className={styles.projectLink} href={project.detailHref}>Case study</Link>}
            <a className={styles.projectLink} href={project.action.href} {...externalProps()}>
              {project.action.label}
              {project.action.kind === "github" ? <GitHubIcon /> : <ArrowIcon />}
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

function TechnologyMarquee() {
  const items = [...technologies, ...technologies];
  return (
    <div className={styles.marquee} aria-label="Technology stack">
      <div className={styles.marqueeTrack}>
        {items.map((technology, index) => (
          <span className={styles.marqueePill} key={`${technology}-${index}`} aria-hidden={index >= technologies.length}>
            <span className={styles.marqueeIcon}><TechnologyIcon name={technology} /></span>{technology}
          </span>
        ))}
      </div>
    </div>
  );
}

function Profile({ roleIndex, roleExiting, language, onToggle }: { roleIndex: number; roleExiting: boolean; language: Language; onToggle: () => void }) {
  return (
    <div className={`${styles.profile} ${styles.introItem}`} style={{ "--intro-delay": "80ms" } as CSSProperties}>
      <div className={styles.avatar} role="img" aria-label={site.name} />
      <div>
        <h1 className={styles.name}>{site.name}<VerifiedIcon className={styles.verified} /></h1>
        <div className={styles.roleWrap}><p className={`${styles.role} ${roleExiting ? styles.roleExit : ""}`}>{roles[roleIndex]}</p></div>
      </div>
      <button type="button" className={styles.languageToggle} onClick={onToggle} aria-label={language === "id" ? "Switch to English" : "Ganti ke bahasa Indonesia"}>
        <span className={language === "id" ? styles.languageActive : ""}>ID</span>
        <span className={language === "en" ? styles.languageActive : ""}>EN</span>
        <span className={`${styles.languagePill} ${language === "en" ? styles.languagePillEnglish : ""}`} />
      </button>
    </div>
  );
}

function Biography({ language }: { language: Language }) {
  const bio = content[language].bio;
  return (
    <div className={styles.biography}>
      <p className={`${styles.bio} ${styles.introItem}`} style={{ "--intro-delay": "150ms" } as CSSProperties}>
        {bio.line1Prefix} <a className={styles.sketchLink} href={contacts.github} {...externalProps()}>{bio.line1LinkLabel}</a> {bio.line1Suffix}
      </p>
      <p className={`${styles.bio} ${styles.introItem}`} style={{ "--intro-delay": "220ms" } as CSSProperties}>
        {bio.line2Prefix} <a href={contacts.instagram} {...externalProps()}><InstagramIcon />{bio.line2Instagram}</a>, <a href={contacts.twitter} {...externalProps()}><XIcon />{bio.line2Twitter}</a>, <a href={contacts.whatsapp} {...externalProps()}><WhatsAppIcon />WhatsApp</a> {bio.line2Or} <a href={contacts.email}><MailIcon />{bio.line2Email}</a>{bio.line2GitPrefix} <a href={contacts.github} {...externalProps()}><GitHubIcon />{bio.line2GitLabel}</a>.
      </p>
      <p className={`${styles.bio} ${styles.bioLast} ${styles.introItem}`} style={{ "--intro-delay": "290ms" } as CSSProperties}>
        {bio.cvPrefix}<a href={site.cvHref} target="_blank" rel="noreferrer"><FileIcon />{bio.cvLabel}</a>{bio.cvSuffix}
      </p>
    </div>
  );
}

export function Portfolio() {
  const [language, setLanguage] = useState<Language>("id");
  const [blurring, setBlurring] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleExiting, setRoleExiting] = useState(false);
  const copy = content[language];

  useEffect(() => {
    let transition: number | undefined;
    const rotation = window.setTimeout(() => {
      setRoleExiting(true);
      transition = window.setTimeout(() => {
        setRoleIndex((current) => (current + 1) % roles.length);
        setRoleExiting(false);
      }, 280);
    }, 3_000);
    return () => { window.clearTimeout(rotation); if (transition) window.clearTimeout(transition); };
  }, [roleIndex]);

  const toggleLanguage = () => {
    if (blurring) return;
    setBlurring(true);
    window.setTimeout(() => {
      setLanguage((current) => current === "id" ? "en" : "id");
      setBlurring(false);
    }, 220);
  };

  return (
    <main className={`${styles.page} ${styles.pageEnter}`}>
      <Profile roleIndex={roleIndex} roleExiting={roleExiting} language={language} onToggle={toggleLanguage} />
      <div className={`${styles.languageContent} ${blurring ? styles.languageBlur : ""}`}>
        <Biography language={language} />
        <div className={`${styles.introItem}`} style={{ "--intro-delay": "360ms" } as CSSProperties}><TechnologyMarquee /></div>
        <Reveal className={styles.section}><SectionHeading title={copy.experience.title} sub={copy.experience.sub} /><Entries entries={copy.experience.entries} /></Reveal>
        <Reveal className={styles.section}><SectionHeading title={copy.education.title} sub={copy.education.sub} /><Entries entries={copy.education.entries} /></Reveal>
        <Reveal className={styles.section}><SectionHeading title={copy.contributions.title} sub={copy.contributions.sub} /><Contributions entries={copy.contributions.entries} /></Reveal>
        <Reveal className={styles.section}><section id="projects"><SectionHeading title={copy.projects.title} sub={copy.projects.sub} /><Projects projects={copy.projects.items} /></section></Reveal>
        <Reveal>
          <footer className={styles.footer}>
            <div><p>{copy.footer.creditPrefix} <strong>{copy.footer.creditName}</strong></p><p>{copy.footer.copyright}</p></div>
            <div className={styles.footerRight}><p>{copy.footer.visitorsLabel} #— <span aria-hidden>|</span> {copy.footer.onlineLabel} —</p><p className={styles.footerLocation}>{copy.footer.location} · <LocalTime /></p></div>
          </footer>
        </Reveal>
      </div>
    </main>
  );
}
