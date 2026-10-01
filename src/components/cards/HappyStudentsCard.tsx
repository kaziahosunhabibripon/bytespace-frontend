import { cn } from "@/lib/cn";
import { AvatarStack } from "@/components/ui/Avatar";
import { Icon } from "@/components/ui/Icon";
import { Surface } from "@/components/ui/Surface";
import styles from "./HappyStudentsCard.module.css";

interface HappyStudentsCardProps {
  title: string;
  rating: string;
  reviews: string;
  avatars: readonly string[];
  more: string;
  /** "lime" is the filled variant used on the sign-in / register collage. */
  tone?: "white" | "lime";
  /** The copy used in the growth band is drawn slightly taller in the design. */
  density?: "compact" | "roomy";
}

export function HappyStudentsCard({
  title,
  rating,
  reviews,
  avatars,
  more,
  tone = "white",
  density = "compact",
}: HappyStudentsCardProps) {
  return (
    <Surface variant="plain" radius="md" className={cn(styles.card, styles[tone], styles[density])}>
      <b className={styles.title}>{title}</b>
      <span className={styles.rating}>
        <strong>{rating}</strong> <em>{reviews}</em>
        <Icon name="star" size={14} />
      </span>
      <AvatarStack
        images={avatars}
        size={42}
        overlap={14}
        more={more}
        moreTone={tone === "lime" ? "dark" : "lime"}
        className={styles.avatars}
      />
    </Surface>
  );
}
