import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import type {
  ProjectAction,
  ProjectCaseStudy as ProjectCaseStudyData,
} from "@/lib/project-case-studies";
import { ArrowIcon, BackIcon, GitHubIcon } from "@/app/components/icons";
import { Reveal } from "@/app/components/reveal";
import { ThemeToggle } from "@/app/components/theme-toggle";
import styles from "../project.module.css";

function stagger(index: number): CSSProperties {
  return { "--i": index } as CSSProperties;
}

function ActionLink({ action }: { action: ProjectAction }) {
  return (
    <a className={styles.action} href={action.href} target="_blank" rel="noreferrer">
      {action.kind === "github" ? <GitHubIcon /> : <ArrowIcon />}
      {action.label}
    </a>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Reveal as="section" className={styles.section}>
      <h2 className="rv" style={stagger(0)}>
        <span aria-hidden="true"># </span>
        {title}
      </h2>
      {children}
    </Reveal>
  );
}

function FeatureList({ items }: { items: ProjectCaseStudyData["features"] }) {
  return (
    <div className={styles.featureList}>
      {items.map((item, index) => (
        <article className={`${styles.feature} rv`} key={item.title} style={stagger(index + 1)}>
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
        <nav className={`${styles.backNav} rv-load`} style={stagger(0)} aria-label="Case study navigation">
          <Link href="/#projects"><BackIcon /> Back to projects</Link>
          <ThemeToggle />
        </nav>

        <article>
          <header className={styles.header}>
            <p className={`${styles.eyebrow} rv-load`} style={stagger(1)}>
              {project.category} · {project.eyebrow}
            </p>
            <h1 className="font-serif rv-load" style={stagger(2)}>
              <span aria-hidden="true"># </span>{project.title}
            </h1>
            <p className={`${styles.subtitle} rv-load`} style={stagger(3)}>{project.subtitle}</p>
            <p className={`${styles.summary} rv-load`} style={stagger(4)}>{project.summary}</p>
            <div className={`${styles.actions} rv-load`} style={stagger(5)}>
              {project.actions.map((action) => <ActionLink action={action} key={action.href} />)}
            </div>
          </header>

          <Section title="Overview">
            <div className={`${styles.prose} rv`} style={stagger(1)}>
              {project.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </Section>

          {project.flow && (
            <Section title="How it works">
              <ol className={styles.flow}>
                {project.flow.map((step, index) => (
                  <li key={step} className="rv" style={stagger(index + 1)}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
            </Section>
          )}

          <Section title="What I built">
            <FeatureList items={project.features} />
          </Section>

          <Section title="Behind the build">
            <FeatureList items={project.decisions} />
          </Section>

          <Section title="Stack">
            <ul className={`${styles.stack} rv`} style={stagger(1)}>
              {project.stack.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </Section>

          {project.note && (
            <Reveal as="aside" className={styles.note}>
              <div className="rv" style={stagger(0)}>
                <p className={styles.noteLabel}>{project.note.label}</p>
                <p>{project.note.body}</p>
              </div>
            </Reveal>
          )}

          <Reveal as="footer" className={styles.footer}>
            <Link href="/#projects" className="rv" style={stagger(0)}><BackIcon /> Back to projects</Link>
            <div className={`${styles.actions} rv`} style={stagger(1)}>
              {project.actions.map((action) => <ActionLink action={action} key={action.href} />)}
            </div>
          </Reveal>
        </article>
      </main>
    </div>
  );
}
