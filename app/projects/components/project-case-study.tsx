import Image from "next/image";
import Link from "next/link";
import type { ProjectAction, ProjectCaseStudy as ProjectCaseStudyData } from "@/lib/project-case-studies";
import { ArrowIcon, BackIcon, GitHubIcon } from "@/app/components/icons";
import styles from "../project.module.css";

function ActionLink({ action }: { action: ProjectAction }) {
  return (
    <a
      className={styles.action}
      href={action.href}
      target="_blank"
      rel="noreferrer"
    >
      {action.label}
      {action.kind === "github" ? <GitHubIcon /> : <ArrowIcon />}
    </a>
  );
}

function SectionIntro({ number, title }: { number: string; title: string }) {
  return (
    <div className={styles.sectionIntro}>
      <span>{number}</span>
      <h2>{title}</h2>
    </div>
  );
}

function ProjectFigure({
  image,
  hero = false,
}: {
  image: NonNullable<ProjectCaseStudyData["hero"]>;
  hero?: boolean;
}) {
  return (
    <figure className={`${styles.figure} ${hero ? styles.heroFigure : ""}`}>
      <div className={`${styles.imageFrame} ${image.portrait ? styles.portrait : ""}`}>
        <Image
          className={styles.image}
          src={image.src}
          width={image.width}
          height={image.height}
          sizes={hero ? "(max-width: 1120px) 100vw, 1056px" : "(max-width: 720px) 100vw, 50vw"}
          alt={image.alt}
          unoptimized
        />
      </div>
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}

function FeatureGrid({ items }: { items: ProjectCaseStudyData["features"] }) {
  return (
    <div className={styles.featureGrid}>
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
    <main className={styles.page}>
      <nav className={styles.backNav} aria-label="Case study navigation">
        <Link href="/#projects"><BackIcon />Kembali ke proyek</Link>
      </nav>

      <header className={styles.header}>
        <p className={styles.eyebrow}>{project.eyebrow}</p>
        <h1>{project.title}</h1>
        <p className={styles.subtitle}>{project.subtitle}</p>
        <p className={styles.summary}>{project.summary}</p>
        <div className={styles.actions}>
          {project.actions.map((action) => <ActionLink action={action} key={action.href} />)}
        </div>
      </header>

      {project.hero && <ProjectFigure image={project.hero} hero />}

      <section className={styles.section}>
        <SectionIntro number="01" title="Overview" />
        <div className={styles.prose}>
          {project.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      {project.flow && (
        <section className={styles.section}>
          <SectionIntro number="02" title="Alur produk" />
          <ol className={styles.flow}>
            {project.flow.map((step, index) => (
              <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>
            ))}
          </ol>
        </section>
      )}

      <section className={styles.section}>
        <SectionIntro number={project.flow ? "03" : "02"} title="Yang dibangun" />
        <FeatureGrid items={project.features} />
      </section>

      <section className={styles.section}>
        <SectionIntro number={project.flow ? "04" : "03"} title="Keputusan teknis" />
        <FeatureGrid items={project.decisions} />
      </section>

      <section className={styles.section}>
        <SectionIntro number={project.flow ? "05" : "04"} title="Stack" />
        <ul className={styles.stack}>
          {project.stack.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      {project.gallery && (
        <section className={styles.section}>
          <SectionIntro number={project.flow ? "06" : "05"} title="Gallery" />
          <div className={styles.gallery}>
            {project.gallery.map((image) => <ProjectFigure image={image} key={image.src} />)}
          </div>
        </section>
      )}

      {project.note && (
        <aside className={styles.note}>
          <p className={styles.noteLabel}>{project.note.label}</p>
          <p>{project.note.body}</p>
        </aside>
      )}

      <footer className={styles.footer}>
        <Link href="/#projects"><BackIcon />Kembali ke proyek</Link>
        <div className={styles.actions}>
          {project.actions.map((action) => <ActionLink action={action} key={action.href} />)}
        </div>
      </footer>
    </main>
  );
}