import { cn } from "@/lib/cn";
import type { StatItem } from "@/types/content";
import styles from "./StatList.module.css";

/** Row of big numbers with a caption underneath ("12K Students"). */
export function StatList({ stats, className }: { stats: readonly StatItem[]; className?: string }) {
  return (
    <ul className={cn(styles.list, className)}>
      {stats.map((stat) => (
        <li key={stat.label}>
          <b className={styles.value}>{stat.value}</b>
          <span className={styles.label}>{stat.label}</span>
        </li>
      ))}
    </ul>
  );
}
