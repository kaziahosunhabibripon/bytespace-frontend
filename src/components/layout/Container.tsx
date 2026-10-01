import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/cn";
import styles from "./Container.module.css";

type ContainerProps = ComponentPropsWithoutRef<"div"> & { as?: ElementType };

/** Centres content in the 1200px Figma column, with a gutter on small screens. */
export function Container({ as: Tag = "div", className, ...rest }: ContainerProps) {
  return <Tag className={cn(styles.container, className)} {...rest} />;
}
