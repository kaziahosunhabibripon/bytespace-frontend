import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";
import styles from "./Surface.module.css";

type Variant = "outlined" | "plain";
type Radius = "md" | "lg" | "xl";

interface SurfaceStyle {
  variant?: Variant;
  radius?: Radius;
}

/** Class list for a white rounded card. Use it directly on elements that cannot be a `<Surface>` (links, forms). */
export function surfaceClass({ variant = "outlined", radius = "lg" }: SurfaceStyle = {}): string {
  return cn(styles.surface, styles[variant], styles[radius]);
}

type SurfaceProps = SurfaceStyle & ComponentPropsWithoutRef<"div"> & { as?: "div" | "article" | "aside" | "section" };

export function Surface({ as: Tag = "div", variant, radius, className, ...rest }: SurfaceProps) {
  return <Tag className={cn(surfaceClass({ variant, radius }), className)} {...rest} />;
}
