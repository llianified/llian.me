import Image from "next/image";
import Link from "next/link";
import { uiCopy, type Language, type Project } from "@/lib/content";
import { ArrowIcon } from "./icons";
import styles from "../page.module.css";

const presentations = {
  taksirin: {
    order: 0,
    category: { id: "Produk web", en: "Web product" },
    display: "Garapan.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  llnx: {
    order: 1,
    category: { id: "Otomasi Python", en: "Python automation" },
    image: "/projects/llnx/tui-overview.png",
    tags: ["Python", "Textual", "Jupiter"],
  },
  "llian.dev": {
    order: 2,
    category: { id: "Peralatan local-first", en: "Local-first tools" },
    image: "/projects/llian-dev/overview.png",
    tags: ["Next.js", "TypeScript", "Cloudflare"],
  },
  "llian.me": {
    order: 3,
    category: { id: "Website personal", en: "Personal website" },
    display: "llian.me",
    tags: ["Next.js", "React", "TypeScript"],
  },
} as const;

type PresentationKey = keyof typeof presentations;

function ProjectCard({ project, language }: { project: Project; language: Language }) {
  const presentation = presentations[project.name as PresentationKey];
  const ui = uiCopy[language];

  return (
    <article className={styles.projectCard}>
      <div className={styles.projectPanel}>
        <div className={styles.projectVisual}>
          {"image" in presentation ? (
            <Image
              src={presentation.image}
              alt=""
              fill
              sizes="(max-width: 720px) calc(100vw - 40px), 330px"
              unoptimized
            />
          ) : (
            <span className="font-serif">{presentation.display}</span>
          )}
        </div>
        <div className={styles.projectCopy}>
          <div className={styles.projectNameLine}>
            <h3>{project.detailHref ? <Link href={project.detailHref}>{project.name}</Link> : project.name}</h3>
            {project.badge && <span className={styles.liveBadge}><i aria-hidden="true" />Live</span>}
          </div>
          <p>{project.desc}</p>
        </div>
      </div>
      <p className={styles.projectCategory}>{presentation.category[language]}</p>
      <ul className={styles.projectTags} aria-label={ui.technologies}>
        {presentation.tags.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
      <div className={styles.projectActions}>
        {project.detailHref && (
          <Link href={project.detailHref}>
            <ArrowIcon /> {ui.caseStudy.toLowerCase()}
          </Link>
        )}
        <a href={project.action.href} target="_blank" rel="noreferrer">
          <ArrowIcon /> {project.action.label.toLowerCase()}
        </a>
      </div>
    </article>
  );
}

export function ProjectCards({ projects, language }: { projects: readonly Project[]; language: Language }) {
  const ordered = [...projects].sort(
    (a, b) => presentations[a.name as PresentationKey].order - presentations[b.name as PresentationKey].order,
  );

  return (
    <div className={styles.projects}>
      {ordered.map((project) => <ProjectCard key={project.name} project={project} language={language} />)}
    </div>
  );
}
