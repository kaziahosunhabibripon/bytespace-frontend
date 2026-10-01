import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { cn } from "@/lib/cn";
import styles from "./Button.module.css";

type Variant = "lime" | "outline";
type Size = "xs" | "sm" | "md" | "lg";
type Width = "auto" | "full";

interface SharedProps {
  variant?: Variant;
  size?: Size;
  width?: Width;
  /** Decorative icon rendered before the label. */
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
}

type NativeButtonProps = SharedProps & Omit<ComponentPropsWithoutRef<"button">, keyof SharedProps> & { to?: undefined };
type RouterLinkProps = SharedProps & Omit<LinkProps, keyof SharedProps>;

/** Renders a `<button>`, or a router `<Link>` when `to` is given, with identical styling. */
export function Button(props: NativeButtonProps | RouterLinkProps) {
  const { variant = "lime", size = "md", width = "auto", icon, className, children, ...rest } = props;
  const classes = cn(styles.button, styles[variant], styles[size], width === "full" && styles.full, className);

  if ("to" in rest && rest.to !== undefined) {
    return (
      <Link className={classes} {...(rest as Omit<LinkProps, keyof SharedProps>)}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...(rest as ComponentPropsWithoutRef<"button">)}>
      {icon}
      {children}
    </button>
  );
}
