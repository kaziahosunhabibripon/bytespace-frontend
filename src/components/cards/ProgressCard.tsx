import { cn } from "@/lib/cn";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Surface } from "@/components/ui/Surface";
import styles from "./ProgressCard.module.css";

interface ProgressCardProps {
  title: string;
  percent: number;
  /** The copy used in the growth band is drawn slightly taller in the design. */
  density?: "compact" | "roomy";
}

/** "Learning Progress 55%" card with a lime bar. */
export function ProgressCard({ title, percent, density = "compact" }: ProgressCardProps) {
  return (
    <Surface variant="plain" radius="md" className={cn(styles.card, styles[density])}>
      <span className={styles.title}>{title}</span>
      <b className={styles.value}>{percent}%</b>
      <ProgressBar value={percent} tone="soft" label={title} className={styles.bar} />
    </Surface>
  );
}
