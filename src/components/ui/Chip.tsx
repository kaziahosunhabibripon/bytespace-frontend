import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { cn } from "@/lib/cn";
import styles from "./Chip.module.css";

type Variant = "filled" | "text";

interface SharedProps {
  variant?: Variant;
  /** Highlights the chip (lime) and exposes it as a toggle button. */
  selected?: boolean;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
}

type NativeChipProps = SharedProps & Omit<ComponentPropsWithoutRef<"button">, keyof SharedProps> & { to?: undefined };
type RouterChipProps = SharedProps & Omit<LinkProps, keyof SharedProps>;

/** Rounded filter chip. Renders a toggle `<button>`, or a router `<Link>` when `to` is given. */
export function Chip(props: NativeChipProps | RouterChipProps) {
  const { variant = "filled", selected = false, icon, className, children, ...rest } = props;
  const classes = cn(styles.chip, styles[variant], selected && styles.selected, className);

  if ("to" in rest && rest.to !== undefined) {
    return (
      <Link className={classes} {...(rest as Omit<LinkProps, keyof SharedProps>)}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} aria-pressed={selected} {...(rest as ComponentPropsWithoutRef<"button">)}>
      {icon}
      {children}
    </button>
  );
}
