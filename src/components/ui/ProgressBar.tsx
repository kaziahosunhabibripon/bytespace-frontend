import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";
import styles from "./ProgressBar.module.css";

type Tone = "default" | "soft" | "panel" | "onBlue";
type Thickness = "sm" | "md";

interface ProgressBarProps {
  /** 0-100 */
  value: number;
  tone?: Tone;
  thickness?: Thickness;
  label?: string;
  className?: string;
}

export function ProgressBar({ value, tone = "default", thickness = "md", label, className }: ProgressBarProps) {
  const percent = Math.min(100, Math.max(0, value));
  return (
    <div
      className={cn(styles.track, styles[tone], styles[thickness], className)}
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(percent)}
    >
      <div className={styles.fill} style={{ "--value": `${percent}%` } as CSSProperties} />
    </div>
  );
}
