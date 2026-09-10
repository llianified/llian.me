"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../page.module.css";
import { content, contacts, roles, site, technologies, type Entry, type Language } from "@/lib/content";
import { ArrowIcon, CodeIcon, FileIcon, GitHubIcon, GlobeIcon, StackIcon } from "./icons";
import { LocalTime } from "./local-time";
import { PortfolioFooter } from "./portfolio-footer";
import { ProjectCards } from "./project-cards";
import { ThemeToggle } from "./theme-toggle";

const externalProps = { target: "_blank", rel: "noreferrer" } as const;

function Topbar({ language, onChange }: { language: Language; onChange: (language: Language) => void }) {
  return (
    <header className={styles.topbar}>
      <a className={styles.wordmark} href="#main-content" aria-label="llian.me — Home">llian<span>.me</span></a>
      <nav className={styles.navigation} aria-label={language === "id" ? "Navigasi utama" : "Main navigation"}>
        <a href="#projects">{language === "id" ? "Proyek" : "Work"}</a>
        <a href="#about">{language === "id" ? "Tentang" : "About"}</a>
        <a href="#contact">{language === "id" ? "Kontak" : "Contact"}<ArrowIcon /></a>
      </nav>
      <div className={styles.controls}>
        <div className={styles.languages} role="group" aria-label={language === "id" ? "Bahasa" : "Language"}>
          <button type="button" lang="id" aria-label="Bahasa Indonesia" aria-pressed={language === "id"} onClick={() => onChange("id")}>ID</button>
          <button type="button" lang="en" aria-label="English" aria-pressed={language === "en"} onClick={() => onChange("en")}>EN</button>
        </div>
        <ThemeToggle language={language} />
      </div>
    </header>
  );
}

function Profile({ language }: { language: Language }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const bio = content[language].bio;

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
    <section className={`${styles.card} ${styles.profile}`} aria-labelledby="profile-name">
      <div className={styles.profileTop}>
        <Image src="/pfp.jpg" alt={`Ilustrasi profil ${site.name}`} width={64} height={64} unoptimized preload className={styles.avatar} />
        <div className={styles.profileHandle}><span>{language === "id" ? "Halo, saya Yoga" : "Hey, I’m Yoga"}</span><span>@llianified</span></div>
        <a href={contacts.github} {...externalProps} className={styles.iconLink} aria-label="GitHub — llianified"><GitHubIcon /></a>
      </div>
      <div className={styles.profileBody}>
        <h1 id="profile-name" className={`${styles.name} font-serif`}>{site.name}</h1>
        <div className={styles.roleWrap}><CodeIcon /><p key={roleIndex} className={styles.role}>{roles[roleIndex]}</p></div>
        <p className={styles.lead}>{bio.line1Prefix} <a href={contacts.github} {...externalProps}>{bio.line1LinkLabel}</a> {bio.line1Suffix}</p>
      </div>
      <div className={styles.introActions}>
        <a className={styles.primaryAction} href="#projects">{language === "id" ? "Jelajahi proyek" : "Explore projects"}<ArrowIcon /></a>
        <a className={styles.secondaryAction} href={site.cvHref} {...externalProps}><FileIcon />{language === "id" ? "Lihat CV" : "View CV"}</a>
      </div>
    </section>
  );
}

function LocationCard({ language }: { language: Language }) {
  return (
    <section className={`${styles.card} ${styles.locationCard}`} aria-label={site.location}>
      <div className={styles.cardLabel}><GlobeIcon /><span>{language === "id" ? "Berbasis di" : "Based in"}</span><span className={styles.utc}>UTC +7</span></div>
      <div className={styles.locationBody}><p className="font-serif">{site.location.split(",")[0]}<span>.</span></p><span>Indonesia</span></div>
      <div className={styles.locationBottom}><span>{language === "id" ? "Waktu lokal" : "Local time"}</span><span><LocalTime /> WIB</span></div>
    </section>
  );
}

