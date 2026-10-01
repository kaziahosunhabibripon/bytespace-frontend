import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./MetricCard.module.css";

interface MetricCardProps {
  title: string;
  period: string;
  amount: string;
  className?: string;
  /** Extra content under the amount (a progress bar or a change badge). */
  children?: ReactNode;
}

/** Blue dashboard card ("Total Revenue", "Year to Date"). */
export function MetricCard({ title, period, amount, className, children }: MetricCardProps) {
  return (
    <div className={cn(styles.card, className)}>
      <span className={styles.title}>{title}</span>
      <span className={styles.period}>{period}</span>
      <b className={styles.amount}>{amount}</b>
      {children}
    </div>
  );
}

/** Small lime badge shown inside a `MetricCard`. */
export function MetricBadge({ children }: { children: ReactNode }) {
  return <span className={styles.badge}>{children}</span>;
}
