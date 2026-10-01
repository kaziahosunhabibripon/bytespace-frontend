import type { CSSProperties, HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import styles from "./Abs.module.css";

type Length = number | string;

interface AbsProps extends HTMLAttributes<HTMLDivElement> {
  left?: Length;
  top?: Length;
  right?: Length;
  width?: Length;
  height?: Length;
}

/** Absolutely positioned box, in design pixels, for use inside a `Stage`. */
export function Abs({ left, top, right, width, height, className, style, ...rest }: AbsProps) {
  const position: CSSProperties = { left, top, right, width, height, ...style };
  return <div className={cn(styles.abs, className)} style={position} {...rest} />;
}
