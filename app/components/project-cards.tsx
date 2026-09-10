import Image from "next/image";
import Link from "next/link";
import { type Language, type Project } from "@/lib/content";
import { ArrowIcon, CodeIcon } from "./icons";
import styles from "../page.module.css";

const projectOrder = ["taksirin", "llnx", "llian.dev", "llian.me"];
const categories = {
  taksirin: { id: "Produk web", en: "Web product" },
  llnx: { id: "Otomasi · Python", en: "Automation · Python" },
  "llian.dev": { id: "Local-first tools", en: "Local-first tools" },
  "llian.me": { id: "Website personal", en: "Personal website" },
};

function ProjectActions({ project, language }: { project: Project; language: Language }) {
  return (
    <div className={styles.projectActions}>
      {project.detailHref && <Link href={project.detailHref} aria-label={`${language === "id" ? "Studi kasus" : "Case study"}: ${project.name}`}>{language === "id" ? "Studi kasus" : "Case study"}<ArrowIcon /></Link>}
      <a href={project.action.href} target="_blank" rel="noreferrer" aria-label={`${project.action.label} ${project.name}`}>{project.action.label}<ArrowIcon /></a>
    </div>
  );
}

export function ProjectCards({ projects, language }: { projects: readonly Project[]; language: Language }) {
  const ordered = [...projects].sort((a, b) => projectOrder.indexOf(a.name) - projectOrder.indexOf(b.name));
  return (
    <div className={styles.projects}>
      {ordered.map((project) => {
        const featured = project.name === "taksirin";
        const terminal = project.name === "llnx";
        const tools = project.name === "llian.dev";
        const category = categories[project.name as keyof typeof categories];
        return (
          <article key={project.name} className={[styles.card, styles.project, featured ? styles.featuredProject : terminal ? styles.terminalProject : styles.smallProject].join(" ")}>
            <div className={styles.projectMeta}><span>{category?.[language]}</span>{project.badge ? <span className={styles.badge}><span aria-hidden="true" />Live</span> : <CodeIcon />}</div>
            {featured ? (
              <>
                <div className={styles.featuredVisual}>
                  <span className={styles.featuredEyebrow}>{language === "id" ? "Dari penawaran hingga pesanan." : "From first quote to final order."}</span>
                  <p className="font-serif">Garapan<span>.</span></p>
                  <div className={styles.workflow} aria-label={language === "id" ? "Alur Garapan" : "Garapan workflow"}>
                    <span>{language === "id" ? "Penawaran" : "Quote"}</span><span aria-hidden="true">→</span><span>{language === "id" ? "Produksi" : "Production"}</span><span aria-hidden="true">→</span><span>{language === "id" ? "Pelacakan" : "Tracking"}</span>
                  </div>
                </div>
                <div className={styles.projectCopy}><h3><Link href={project.detailHref!}>taksirin <span>/ Garapan</span></Link></h3><p>{project.desc}</p><div className={styles.projectTags}><span>Next.js</span><span>TypeScript</span><span>PostgreSQL</span></div></div>
              </>
            ) : terminal ? (
              <div className={styles.terminalLayout}>
                <div className={styles.projectCopy}><h3><Link href={project.detailHref!}>{project.name}</Link></h3><p>{project.desc}</p></div>
                <Link href={project.detailHref!} className={styles.terminalPreview} tabIndex={-1} aria-hidden="true"><Image src="/projects/llnx/tui-overview.png" alt="" width={1800} height={1187} sizes="(max-width: 600px) 300px, 250px" unoptimized /></Link>
              </div>
            ) : (
              <>
                {tools ? <Link href={project.detailHref!} className={styles.toolsPreview} tabIndex={-1} aria-hidden="true"><Image src="/projects/llian-dev/overview.png" alt="" width={1200} height={630} sizes="(max-width: 600px) 340px, 260px" unoptimized /></Link> : <div className={styles.personalPreview} aria-hidden="true"><span className="font-serif">llian.me</span><span>{language === "id" ? "Ruang kecil saya di internet." : "My little corner of the internet."}</span></div>}
                <div className={styles.projectCopy}><h3>{project.detailHref ? <Link href={project.detailHref}>{project.name}</Link> : project.name}</h3><p>{project.desc}</p></div>
              </>
            )}
            <ProjectActions project={project} language={language} />
          </article>
        );
      })}
    </div>
  );
}
