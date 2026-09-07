import styles from "./page.module.css";
import {
  about,
  experience,
  hero,
  projects,
  site,
  socials,
  writing,
} from "@/lib/content";

const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <a href="#top" className={styles.wordmark}>
          {site.wordmark}
          <span>{site.domain}</span>
        </a>
        <nav className={styles.nav} aria-label="Sections">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        {/* ---------------------------------------------- hero */}
        <section className={styles.hero}>
          <p className={styles.eyebrow}>
            <span>{hero.label}</span>
            <span className={styles.dot} aria-hidden />
            <span>{site.year}</span>
          </p>

          <h1 className={styles.headline}>
            {hero.headline.map((line) => (
              <span key={line} className={styles.line}>
                {line.split(" ").map((word, i) =>
                  word === hero.emphasis ? (
                    <em key={`${word}-${i}`}>{word} </em>
                  ) : (
                    <span key={`${word}-${i}`}>{word} </span>
                  ),
                )}
              </span>
            ))}
          </h1>

          <p className={styles.intro}>{hero.intro}</p>

          <ul className={styles.facts}>
            <li>{site.role}</li>
            <li>
              {site.location} · {site.timezone}
            </li>
            {site.available && (
              <li className={styles.available}>
                <span className={styles.pulse} aria-hidden />
                {site.availability}
              </li>
            )}
          </ul>
        </section>

        {/* ---------------------------------------------- work */}
        <section id="work" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.label}>Selected work</span>
            <span className={styles.count}>{projects.length}</span>
          </h2>

          <ol className={styles.projects}>
            {projects.map((project, i) => (
              <li key={project.title}>
                <a className={styles.project} href={project.href}>
                  <span className={styles.index}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.projectBody}>
                    <span className={styles.projectTitle}>{project.title}</span>
                    <span className={styles.projectBlurb}>{project.blurb}</span>
                  </span>
                  <span className={styles.projectMeta}>
                    <span>{project.role}</span>
                    <span className={styles.year}>{project.year}</span>
                  </span>
                  <span className={styles.arrow} aria-hidden>
                    &#8599;
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        {/* ---------------------------------------------- about */}
        <section id="about" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.label}>About</span>
          </h2>

          <div className={styles.aboutGrid}>
            <div className={styles.prose}>
              {about.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <dl className={styles.experience}>
              {experience.map((item) => (
                <div key={item.org} className={styles.experienceRow}>
                  <dt>
                    <span className={styles.experienceRole}>{item.role}</span>
                    <span className={styles.experienceOrg}>{item.org}</span>
                  </dt>
                  <dd>{item.period}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ---------------------------------------------- writing */}
        <section id="writing" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.label}>Writing</span>
          </h2>

          <ul className={styles.writing}>
            {writing.map((entry) => (
              <li key={entry.title}>
                <a href={entry.href}>
                  <span className={styles.entryTitle}>{entry.title}</span>
                  <span className={styles.rule} aria-hidden />
                  <span className={styles.entryDate}>{entry.date}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------------------------------------------- contact */}
        <section id="contact" className={styles.contact}>
          <h2 className={styles.contactTitle}>
            Have something <em>worth building?</em>
          </h2>
          <a className={styles.emailLink} href={`mailto:${site.email}`}>
            {site.email}
          </a>

          <ul className={styles.socials}>
            {socials.map((social) => (
              <li key={social.label}>
                <a href={social.href}>
                  <span className={styles.socialLabel}>{social.label}</span>
                  <span className={styles.socialHandle}>{social.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>
          &copy; {site.year} {site.name}
        </span>
        <span>Placeholder content</span>
      </footer>
    </div>
  );
}
