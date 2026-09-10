import { contacts, content, uiCopy, type Language } from "@/lib/content";
import {
  ArrowIcon,
  GitHubIcon,
  InstagramIcon,
  WhatsAppIcon,
  XIcon,
} from "./icons";
import styles from "../page.module.css";

const socialLinks = [
  { label: "GitHub", href: contacts.github, icon: GitHubIcon },
  { label: "Instagram", href: contacts.instagram, icon: InstagramIcon },
  { label: "Twitter / X", href: contacts.twitter, icon: XIcon },
  { label: "WhatsApp", href: contacts.whatsapp, icon: WhatsAppIcon },
];

export function PortfolioFooter({ language }: { language: Language }) {
  const copy = content[language].footer;
  const ui = uiCopy[language];
  return (
    <footer id="contact" className={styles.footer}>
      <div className={`${styles.card} ${styles.contactCard}`}>
        <div className={styles.footerInvitation}>
          <p className={styles.smallLabel}>{ui.stayInTouch}</p>
          <h2 className="font-serif">{ui.hello}</h2>
          <a className={styles.emailLink} href={contacts.email}>
            {contacts.email.replace("mailto:", "")}
            <ArrowIcon />
          </a>
        </div>
        <nav className={styles.socialLinks} aria-label={ui.social}>
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer">
              <Icon />
              <span>{label}</span>
              <ArrowIcon />
            </a>
          ))}
        </nav>
      </div>
      <div className={styles.footerMeta}>
        <div>
          <p>
            {copy.creditPrefix} <strong>{copy.creditName}</strong>
          </p>
          <p>{copy.copyright}</p>
        </div>
        <a className={styles.backToTop} href="#main-content">
          {ui.backToTop}
          <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
