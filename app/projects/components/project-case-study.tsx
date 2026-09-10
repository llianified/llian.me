import Link from "next/link";
import type {
  ProjectAction,
  ProjectCaseStudy as ProjectCaseStudyData,
  ProjectFeature,
  ProjectImage,
} from "@/lib/project-case-studies";
import { ArrowIcon, BackIcon, GitHubIcon } from "@/app/components/icons";
import { PortfolioFooter } from "@/app/components/portfolio-footer";
import { stagger } from "@/app/components/motion";
import { Reveal } from "@/app/components/reveal";
import { Section } from "@/app/components/section";
import { SiteHeader } from "@/app/components/site-header";
import page from "@/app/page.module.css";
import styles from "../project.module.css";

const back = { href: "/#projects", label: "Back to projects" } as const;

function ActionLink({ action }: { action: ProjectAction }) {
  return (
    <a className={styles.action} href={action.href} target="_blank" rel="noreferrer">
      <span>{action.label}</span>
      {action.kind === "github" ? <GitHubIcon /> : <ArrowIcon />}
    </a>
  );
}

function Figure({
  image,
  className,
  priority,
  index = 0,
}: {
  image: ProjectImage;
  className?: string;
  priority?: boolean;
  index?: number;
}) {
  return (
    <figure
      className={`${styles.figure} ${image.portrait ? styles.portrait : ""} ${className ?? ""}`}
      style={stagger(index)}
    >
      <div className={styles.figureFrame}>
        <img
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          decoding="async"
        />
      </div>
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}

function FeatureRows({ items }: { items: readonly ProjectFeature[] }) {
  return (
    <div className={page.ruled}>
      {items.map((item, index) => (
        <article className={`${page.row} ${styles.feature} rv`} key={item.title} style={stagger(index + 1)}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  );
}

function Flow({ steps }: { steps: readonly string[] }) {
  return (
    <ol className={`${page.ruled} ${styles.flow}`}>
      {steps.map((step, index) => (
        <li key={step} className={`${page.row} rv`} style={stagger(index + 1)}>
          <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <p>{step}</p>
        </li>
      ))}
    </ol>
  );
}

export function ProjectCaseStudy({ project }: { project: ProjectCaseStudyData }) {
  const hasGallery = Boolean(project.gallery && project.gallery.length > 0);

  return (
    <div className={page.page}>
      <SiteHeader back={back} />

      <main id="main-content" tabIndex={-1} className={page.main}>
        <article>
          <header className={styles.hero} aria-labelledby="case-study-title">
            <p className={`${styles.eyebrow} rv-load`} style={stagger(1)}>
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.eyebrow}</span>
            </p>
            <h1 id="case-study-title" className={`${styles.title} font-serif rv-load`} style={stagger(2)}>
              {project.title}
            </h1>

            <div className={styles.heroGrid}>
              <div className={styles.heroLead}>
                <p className={`${styles.subtitle} rv-load`} style={stagger(3)}>{project.subtitle}</p>
                <p className={`${styles.summary} rv-load`} style={stagger(4)}>{project.summary}</p>
              </div>
              <div className={`${styles.heroAside} rv-load`} style={stagger(5)}>
                <p className={styles.heroAsideLabel}>Links</p>
                <div className={styles.actions}>
                  {project.actions.map((action) => <ActionLink action={action} key={action.href} />)}
                </div>
              </div>
            </div>
          </header>

          {project.hero && (
            <div className={`${styles.heroFigure} ${page.bleedTop}`}>
              <Figure image={project.hero} className="rv-load" priority index={6} />
            </div>
          )}

          <Section id="overview" title="Overview" delay={project.hero ? 0 : 320}>
            <div className={`${styles.prose} rv`} style={stagger(1)}>
              {project.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </Section>

          {project.flow && (
            <Section id="how-it-works" title="How it works" sub="The path a single request takes through the system.">
              <Flow steps={project.flow} />
            </Section>
          )}

          <Section id="what-i-built" title="What I built" sub="The capabilities that shipped.">
            <FeatureRows items={project.features} />
          </Section>

          <Section id="behind-the-build" title="Behind the build" sub="Decisions that shaped the implementation.">
            <FeatureRows items={project.decisions} />
          </Section>

          {hasGallery && (
            <Section id="screens" title="Screens">
              <div className={styles.gallery}>
                {project.gallery!.map((image, index) => (
                  <Figure image={image} className="rv" index={index + 1} key={image.src} />
                ))}
              </div>
            </Section>
          )}

          <Section id="stack" title="Stack">
            <ul className={`${styles.stack} rv`} style={stagger(1)} aria-label="Technologies used">
              {project.stack.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </Section>

          {project.note && (
            <Section id="note" title={project.note.label}>
              <p className={`${styles.note} rv`} style={stagger(1)}>{project.note.body}</p>
            </Section>
          )}

          <Reveal as="footer" className={`${styles.pageFooter} ${page.bleedTop}`}>
            <Link href={back.href} className={`${styles.backLink} rv`} style={stagger(0)}>
              <BackIcon />
              <span>{back.label}</span>
            </Link>
            <div className={`${styles.actions} rv`} style={stagger(1)}>
              {project.actions.map((action) => <ActionLink action={action} key={action.href} />)}
            </div>
          </Reveal>
        </article>
      </main>

      <PortfolioFooter />
    </div>
  );
}
