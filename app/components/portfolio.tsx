"use client";

import type { ReactNode } from "react";
import styles from "../page.module.css";
import {
  availability,
  content,
  contacts,
  roles,
  site,
  technologyGroups,
  uiCopy,
  type Entry,
} from "@/lib/content";
import { ArrowIcon } from "./icons";
import { PortfolioFooter } from "./portfolio-footer";
import { ProjectCards } from "./project-cards";
import { Reveal, stagger } from "./reveal";
import { SiteHeader } from "./site-header";

const externalProps = { target: "_blank", rel: "noreferrer" } as const;

function InlineContacts() {
  return (
    <div className={`${styles.inlineContacts} rv-load`} style={stagger(5)}>
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
    <section className={styles.hero} aria-labelledby="profile-name">
      <h1 id="profile-name" className={`${styles.heroName} font-serif rv-load`} style={stagger(1)}>
        {site.name}
      </h1>
      <p className={`${styles.role} rv-load`} style={stagger(2)}>{roles[0]}</p>
      <p
        className={`${styles.status} rv-load`}
        style={stagger(2)}
        data-open={availability.open ? "" : undefined}
      >
        <span className={styles.statusDot} aria-hidden="true" />
        <span>{availability.label}</span>
        <span className={styles.statusDetail}>{availability.detail}</span>
      </p>

      <div className={styles.heroGrid}>
        <div className={styles.heroLead}>
          <p className={`${styles.bio} rv-load`} style={stagger(3)}>
            {bio.line1Prefix}{" "}
            <a href={contacts.github} {...externalProps}>{bio.line1LinkLabel}</a>{" "}
            {bio.line1Suffix}
          </p>
          <p className={`${styles.profileDetail} rv-load`} style={stagger(4)}>{bio.detail}</p>
        </div>
        <InlineContacts />
      </div>
    </section>
  );
}

function Section({
  id,
  title,
  sub,
  delay,
  children,
}: {
  id: string;
  title: string;
  sub?: string;
  delay?: number;
  children: ReactNode;
}) {
  return (
    <Reveal
      as="section"
      id={id}
      className={`${styles.contentSection} ${styles.bleedTop}`}
      aria-labelledby={`${id}-title`}
      delay={delay}
    >
      <div className={styles.sectionHeader}>
        <h2 id={`${id}-title`} className={`${styles.sectionTitle} rv`} style={stagger(0)}>
          <span aria-hidden="true"># </span>
          {title}
        </h2>
        {sub && (
          <p className={`${styles.sectionSubtitle} rv`} style={stagger(1)}>
            {sub}
          </p>
        )}
      </div>
      <div className={styles.sectionBody}>{children}</div>
    </Reveal>
  );
}

function Timeline({ entries }: { entries: readonly Entry[] }) {
  return (
    <ul className={`${styles.ruled} ${styles.timeline}`}>
      {entries.map((entry, index) => (
        <li key={`${entry.co}-${entry.date}`} className={`${styles.row} rv`} style={stagger(index + 2)}>
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
    <Section id="stack" title={uiCopy.technologies} sub={uiCopy.technologiesDescription}>
      <dl className={styles.ruled}>
        {technologyGroups.map((group, index) => (
          <div className={`${styles.row} ${styles.stackRow} rv`} key={group.label} style={stagger(index + 2)}>
            <dt>{group.label}</dt>
            <dd>{group.items.join(" · ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

function Contributions() {
  const section = content.contributions;
  return (
    <Section id="contributions" title={section.title} sub={section.sub}>
      <div className={styles.ruled}>
        {section.entries.map((entry, index) => (
          <article
            className={`${styles.row} ${styles.contribution} rv`}
            key={`${entry.co}-${entry.date}`}
            style={stagger(index + 2)}
          >
            <div>
              <h3>{entry.href ? <a href={entry.href} {...externalProps}>{entry.co}</a> : entry.co}</h3>
              <p>{entry.role}</p>
            </div>
            <time>{entry.date}</time>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Capabilities() {
  const section = content.capabilities;
  return (
    <Section id="capabilities" title={section.title} sub={section.sub}>
      <div className={styles.ruled}>
        {section.items.map((item, index) => (
          <article className={`${styles.row} ${styles.capability} rv`} key={item.title} style={stagger(index + 2)}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

const contactLinks = [
  { label: "Email", href: contacts.email, external: false },
  { label: "WhatsApp", href: contacts.whatsapp, external: true },
  { label: "GitHub", href: contacts.github, external: true },
  { label: "X / Twitter", href: contacts.twitter, external: true },
  { label: "Instagram", href: contacts.instagram, external: true },
  { label: "CV", href: site.cvHref, external: true },
] as const;

function Contact() {
  return (
    <Section id="contact" title={uiCopy.contact} sub={uiCopy.idea}>
      <h3 className={`${styles.contactLead} font-serif rv`} style={stagger(2)}>
        {uiCopy.connect}
      </h3>
      <ul className={`${styles.contactLinks} rv`} style={stagger(3)} aria-label={uiCopy.social}>
        {contactLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href} {...(link.external ? externalProps : {})}>
              <span>{link.label}</span>
              <ArrowIcon />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Portfolio() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <Profile />

      <main id="main-content" tabIndex={-1} className={styles.main}>
        <Section
          id="projects"
          title={content.projects.title}
          sub={content.projects.sub}
          delay={360}
        >
          <ProjectCards projects={content.projects.items} />
        </Section>

        <Section id="experience" title={content.experience.title} sub={content.experience.sub}>
          <Timeline entries={content.experience.entries} />
        </Section>

        <Contributions />

        <TechnicalStack />

        <Capabilities />

        <Section id="education" title={content.education.title} sub={content.education.sub}>
          <Timeline entries={content.education.entries} />
        </Section>

        <Contact />
      </main>

      <PortfolioFooter />
    </div>
  );
}
