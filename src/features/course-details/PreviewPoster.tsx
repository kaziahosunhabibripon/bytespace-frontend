import { courseDetails } from "@/data/courseDetails";
import { imageUrl } from "@/lib/assets";
import { Icon } from "@/components/ui/Icon";
import styles from "./PreviewPoster.module.css";

export function PreviewPoster() {
  const { poster } = courseDetails;
  return (
    <figure className={styles.poster}>
      <img src={imageUrl(poster.image)} alt={poster.alt} width={720} height={480} />
      <button type="button" className={styles.play} aria-label={poster.playLabel}>
        <span className={styles.disc}>
          <Icon name="play" size={26} />
        </span>
      </button>
    </figure>
  );
}
