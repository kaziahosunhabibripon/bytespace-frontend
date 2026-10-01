import { cn } from "@/lib/cn";
import { Icon } from "./Icon";
import styles from "./Rating.module.css";

interface RatingValueProps {
  value: number;
  /** "accent" paints the star lime, as in the sign-in collage. */
  tone?: "muted" | "accent";
}

/** "4.5 ★" as shown on course cards. */
export function RatingValue({ value, tone = "muted" }: RatingValueProps) {
  return (
    <span className={cn(styles.value, styles[tone])}>
      {value}
      <Icon name="star" size={18} />
    </span>
  );
}

interface StarsProps {
  count: number;
  size: number;
  /** Accessible description. Without it the stars are treated as decoration. */
  label?: string;
}

/** A row of solid stars. */
export function Stars({ count, size, label }: StarsProps) {
  return (
    <span
      className={styles.stars}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {Array.from({ length: count }, (_, index) => (
        <Icon key={index} name="star" size={size} />
      ))}
    </span>
  );
}
