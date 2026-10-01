import { useState } from "react";
import { courseDetails } from "@/data/courseDetails";
import { filterReviews } from "@/lib/reviews";
import type { RatingFilter } from "@/types/content";
import { Chip } from "@/components/ui/Chip";
import { Heading } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";
import panel from "./Panels.module.css";
import { RatingSummary } from "./RatingSummary";
import { ReviewCard } from "./ReviewCard";
import styles from "./ReviewsPanel.module.css";

export function ReviewsPanel() {
  const { reviews } = courseDetails;
  const [rating, setRating] = useState<RatingFilter>("all");
  const visible = filterReviews(reviews.items, rating);

  return (
    <section className={panel.panel} aria-label={reviews.heading}>
      <Heading level={2} size="heading" tone="text" className={panel.heading}>
        {reviews.heading}
      </Heading>
      <Text size="md" tone="soft" className={panel.copy}>
        {reviews.intro}
      </Text>

      <RatingSummary {...reviews.summary} />

      <Heading level={2} size="heading" tone="text" className={styles.listHeading}>
        {reviews.listHeading}
      </Heading>
      <div className={styles.filters}>
        <Chip selected={rating === "all"} onClick={() => setRating("all")}>
          {reviews.allRatingLabel}
        </Chip>
        {reviews.summary.buckets.map((bucket) => (
          <Chip
            key={bucket.stars}
            selected={rating === bucket.stars}
            icon={<Icon name="star" size={20} />}
            onClick={() => setRating(bucket.stars)}
          >
            {bucket.stars}
          </Chip>
        ))}
      </div>

      {visible.length > 0 ? (
        <ul className={styles.list}>
          {visible.map((review) => (
            <li key={review.id}>
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>
      ) : (
        <Text size="md" tone="soft" className={styles.empty}>
          {reviews.emptyMessage}
        </Text>
      )}
    </section>
  );
}
