import Image from "next/image";
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

function SectionIntro({ title }: { title: string }) {
  return (
    <div className={styles.sectionIntro}>
      <h2 className="font-serif">{title}</h2>
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
      <div
        className={`${styles.imageFrame} ${image.portrait ? styles.portrait : ""}`}
      >
        <Image
          className={styles.image}
          src={image.src}
          width={image.width}
          height={image.height}
          sizes={
            hero
              ? "(max-width: 1008px) calc(100vw - 48px), 960px"
              : image.portrait
                ? "(max-width: 440px) calc(100vw - 40px), 400px"
                : "(max-width: 680px) calc(100vw - 40px), (max-width: 1008px) calc(50vw - 36px), 468px"
          }
          alt={image.alt}
          loading={hero ? "eager" : "lazy"}
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

export function ProjectCaseStudy({
  project,
}: {
  project: ProjectCaseStudyData;
}) {
  return (
    <main id="main-content" tabIndex={-1} className={styles.page}>
      <nav className={styles.backNav} aria-label="Navigasi studi kasus">
        <Link href="/#projects">
          <BackIcon />
          Kembali ke proyek
        </Link>
        <div className={styles.navControls}>
          <Link
            href="/"
            className={styles.wordmark}
            aria-label="llian.me — Beranda"
          >
            llian<span>.me</span>
          </Link>
          <ThemeToggle />
        </div>
      </nav>

      <header className={styles.header}>
        <p className={styles.eyebrow}>{project.eyebrow}</p>
        <h1 className="font-serif">{project.title}</h1>
        <p className={styles.subtitle}>{project.subtitle}</p>
        <p className={styles.summary}>{project.summary}</p>
        <div className={styles.actions}>
          {project.actions.map((action) => (
            <ActionLink action={action} key={action.href} />
          ))}
        </div>
      </header>

      {project.hero && <ProjectFigure image={project.hero} hero />}

      <section className={styles.section}>
        <SectionIntro title="Overview" />
        <div className={styles.prose}>
          {project.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      {project.flow && (
        <section className={styles.section}>
          <SectionIntro title="Alur produk" />
          <ol className={styles.flow}>
            {project.flow.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      <section className={styles.section}>
        <SectionIntro title="Yang dibangun" />
        <FeatureGrid items={project.features} />
      </section>

      <section className={styles.section}>
        <SectionIntro title="Keputusan teknis" />
        <FeatureGrid items={project.decisions} />
      </section>

      <section className={styles.section}>
        <SectionIntro title="Stack" />
        <ul className={styles.stack}>
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {project.gallery && (
        <section className={styles.section}>
          <SectionIntro title="Gallery" />
          <div className={styles.gallery}>
            {project.gallery.map((image) => (
              <ProjectFigure image={image} key={image.src} />
            ))}
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
        <Link href="/#projects">
          <BackIcon />
          Kembali ke proyek
        </Link>
        <div className={styles.actions}>
          {project.actions.map((action) => (
            <ActionLink action={action} key={action.href} />
          ))}
        </div>
      </footer>
    </main>
  );
}
