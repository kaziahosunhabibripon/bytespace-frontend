import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./Text.module.css";

type Size = "lg" | "md" | "sm" | "xs";
type Tone = "inherit" | "soft" | "neutral" | "subtle" | "white" | "ink";
type Align = "start" | "center";

interface TextProps {
  as?: ElementType;
  size?: Size;
  tone?: Tone;
  align?: Align;
  className?: string;
  children: ReactNode;
}

/** Body copy on the Figma type scale: lg 18/29, md 16/26, sm 14/20, xs 12/19. */
export function Text({
  as: Tag = "p",
  size = "lg",
  tone = "inherit",
  align = "start",
  className,
  children,
}: TextProps) {
  return (
    <Tag className={cn(styles[size], styles[tone], align === "center" && styles.center, className)}>{children}</Tag>
  );
}
