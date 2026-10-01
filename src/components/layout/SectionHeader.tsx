import { cn } from "@/lib/cn";
import { Heading } from "@/components/ui/Heading";
import { Lines } from "@/components/ui/Lines";
import { Text } from "@/components/ui/Text";
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  titleLines: readonly string[];
  lead: string;
  size?: "display" | "title";
  /** Id of the `<h2>`, so the surrounding `<section>` can reference it with `aria-labelledby`. */
  titleId?: string;
  className?: string;
}

/** Centered section title with the muted lead paragraph underneath. */
export function SectionHeader({ titleLines, lead, size = "display", titleId, className }: SectionHeaderProps) {
  return (
    <header className={cn(styles.header, styles[size], className)}>
      <Heading level={2} size={size} align="center" id={titleId}>
        <Lines lines={titleLines} />
      </Heading>
      <Text tone="subtle" align="center" className={styles.lead}>
        {lead}
      </Text>
    </header>
  );
}
