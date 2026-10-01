import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./Pill.module.css";

type Tone = "muted" | "white";
type Size = "sm" | "md" | "lg";

interface PillProps {
  tone?: Tone;
  size?: Size;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}

/** Small read-only label with an optional leading icon. */
export function Pill({ tone = "muted", size = "sm", icon, className, children }: PillProps) {
  return (
    <span className={cn(styles.pill, styles[tone], styles[size], className)}>
      {icon}
      {children}
    </span>
  );
}
