import type { RatingBucket } from "@/types/content";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Stars } from "@/components/ui/Rating";
import { Surface } from "@/components/ui/Surface";
import styles from "./RatingSummary.module.css";

interface RatingSummaryProps {
  label: string;
  score: string;
  buckets: readonly RatingBucket[];
}

/** Average score on the left, one bar per star level on the right. */
export function RatingSummary({ label, score, buckets }: RatingSummaryProps) {
  return (
    <Surface className={styles.card}>
      <div className={styles.score}>
        <span>{label}</span>
        <b>{score}</b>
      </div>
      <ul className={styles.rows}>
        {buckets.map((bucket) => (
          <li key={bucket.stars} className={styles.row}>
            <span className="visually-hidden">{`${bucket.stars} star reviews:`}</span>
            <ProgressBar value={bucket.percent} label={`${bucket.stars} star reviews`} className={styles.bar} />
            <Stars count={5} size={22} />
            <span className={styles.count}>{bucket.count}</span>
          </li>
        ))}
      </ul>
    </Surface>
  );
}
