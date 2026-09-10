import { content, site, uiCopy } from "@/lib/content";
import { LocalTime } from "./local-time";
import { stagger } from "./motion";
import { Reveal } from "./reveal";
import styles from "../page.module.css";

export function PortfolioFooter() {
  return (
    <Reveal as="footer" id="site-footer" className={`${styles.footer} ${styles.bleedTop}`}>
      <div className={styles.footerMeta}>
        <div className="rv" style={stagger(0)}>
          <p>{content.footer.creditPrefix} <strong>{content.footer.creditName}</strong></p>
          <p>{content.footer.copyright}</p>
        </div>
        <div className={`${styles.footerLocation} rv`} style={stagger(1)}>
          <p>{site.location}</p>
          <p><span className="sr-only">{uiCopy.localTime}: </span><LocalTime /> UTC+7</p>
        </div>
      </div>
    </Reveal>
  );
}
