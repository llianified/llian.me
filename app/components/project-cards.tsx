import Image from "next/image";
import Link from "next/link";
import { uiCopy, type Language, type Project } from "@/lib/content";
import { ArrowIcon, CodeIcon } from "./icons";
import styles from "../page.module.css";

type Presentation = {
  order: number;
  variant: "featured" | "terminal" | "small";
  category: Record<Language, string>;
  preview?: { src: string; width: number; height: number };
};

const presentations: Record<string, Presentation | undefined> = {
  taksirin: {
    order: 0,
    variant: "featured",
    category: { id: "Produk web", en: "Web product" },
  },
  llnx: {
    order: 1,
    variant: "terminal",
    category: { id: "Otomasi · Python", en: "Automation · Python" },
    preview: {
      src: "/projects/llnx/tui-overview.png",
      width: 1800,
      height: 1187,
    },
  },
  "llian.dev": {
    order: 2,
    variant: "small",
    category: { id: "Local-first tools", en: "Local-first tools" },
  },
  "llian.me": {
    order: 3,
    variant: "small",
    category: { id: "Website personal", en: "Personal website" },
  },
};

const variantClasses = {
  featured: styles.featuredProject,
  terminal: styles.terminalProject,
  small: styles.smallProject,
};

type CardProps = { project: Project; language: Language };

function ProjectActions({ project, language }: CardProps) {
  const label = uiCopy[language].caseStudy;
  return (
    <div className={styles.projectActions}>
      {project.detailHref && (
        <Link
          href={project.detailHref}
          aria-label={`${label}: ${project.name}`}
        >
          {label}
          <ArrowIcon />
        </Link>
      )}
      <a
        href={project.action.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${project.action.label} ${project.name}`}
      >
        {project.action.label}
        <ArrowIcon />
      </a>
    </div>
  );
}

function ProjectCopy({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const title = (
    <>
      {project.name}
      {featured && <span> / Garapan</span>}
    </>
  );
  return (
    <div className={styles.projectCopy}>
      <h3>
        {project.detailHref ? (
          <Link href={project.detailHref}>{title}</Link>
        ) : (
          title
        )}
      </h3>
      <p>{project.desc}</p>
      {featured && (
        <ul className={styles.projectTags}>
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>PostgreSQL</li>
        </ul>
      )}
    </div>
  );
}

function ProjectPreview({
  project,
  presentation,
  language,
}: CardProps & { presentation?: Presentation }) {
  if (presentation?.preview) {
    const image = <Image {...presentation.preview} alt="" unoptimized />;
    const className =
      presentation.variant === "terminal"
        ? styles.terminalPreview
        : styles.toolsPreview;
    return project.detailHref ? (
      <Link
        href={project.detailHref}
        className={className}
        tabIndex={-1}
        aria-hidden="true"
      >
        {image}
      </Link>
    ) : (
      <div className={className} aria-hidden="true">
        {image}
      </div>
    );
  }

  return (
    <div className={styles.personalPreview} aria-hidden="true">
      <span className="font-serif">{project.name}</span>
      {(project.name === "llian.me" || project.name === "llian.dev") && (
        <span>
          {project.name === "llian.me"
            ? uiCopy[language].personalDescription
            : uiCopy[language].toolsDescription}
        </span>
      )}
    </div>
  );
}

function FeaturedVisual({ language }: { language: Language }) {
  const ui = uiCopy[language];
  return (
    <div className={styles.featuredVisual}>
      <span className={styles.featuredEyebrow}>{ui.featuredDescription}</span>
      <p className="font-serif">Garapan.</p>
      <ol className={styles.workflow} aria-label={ui.workflow}>
        {[ui.quote, ui.production, ui.tracking].map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

function ProjectCard({ project, language }: CardProps) {
  const presentation = presentations[project.name];
  const variant = presentation?.variant ?? "small";
  return (
    <article
      className={`${styles.card} ${styles.project} ${variantClasses[variant]}`}
    >
      <div className={styles.projectMeta}>
        <span>{presentation?.category[language] ?? project.name}</span>
        {project.badge ? (
          <span className={styles.badge}>
            <span aria-hidden="true" />
            Live
          </span>
        ) : (
          <CodeIcon />
        )}
      </div>
      {variant === "featured" ? (
        <>
          <FeaturedVisual language={language} />
          <ProjectCopy project={project} featured />
        </>
      ) : variant === "terminal" ? (
        <div className={styles.terminalLayout}>
          <ProjectCopy project={project} />
          <ProjectPreview
            project={project}
            presentation={presentation}
            language={language}
          />
        </div>
      ) : (
        <>
          <ProjectPreview
            project={project}
            presentation={presentation}
            language={language}
          />
          <ProjectCopy project={project} />
        </>
      )}
      <ProjectActions project={project} language={language} />
    </article>
  );
}

export function ProjectCards({
  projects,
  language,
}: {
  projects: readonly Project[];
  language: Language;
}) {
  const ordered = [...projects].sort(
    (a, b) =>
      (presentations[a.name]?.order ?? Number.MAX_SAFE_INTEGER) -
      (presentations[b.name]?.order ?? Number.MAX_SAFE_INTEGER),
  );
  return (
    <div className={styles.projects}>
      {ordered.map((project) => (
        <ProjectCard key={project.name} project={project} language={language} />
      ))}
    </div>
  );
}
