import { contacts, content, type Language } from "@/lib/content";
import { ArrowIcon, GitHubIcon, InstagramIcon, WhatsAppIcon, XIcon } from "./icons";
import styles from "../page.module.css";

const socialLinks = [
  { label: "GitHub", href: contacts.github, icon: GitHubIcon },
  { label: "Instagram", href: contacts.instagram, icon: InstagramIcon },
  { label: "Twitter / X", href: contacts.twitter, icon: XIcon },
  { label: "WhatsApp", href: contacts.whatsapp, icon: WhatsAppIcon },
];

export function PortfolioFooter({ language }: { language: Language }) {
  const copy = content[language].footer;
  return (
    <footer id="contact" className={styles.footer}>
      <div className={`${styles.card} ${styles.contactCard}`}>
        <div className={styles.footerInvitation}>
          <p className={styles.smallLabel}>{language === "id" ? "Tetap terhubung" : "Stay in touch"}</p>
          <h2 className="font-serif">{language === "id" ? "Berawal dari sebuah halo." : "It starts with a hello."}</h2>
          <a className={styles.emailLink} href={contacts.email}>llianified@gmail.com<ArrowIcon /></a>
        </div>
        <nav className={styles.socialLinks} aria-label={language === "id" ? "Media sosial" : "Social links"}>
          {socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer"><Icon /><span>{label}</span><ArrowIcon /></a>)}
        </nav>
      </div>
      <div className={styles.footerMeta}>
        <div><p>{copy.creditPrefix} <strong>{copy.creditName}</strong></p><p>{copy.copyright}</p></div>
        <a className={styles.backToTop} href="#main-content">{language === "id" ? "Ke atas" : "Back to top"}<span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  );
}
