import styles from "./page.module.css";
import { LocalTime } from "./components/local-time";
import {
  contacts,
  contributions,
  education,
  experience,
  hero,
  outro,
  projects,
  site,
  stack,
} from "@/lib/content";

const nav = [
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Kontribusi", href: "#kontribusi" },
  { label: "Proyek", href: "#proyek" },
  { label: "Kontak", href: "#kontak" },
];

type ListSection = {
  title: string;
  note: string;
  items: {
    org: string;
    role: string;
    period: string;
    href?: string;
  }[];
};

function Rows({ id, section }: { id: string; section: ListSection }) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.sectionHead}>
        <h2 className={styles.sectionTitle}>{section.title}</h2>
        <p className={styles.sectionNote}>{section.note}</p>
      </div>

      <ul className={styles.rows}>
        {section.items.map((item) => {
          const body = (
            <>
              <span className={styles.rowMain}>
                <span className={styles.rowOrg}>{item.org}</span>
                <span className={styles.rowRole}>{item.role}</span>
              </span>
              <span className={styles.rowPeriod}>{item.period}</span>
              {item.href && (
                <span className={styles.rowArrow} aria-hidden>
                  &#8599;
                </span>
              )}
            </>
          );

          return (
            <li key={`${item.org}-${item.period}`}>
              {item.href ? (
                <a
                  className={`${styles.row} ${styles.rowLink}`}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {body}
                </a>
              ) : (
                <div className={styles.row}>{body}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default function Home() {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <a href="#top" className={styles.wordmark}>
          {site.wordmark}
          <span>{site.domain}</span>
        </a>
        <nav className={styles.nav} aria-label="Bagian halaman">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        {/* -------------------------------------------------- hero */}
        <section className={styles.hero}>
          <p className={styles.eyebrow}>
            <span>{hero.eyebrow}</span>
            <span className={styles.dot} aria-hidden />
            <span>{site.year}</span>
          </p>

          <h1 className={styles.headline}>
            {hero.headline.map((line, lineIndex) => (
              <span key={lineIndex} className={styles.line}>
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

          <p className={styles.introLinks}>
            Colek saya di{" "}
            <a href={contacts.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            ,{" "}
            <a href={contacts.x} target="_blank" rel="noreferrer">
              X
            </a>
            ,{" "}
            <a href={contacts.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            , atau <a href={contacts.email}>email</a>. Semua repo ada di{" "}
            <a href={contacts.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            , dan CV-nya{" "}
            <a href={contacts.cv} target="_blank" rel="noreferrer">
              di sini
            </a>
            .
          </p>

          <ul className={styles.facts}>
            <li>{site.role}</li>
            <li>
              {site.city} · <LocalTime />
            </li>
          </ul>
        </section>

        {/* -------------------------------------------------- stack */}
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Stack</h2>
            <p className={styles.sectionNote}>Yang biasa saya pakai.</p>
          </div>

          <ul className={styles.stack}>
            {stack.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </section>

        <Rows id="pengalaman" section={experience} />
        <Rows id="pendidikan" section={education} />
        <Rows id="kontribusi" section={contributions} />

        {/* -------------------------------------------------- proyek */}
        <section id="proyek" className={styles.section}>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>{projects.title}</h2>
            <p className={styles.sectionNote}>{projects.note}</p>
          </div>

          <ul className={styles.projects}>
            {projects.items.map((project) => (
              <li key={project.name}>
                <a
                  className={styles.project}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={styles.projectHead}>
                    <span className={styles.projectName}>{project.name}</span>
                    {project.live && (
                      <span className={styles.live}>
                        <span className={styles.pulse} aria-hidden />
                        live
                      </span>
                    )}
                  </span>
                  <span className={styles.projectBlurb}>{project.blurb}</span>
                  <span className={styles.projectLink}>
                    {project.label}
                    <span aria-hidden> &#8599;</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* -------------------------------------------------- kontak */}
        <section id="kontak" className={styles.outro}>
          <h2 className={styles.outroTitle}>
            Ada yang mau <em>digarap bareng?</em>
          </h2>
          <p className={styles.outroNote}>{outro.note}</p>

          <ul className={styles.socials}>
            <li>
              <a href={contacts.email}>
                <span className={styles.socialLabel}>Email</span>
                <span className={styles.socialValue}>Kirim email</span>
              </a>
            </li>
            <li>
              <a href={contacts.whatsapp} target="_blank" rel="noreferrer">
                <span className={styles.socialLabel}>WhatsApp</span>
                <span className={styles.socialValue}>Chat</span>
              </a>
            </li>
            <li>
              <a href={contacts.instagram} target="_blank" rel="noreferrer">
                <span className={styles.socialLabel}>Instagram</span>
                <span className={styles.socialValue}>Follow</span>
              </a>
            </li>
            <li>
              <a href={contacts.github} target="_blank" rel="noreferrer">
                <span className={styles.socialLabel}>GitHub</span>
                <span className={styles.socialValue}>llianified</span>
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>
          Designed &amp; Developed by <strong>{site.shortName}</strong>
        </span>
        <span>
          &copy; {site.year} All rights reserved.
        </span>
      </footer>
    </div>
  );
}
