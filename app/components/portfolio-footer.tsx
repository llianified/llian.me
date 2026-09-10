import { contacts, content, type Language } from "@/lib/content";
import { ArrowIcon } from "./icons";
import { LocalTime } from "./local-time";
import styles from "../page.module.css";

const socialLinks = [
  { label: "GitHub", href: contacts.github },
  { label: "Instagram", href: contacts.instagram },
  { label: "Twitter / X", href: contacts.twitter },
  { label: "WhatsApp", href: contacts.whatsapp },
];

export function PortfolioFooter({ language }: { language: Language }) {
  const copy = content[language].footer;
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContact}>
        <div className={styles.footerInvitation}>
          <p className={styles.smallLabel}>{language === "id" ? "Tetap terhubung" : "Stay in touch"}</p>
          <h2 className="font-serif">{language === "id" ? "Berawal dari sebuah halo." : "It starts with a hello."}</h2>
          <a className={styles.emailLink} href={contacts.email}>llianified@gmail.com<ArrowIcon /></a>
        </div>
        <nav className={styles.socialLinks} aria-label={language === "id" ? "Media sosial" : "Social links"}>
          {socialLinks.map(({ label, href }) => <a key={label} href={href} target="_blank" rel="noreferrer">{label}<ArrowIcon /></a>)}
        </nav>
      </div>
      <div className={styles.footerMeta}>
        <p className={styles.footerLocation}>{copy.location}<span><LocalTime /> WIB</span></p>
        <a className={styles.backToTop} href="#main-content">{language === "id" ? "Ke atas" : "Back to top"}<span aria-hidden="true">↑</span></a>
      </div>
      <div className={styles.footerCredit}>
        <p>{copy.creditPrefix} <strong>{copy.creditName}</strong></p>
        <p>{copy.copyright}</p>
      </div>
    </footer>
  );
}
