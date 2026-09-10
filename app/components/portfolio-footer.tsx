import { content, site, uiCopy, type Language } from "@/lib/content";
import { LocalTime } from "./local-time";
import styles from "../page.module.css";

export function PortfolioFooter({ language }: { language: Language }) {
  const copy = content[language].footer;
  const ui = uiCopy[language];

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.footerMeta}>
        <div>
          <p>{copy.creditPrefix} <strong>{copy.creditName}</strong></p>
          <p>{copy.copyright}</p>
        </div>
        <div className={styles.footerLocation}>
          <p>{site.location}</p>
          <p><span className="sr-only">{ui.localTime}: </span><LocalTime /> WIB</p>
        </div>
      </div>
    </footer>
  );
}
