import Image from "next/image";
import Link from "next/link";
import type {
  ProjectAction,
  ProjectCaseStudy as ProjectCaseStudyData,
} from "@/lib/project-case-studies";
import { SocialRail } from "@/app/components/portfolio-footer";
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
          sizes={image.portrait ? "(max-width: 440px) calc(100vw - 36px), 400px" : "(max-width: 760px) calc(100vw - 36px), 700px"}
          alt={image.alt}
          loading={hero ? "eager" : "lazy"}
          unoptimized
        />
      </div>
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
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
      <SocialRail />
      <div className={styles.articleTheme}><ThemeToggle /></div>
      <main id="main-content" tabIndex={-1} className={styles.page}>
        <nav className={styles.backNav} aria-label="Navigasi studi kasus">
          <Link href="/#projects"><BackIcon /> Kembali ke proyek</Link>
          <Link href="/" className={styles.wordmark}>llian.me</Link>
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

          {project.hero && <ProjectFigure image={project.hero} hero />}

          <section className={styles.section}>
            <SectionIntro title="Overview" />
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
            <SectionIntro title="Yang dibangun" />
            <FeatureList items={project.features} />
          </section>

          <section className={styles.section}>
            <SectionIntro title="Keputusan teknis" />
            <FeatureList items={project.decisions} />
          </section>

          <section className={styles.section}>
            <SectionIntro title="Stack" />
            <ul className={styles.stack}>
              {project.stack.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          {project.gallery && (
            <section className={styles.section}>
              <SectionIntro title="Gallery" />
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
            <Link href="/#projects"><BackIcon /> Kembali ke proyek</Link>
            <div className={styles.actions}>
              {project.actions.map((action) => <ActionLink action={action} key={action.href} />)}
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
}
