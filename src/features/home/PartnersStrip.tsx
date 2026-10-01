import { homeContent } from "@/data/home";
import { assetUrl } from "@/lib/assets";
import styles from "./PartnersStrip.module.css";

export function PartnersStrip() {
  const { partners } = homeContent;
  return (
    <section className={styles.strip} aria-label={partners.label}>
      <img src={assetUrl(partners.image)} alt={partners.alt} width={partners.width} height={partners.height} />
    </section>
  );
}
