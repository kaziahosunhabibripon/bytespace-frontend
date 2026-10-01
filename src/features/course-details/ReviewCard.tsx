import { cn } from "@/lib/cn";
import type { Review } from "@/types/content";
import { Avatar } from "@/components/ui/Avatar";
import { Stars } from "@/components/ui/Rating";
import { Surface } from "@/components/ui/Surface";
import { Text } from "@/components/ui/Text";
import styles from "./ReviewCard.module.css";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <Surface as="article" className={cn(styles.card, review.spacing === "tight" && styles.tight)}>
      <header className={styles.header}>
        <Avatar image={review.avatar} size={52} />
        <div>
          <b className={styles.author}>{review.author}</b>
          <span className={styles.role}>{review.role}</span>
        </div>
        <span className={styles.posted}>{review.postedAgo}</span>
      </header>
      <div className={styles.stars}>
        <Stars count={review.rating} size={24} label={`${review.rating} out of 5 stars`} />
      </div>
      <Text size="md" tone="soft" className={styles.text}>
        {review.text}
      </Text>
    </Surface>
  );
}
