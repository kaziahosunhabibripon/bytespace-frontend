import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./Heading.module.css";

type Level = 1 | 2 | 3 | 4;
type Size = "hero" | "display" | "title" | "heading";
type Tone = "ink" | "text" | "white" | "black";
type Align = "start" | "center";
type Weight = "semibold" | "medium";

interface HeadingProps {
  level: Level;
  /** Visual size, independent of the semantic level. */
  size: Size;
  tone?: Tone;
  align?: Align;
  /** Poppins 600 by default; a few headings in the design use 500. */
  weight?: Weight;
  id?: string;
  className?: string;
  children: ReactNode;
}

const tags = { 1: "h1", 2: "h2", 3: "h3", 4: "h4" } as const;

export function Heading({
  level,
  size,
  tone = "ink",
  align = "start",
  weight = "semibold",
  id,
  className,
  children,
}: HeadingProps) {
  const Tag = tags[level];
  return (
    <Tag
      id={id}
      className={cn(
        styles.base,
        styles[size],
        styles[tone],
        weight === "medium" && styles.medium,
        align === "center" && styles.center,
        className,
      )}
    >
      {children}
    </Tag>
  );
}
