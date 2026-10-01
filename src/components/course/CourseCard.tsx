import { Link } from "react-router-dom";
import { courseCardAvatars } from "@/data/courses";
import { imageUrl } from "@/lib/assets";
import { cn } from "@/lib/cn";
import { formatPrice } from "@/lib/courses";
import { paths } from "@/lib/paths";
import type { Course } from "@/types/course";
import { AvatarStack } from "@/components/ui/Avatar";
import { Heading } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import { RatingValue } from "@/components/ui/Rating";
import { surfaceClass } from "@/components/ui/Surface";
import styles from "./CourseCard.module.css";

type Variant = "default" | "showcase";

function CourseCardContent({ course, variant }: { course: Course; variant: Variant }) {
  const badges = [`${course.lessonCount} Lessons`, course.duration, `${course.commentCount} Comments`];
  const showcase = variant === "showcase";

  return (
    <>
      <div className={styles.cover}>
        <img src={imageUrl(course.image)} alt="" width={341} height={195} loading="lazy" decoding="async" />
        <ul className={styles.badges}>
          {badges.map((badge) => (
            <li key={badge}>{badge}</li>
          ))}
        </ul>
      </div>
      <div className={styles.head}>
        <Heading level={3} size="heading" tone="black" className={styles.title}>
          {course.title}
        </Heading>
        <RatingValue value={course.rating} tone={showcase ? "accent" : "muted"} />
      </div>
      <p className={styles.by}>
        by <span>{course.creatorName}</span>
      </p>
      <div className={styles.meta}>
        <Pill icon={<Icon name="bars" size={14} />}>{course.level}</Pill>
        <AvatarStack
          images={courseCardAvatars}
          size={32}
          overlap={8}
          more="26+"
          moreTone={showcase ? "dark" : "lime"}
        />
      </div>
      <p className={styles.price}>
        <b>{formatPrice(course.price)}</b>
        <span>/lifetime</span>
      </p>
    </>
  );
}

/** Course card that links to the course page. */
export function CourseCard({ course }: { course: Course }) {
  return (
    <Link to={paths.course(course.id)} className={cn(surfaceClass(), styles.card)}>
      <CourseCardContent course={course} variant="default" />
    </Link>
  );
}

interface CourseCardPreviewProps {
  course: Course;
  /** "showcase" is the variant drawn in the sign-in / register collage. */
  variant?: Variant;
  className?: string;
}

/** Non-interactive copy of a card, used as decoration inside marketing collages. */
export function CourseCardPreview({ course, variant = "default", className }: CourseCardPreviewProps) {
  return (
    <div
      className={cn(surfaceClass(), styles.card, variant === "showcase" && styles.showcase, className)}
      aria-hidden="true"
    >
      <CourseCardContent course={course} variant={variant} />
    </div>
  );
}
