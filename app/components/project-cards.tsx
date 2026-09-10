import Link from "next/link";
import type { Project } from "@/lib/content";
import styles from "../page.module.css";
import { ArrowIcon } from "./icons";
import { stagger } from "./reveal";

const presentations = {
  taksirin: {
    order: 0,
    display: "taksirin",
  },
  llnx: {
    order: 1,
    display: "llnx",
  },
  "llian.dev": {
    order: 2,
    display: "llian.dev",
  },
  "llian.me": {
    order: 3,
    display: "llian.me",
  },
} as const;

type PresentationKey = keyof typeof presentations;

function ProjectPanel({ project }: { project: Project }) {
  const presentation = presentations[project.name as PresentationKey];

  const content = (
    <>
      <div className={styles.projectVisual}>
        <span className="font-serif">{presentation.display}</span>
      </div>
      <div className={styles.projectCopy}>
        <div className={styles.projectNameLine}>
          <h3>{project.name}</h3>
          <span className={styles.projectMeta}>
            {project.badge && (
              <span className={styles.liveBadge}>
                <i aria-hidden="true" />Live
              </span>
            )}
            <ArrowIcon className={styles.projectArrow} />
          </span>
        </div>
        <p>{project.desc}</p>
      </div>
    </>
  );

  if (project.detailHref) {
    return (
      <Link
        className={styles.projectPanel}
        href={project.detailHref}
        aria-label={`Open the ${project.name} case study`}
      >
        {content}
      </Link>
    );
  }

  return (
    <a
      className={styles.projectPanel}
      href={project.action.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Visit ${project.name}`}
    >
      {content}
    </a>
  );
}

export function ProjectCards({ projects }: { projects: readonly Project[] }) {
  const ordered = [...projects].sort(
    (a, b) =>
      presentations[a.name as PresentationKey].order -
      presentations[b.name as PresentationKey].order,
  );

  return (
    <div className={styles.projects}>
      {ordered.map((project, index) => (
        <article className={`${styles.projectCard} rv`} key={project.name} style={stagger(index + 1)}>
          <ProjectPanel project={project} />
        </article>
      ))}
    </div>
  );
}
