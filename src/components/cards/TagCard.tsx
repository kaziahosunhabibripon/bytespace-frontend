import { Surface } from "@/components/ui/Surface";
import styles from "./TagCard.module.css";

interface TagCardProps {
  title: string;
  meta: readonly string[];
}

/** Small white chip-card floating over the hero photo ("UI/UX Design - 200 Courses - 1000+ Students"). */
export function TagCard({ title, meta }: TagCardProps) {
  return (
    <Surface variant="plain" radius="md" className={styles.card}>
      <b className={styles.title}>{title}</b>
      <span className={styles.meta}>{meta.join("  •  ")}</span>
    </Surface>
  );
}
