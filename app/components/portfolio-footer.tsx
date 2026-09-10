import { contacts, content, site, uiCopy, type Language } from "@/lib/content";
import { LocalTime } from "./local-time";
import styles from "../page.module.css";

const railLinks = [
  { label: "X", href: contacts.twitter },
  { label: "GitHub", href: contacts.github },
  { label: "Email", href: contacts.email },
  { label: "Instagram", href: contacts.instagram },
  { label: "Quick Call?", href: contacts.whatsapp },
  { label: "Resume", href: site.cvHref },
] as const;

export function SocialRail({ language = "id" }: { language?: Language }) {
  return (
    <nav className={styles.socialRail} aria-label={uiCopy[language].social}>
      {railLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noreferrer" : undefined}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

export function PortfolioFooter({ language }: { language: Language }) {
  const copy = content[language].footer;
  const ui = uiCopy[language];

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.footerPrompt}>
        <span aria-hidden="true"># </span>
        {language === "id" ? "tanya apa saja, saya ada di" : "ask me anything, find me on"}{" "}
        <a href={contacts.email}>email</a>
      </div>
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
