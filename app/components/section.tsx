import type { ReactNode } from "react";
import styles from "../page.module.css";
import { Reveal, stagger } from "./reveal";

export function Section({
  id,
  title,
  sub,
  delay,
  children,
}: {
  id: string;
  title: string;
  sub?: string;
  delay?: number;
  children: ReactNode;
}) {
  return (
    <Reveal
      as="section"
      id={id}
      className={`${styles.contentSection} ${styles.bleedTop}`}
      aria-labelledby={`${id}-title`}
      delay={delay}
    >
      <div className={styles.sectionHeader}>
        <h2 id={`${id}-title`} className={`${styles.sectionTitle} rv`} style={stagger(0)}>
          <span aria-hidden="true"># </span>
          {title}
        </h2>
        {sub && (
          <p className={`${styles.sectionSubtitle} rv`} style={stagger(1)}>
            {sub}
          </p>
        )}
      </div>
      <div className={styles.sectionBody}>{children}</div>
    </Reveal>
  );
}
