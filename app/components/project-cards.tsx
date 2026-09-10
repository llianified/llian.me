import Image from "next/image";
import Link from "next/link";
import { uiCopy, type Language, type Project } from "@/lib/content";
import { ArrowIcon } from "./icons";
import styles from "../page.module.css";

type Presentation = {
  order: number;
  category: Record<Language, string>;
  preview?: { src: string; width: number; height: number };
};

const presentations: Record<string, Presentation | undefined> = {
  taksirin: {
    order: 0,
    category: { id: "Produk web", en: "Web product" },
  },
  llnx: {
    order: 1,
    category: { id: "Otomasi · Python", en: "Automation · Python" },
    preview: { src: "/projects/llnx/tui-overview.png", width: 1800, height: 1187 },
  },
  "llian.dev": {
    order: 2,
    category: { id: "Local-first tools", en: "Local-first tools" },
    preview: { src: "/projects/llian-dev/overview.png", width: 1200, height: 630 },
  },
  "llian.me": {
    order: 3,
    category: { id: "Website personal", en: "Personal website" },
  },
};

type ProjectProps = { project: Project; language: Language };

function ProjectActions({ project, language }: ProjectProps) {
  const label = uiCopy[language].caseStudy;
  return (
    <div className={styles.projectActions}>
      {project.detailHref && (
        <Link href={project.detailHref} aria-label={`${label}: ${project.name}`}>
          {label}<ArrowIcon />
        </Link>
      )}
      <a
        href={project.action.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${project.action.label} ${project.name}`}
      >
        {project.action.label}<ArrowIcon />
      </a>
    </div>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  const preview = presentations[project.name]?.preview;
  return (
    <div
      className={`${styles.projectPreview} ${project.name === "taksirin" ? styles.garapanPreview : ""}`}
      aria-hidden="true"
    >
      {preview ? (
        <Image {...preview} alt="" unoptimized sizes="(min-width: 681px) 152px, 88px" />
      ) : (
        <span className="font-sans">{project.name === "taksirin" ? "Garapan." : project.name}</span>
      )}
    </div>
  );
}

function ProjectRow({ project, language }: ProjectProps) {
  const presentation = presentations[project.name];
  const featured = project.name === "taksirin";
  const ui = uiCopy[language];
  const title = <>{project.name}{featured && <span> / Garapan</span>}</>;

  return (
    <article className={styles.project}>
      <ProjectPreview project={project} />
      <header className={styles.projectHeading}>
        <div className={styles.projectMeta}>
          <span>{presentation?.category[language] ?? project.name}</span>
          {project.badge && <span className={styles.badge}><span aria-hidden="true" />Live</span>}
        </div>
        <h3>
          {project.detailHref ? <Link href={project.detailHref}>{title}</Link> : title}
        </h3>
      </header>
      <div className={styles.projectBody}>
        <p className={styles.projectDescription}>{project.desc}</p>
        {featured && (
          <div className={styles.projectDetails}>
            <ol className={styles.workflow} aria-label={ui.workflow}>
              {[ui.quote, ui.production, ui.tracking].map((step) => <li key={step}>{step}</li>)}
            </ol>
            <ul className={styles.projectTags}>
              {["Next.js", "TypeScript", "PostgreSQL"].map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </div>
        )}
        <ProjectActions project={project} language={language} />
      </div>
    </article>
  );
}

export function ProjectCards({ projects, language }: { projects: readonly Project[]; language: Language }) {
  const ordered = [...projects].sort(
    (a, b) => (presentations[a.name]?.order ?? Number.MAX_SAFE_INTEGER) -
      (presentations[b.name]?.order ?? Number.MAX_SAFE_INTEGER),
  );
  return (
    <div className={styles.projects}>
      {ordered.map((project) => <ProjectRow key={project.name} project={project} language={language} />)}
    </div>
  );
}
