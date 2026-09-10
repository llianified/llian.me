import Link from "next/link";
import type {
  ProjectAction,
  ProjectCaseStudy as ProjectCaseStudyData,
} from "@/lib/project-case-studies";
import { ArrowIcon, BackIcon, GitHubIcon } from "@/app/components/icons";
import { ThemeToggle } from "@/app/components/theme-toggle";
import styles from "../project.module.css";

function ActionLink({ action }: { action: ProjectAction }) {
  return (
    <a className={styles.action} href={action.href} target="_blank" rel="noreferrer">
      {action.kind === "github" ? <GitHubIcon /> : <ArrowIcon />}
      {action.label}
    </a>
  );
}

function SectionIntro({ title }: { title: string }) {
  return <h2><span aria-hidden="true"># </span>{title}</h2>;
}

function FeatureList({ items }: { items: ProjectCaseStudyData["features"] }) {
  return (
    <div className={styles.featureList}>
      {items.map((item) => (
        <article className={styles.feature} key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  );
}

export function ProjectCaseStudy({ project }: { project: ProjectCaseStudyData }) {
  return (
    <div className={styles.shell}>
      <main id="main-content" tabIndex={-1} className={styles.page}>
        <nav className={styles.backNav} aria-label="Navigasi studi kasus">
          <Link href="/#projects"><BackIcon /> Balik ke proyek</Link>
          <ThemeToggle />
        </nav>

        <article>
          <header className={styles.header}>
            <p className={styles.eyebrow}>{project.category} · {project.eyebrow}</p>
            <h1 className="font-serif"><span aria-hidden="true"># </span>{project.title}</h1>
            <p className={styles.subtitle}>{project.subtitle}</p>
            <p className={styles.summary}>{project.summary}</p>
            <div className={styles.actions}>
              {project.actions.map((action) => <ActionLink action={action} key={action.href} />)}
            </div>
          </header>

          <section className={styles.section}>
            <SectionIntro title="Sekilas proyek" />
            <div className={styles.prose}>
              {project.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>

          {project.flow && (
            <section className={styles.section}>
              <SectionIntro title="Alur produk" />
              <ol className={styles.flow}>
                {project.flow.map((step, index) => (
                  <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>
                ))}
              </ol>
            </section>
          )}

          <section className={styles.section}>
            <SectionIntro title="Yang saya bangun" />
            <FeatureList items={project.features} />
          </section>

          <section className={styles.section}>
            <SectionIntro title="Pilihan di balik layar" />
            <FeatureList items={project.decisions} />
          </section>

          <section className={styles.section}>
            <SectionIntro title="Stack" />
            <ul className={styles.stack}>
              {project.stack.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          {project.note && (
            <aside className={styles.note}>
              <p className={styles.noteLabel}>{project.note.label}</p>
              <p>{project.note.body}</p>
            </aside>
          )}

          <footer className={styles.footer}>
            <Link href="/#projects"><BackIcon /> Balik ke proyek</Link>
            <div className={styles.actions}>
              {project.actions.map((action) => <ActionLink action={action} key={action.href} />)}
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
}
