import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/cn";
import styles from "./GridSection.module.css";

type GridSectionProps = ComponentPropsWithoutRef<"div"> & { as?: ElementType };

/** Blue section with the Figma grid (120px cells) behind it. Anchored to the centre so it lines up with centred content. */
export function GridSection({ as: Tag = "div", className, ...rest }: GridSectionProps) {
  return <Tag className={cn(styles.grid, className)} data-surface="dark" {...rest} />;
}

export { styles as gridStyles };
