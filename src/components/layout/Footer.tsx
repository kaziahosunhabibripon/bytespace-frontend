import { Link } from "react-router-dom";
import { siteConfig } from "@/data/site";
import { assetUrl } from "@/lib/assets";
import type { FooterLink } from "@/types/content";
import { Container } from "./Container";
import { NewsletterForm } from "./NewsletterForm";
import styles from "./Footer.module.css";

function FooterEntry({ link }: { link: FooterLink }) {
  return link.to ? <Link to={link.to}>{link.label}</Link> : <span>{link.label}</span>;
}

export function Footer() {
  const { footer, logos, name } = siteConfig;

  return (
    <footer className={styles.footer}>
      <Container className={styles.main}>
        <div>
          <img src={assetUrl(logos.dark)} alt={name} width={171} height={35} className={styles.logo} />
          <p className={styles.tagline}>{footer.tagline}</p>
          <NewsletterForm {...footer.newsletter} />
        </div>
        {footer.columns.map((column) => (
          <ul key={column[0]?.label} className={styles.column}>
            {column.map((link) => (
              <li key={link.label}>
                <FooterEntry link={link} />
              </li>
            ))}
          </ul>
        ))}
      </Container>
      <Container className={styles.bottom}>
        <span>{footer.copyright}</span>
        <ul className={styles.legal}>
          {footer.legal.map((link) => (
            <li key={link.label}>
              <FooterEntry link={link} />
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
