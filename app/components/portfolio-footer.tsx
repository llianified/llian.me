import { content, site, uiCopy } from "@/lib/content";
import { LocalTime } from "./local-time";
import styles from "../page.module.css";

export function PortfolioFooter() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.footerMeta}>
        <div>
          <p>{content.footer.creditPrefix} <strong>{content.footer.creditName}</strong></p>
          <p>{content.footer.copyright}</p>
        </div>
        <div className={styles.footerLocation}>
          <p>{site.location}</p>
          <p><span className="sr-only">{uiCopy.localTime}: </span><LocalTime /> UTC+7</p>
        </div>
      </div>
    </footer>
  );
}
