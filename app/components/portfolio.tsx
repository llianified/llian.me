"use client";

import Image from "next/image";
import styles from "../page.module.css";
import {
  content,
  contacts,
  roles,
  site,
  technologyGroups,
  uiCopy,
  type Entry,
} from "@/lib/content";
import { PortfolioFooter } from "./portfolio-footer";
import { ProjectCards } from "./project-cards";
import { ThemeToggle } from "./theme-toggle";

const externalProps = { target: "_blank", rel: "noreferrer" } as const;

function FloatingControls() {
  return (
    <div className={styles.floatingControls} aria-label="Display settings">
      <ThemeToggle />
      <span className={styles.shortcutHint} aria-hidden="true">
        press T
      </span>
    </div>
  );
}

function InlineContacts() {
  return (
    <div className={styles.inlineContacts}>
      <p>
        Reach me by <a href={contacts.email}>email</a> or hop on{" "}
        <a href={contacts.whatsapp} {...externalProps}>
          a quick call
        </a>
        .
      </p>
      <p>
        Find me on <a href={contacts.github} {...externalProps}>GitHub</a>,{" "}
        <a href={contacts.twitter} {...externalProps}>X / Twitter</a>, and{" "}
        <a href={contacts.instagram} {...externalProps}>Instagram</a>. You can also read my{" "}
        <a href={site.cvHref} {...externalProps}>CV</a> or browse my{" "}
        <a href="#projects">work</a>.
      </p>
    </div>
  );
}

function Profile() {
  const bio = content.bio;

  return (
    <aside className={styles.profileColumn} aria-labelledby="profile-name">
      <header className={styles.profileHeader}>
        <Image
          src="/pfp.jpg"
          alt={`${uiCopy.profileImage} ${site.name}`}
          width={52}
          height={52}
          priority
          unoptimized
          className={styles.avatar}
        />
        <div>
          <h1 id="profile-name" className="font-serif">{site.name}</h1>
          <p className={styles.role}>{roles[0]}</p>
        </div>
      </header>

      <p className={styles.bio}>
        {bio.line1Prefix}{" "}
        <a href={contacts.github} {...externalProps}>{bio.line1LinkLabel}</a>{" "}
        {bio.line1Suffix}
      </p>
      <p className={styles.profileDetail}>{bio.detail}</p>

      <InlineContacts />
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

function TechnicalStack() {
  return (
    <section id="stack" className={styles.contentSection} aria-labelledby="stack-title">
      <SectionTitle id="stack-title">{uiCopy.technologies}</SectionTitle>
      <p className={styles.sectionSubtitle}>{uiCopy.technologiesDescription}</p>
      <dl className={styles.stackList}>
        {technologyGroups.map((group) => (
          <div className={styles.stackRow} key={group.label}>
            <dt>{group.label}</dt>
            <dd>{group.items.join(" · ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Contributions() {
  const section = content.contributions;
  return (
    <section id="contributions" className={styles.contentSection} aria-labelledby="contributions-title">
      <SectionTitle id="contributions-title">{section.title}</SectionTitle>
      <p className={styles.sectionSubtitle}>{section.sub}</p>
      <div className={styles.contributionGrid}>
        {section.entries.map((entry) => (
          <article className={styles.contribution} key={`${entry.co}-${entry.date}`}>
            <div>
              <h3>{entry.href ? <a href={entry.href} {...externalProps}>{entry.co}</a> : entry.co}</h3>
              <p>{entry.role}</p>
            </div>
            <time>{entry.date}</time>
          </article>
        ))}
      </div>
    </section>
  );
}

function Capabilities() {
  const section = content.capabilities;
  return (
    <section id="capabilities" className={styles.contentSection} aria-labelledby="capabilities-title">
      <SectionTitle id="capabilities-title">{section.title}</SectionTitle>
      <p className={styles.sectionSubtitle}>{section.sub}</p>
      <div className={styles.capabilityList}>
        {section.items.map((item) => (
          <article className={styles.capability} key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Portfolio() {
  return (
    <div className={styles.page}>
      <FloatingControls />
      <Profile />

      <main id="main-content" tabIndex={-1} className={styles.main}>
        <TechnicalStack />

        <section id="experience" className={styles.contentSection} aria-labelledby="experience-title">
          <SectionTitle id="experience-title">{content.experience.title}</SectionTitle>
          <p className={styles.sectionSubtitle}>{content.experience.sub}</p>
          <Timeline entries={content.experience.entries} />
        </section>

        <Contributions />

        <section id="projects" className={styles.contentSection} aria-labelledby="projects-title">
          <SectionTitle id="projects-title">{content.projects.title}</SectionTitle>
          <ProjectCards projects={content.projects.items} />
        </section>

        <Capabilities />

        <section id="education" className={styles.contentSection} aria-labelledby="education-title">
          <SectionTitle id="education-title">{content.education.title}</SectionTitle>
          <Timeline entries={content.education.entries} />
        </section>

        <PortfolioFooter />
      </main>
    </div>
  );
}
