import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { GridSection } from "./GridSection";
import { Nav } from "./Nav";
import styles from "./PageHero.module.css";

interface PageHeroProps {
  className?: string;
  children?: ReactNode;
}

/** Blue grid header with the site navigation; pages add their own title and controls as children. */
export function PageHero({ className, children }: PageHeroProps) {
  return (
    <GridSection as="header" className={cn(styles.hero, className)}>
      <Nav />
      {children}
    </GridSection>
  );
}
