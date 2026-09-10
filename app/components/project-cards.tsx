import Link from "next/link";
import type { Project } from "@/lib/content";
import styles from "../page.module.css";
import { ArrowIcon } from "./icons";
import { stagger } from "./reveal";

const order = ["taksirin", "llnx", "llian.dev", "llian.me"] as const;

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className={styles.projectVisual}>
      {project.image ? (
        <img
          src={project.image.src}
          width={project.image.width}
          height={project.image.height}
          alt={project.image.alt}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <span className="font-serif" aria-hidden="true">{project.name}</span>
      )}
    </div>
  );
}

function ProjectPanel({ project }: { project: Project }) {
  const content = (
    <>
      <ProjectVisual project={project} />
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
        <div className={styles.projectFoot}>
          <ul className={styles.projectStack} aria-label="Built with">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <span className={styles.projectKind}>
            {project.detailHref ? "Case study" : project.action.label}
          </span>
        </div>
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
    (a, b) => order.indexOf(a.name as (typeof order)[number]) - order.indexOf(b.name as (typeof order)[number]),
  );

  return (
    <div className={styles.ruled}>
      {ordered.map((project, index) => (
        <article className={`${styles.row} rv`} key={project.name} style={stagger(index + 1)}>
          <ProjectPanel project={project} />
        </article>
      ))}
    </div>
  );
}