function TechnologyStack({ language }: { language: Language }) {
  return (
    <section className={`${styles.card} ${styles.technologyCard}`} aria-labelledby="stack-title">
      <div className={styles.cardLabel}><StackIcon /><h2 id="stack-title">{language === "id" ? "Teknologi & alat" : "Technologies & tools"}</h2></div>
      <p className={styles.cardDescription}>{language === "id" ? "Di balik setiap proyek." : "Behind every project."}</p>
      <ul className={styles.technologies}>{technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
    </section>
  );
}

function Entries({ entries }: { entries: readonly Entry[] }) {
  return (
    <ul className={styles.entries}>
      {entries.map((entry) => (
        <li className={styles.entry} key={`${entry.co}-${entry.date}`}>
          <div className={styles.entryLeft}>
            {entry.href ? <a className={styles.entryCompany} href={entry.href} {...externalProps}>{entry.co}<ArrowIcon /></a> : <span className={styles.entryCompany}>{entry.co}</span>}
            <span className={styles.entryRole}>{entry.role}</span>
          </div>
          <span className={styles.entryDate}>{entry.date}</span>
        </li>
      ))}
    </ul>
  );
}

export function Portfolio() {
  const [language, setLanguage] = useState<Language>("id");
  const copy = content[language];

  return (
    <div lang={language} className={styles.page}>
      <Topbar language={language} onChange={setLanguage} />
      <main id="main-content" tabIndex={-1} className={styles.main}>
        <div className={styles.introGrid}>
          <Profile language={language} />
          <div className={styles.introSidebar}>
            <LocationCard language={language} />
            <a className={`${styles.card} ${styles.quickContact}`} href={contacts.email}>
              <span><span className={styles.smallLabel}>{language === "id" ? "Punya ide menarik?" : "Have something in mind?"}</span><strong>{language === "id" ? "Mari terhubung." : "Let’s connect."}</strong></span>
              <span className={styles.roundArrow}><ArrowIcon /></span>
            </a>
          </div>
        </div>
        <section id="projects" className={styles.section} aria-labelledby="projects-title">
          <header className={styles.sectionHeading}>
            <div><h2 id="projects-title">{language === "id" ? "Pilihan karya" : "Selected work"}<span className={styles.sectionCount}>({String(copy.projects.items.length).padStart(2, "0")})</span></h2><p>{copy.projects.sub}</p></div>
            <a href={contacts.github} {...externalProps}>GitHub<ArrowIcon /></a>
          </header>
          <ProjectCards projects={copy.projects.items} language={language} />
        </section>
        <section id="about" className={styles.section} aria-labelledby="about-title">
          <header className={styles.sectionHeading}><div><h2 id="about-title">{language === "id" ? "Di balik layar" : "Behind the work"}</h2><p>{language === "id" ? "Perjalanan, alat, dan komunitas yang membentuk saya." : "The journey, tools, and communities that shaped me."}</p></div><span className={styles.sectionAside}>{language === "id" ? "Selalu belajar." : "Always learning."}</span></header>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutLeft}>
              <TechnologyStack language={language} />
              <section className={`${styles.card} ${styles.historyCard}`} aria-labelledby="experience-title">
                <header className={styles.cardHeading}><h3 id="experience-title">{copy.experience.title}</h3><p>{copy.experience.sub}</p></header>
                <Entries entries={copy.experience.entries} />
              </section>
              <section className={`${styles.card} ${styles.historyCard}`} aria-labelledby="education-title">
                <header className={styles.cardHeading}><h3 id="education-title">{copy.education.title}</h3><p>{copy.education.sub}</p></header>
                <Entries entries={copy.education.entries} />
              </section>
            </div>
            <section className={`${styles.card} ${styles.contributionCard}`} aria-labelledby="contributions-title">
              <header className={styles.cardHeading}><h3 id="contributions-title">{copy.contributions.title}</h3><p>{copy.contributions.sub}</p></header>
              <Entries entries={copy.contributions.entries} />
            </section>
          </div>
        </section>
        <PortfolioFooter language={language} />
      </main>
    </div>
  );
}
