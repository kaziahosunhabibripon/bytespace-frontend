import { Link } from "react-router-dom";
import { courseDetails } from "@/data/courseDetails";
import { paths } from "@/lib/paths";
import type { Course } from "@/types/course";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import styles from "./CourseHeader.module.css";

export function CourseHeader({ course }: { course: Course }) {
  const { title, subtitle, badges, shareLabel } = courseDetails;

  return (
    <header className={styles.head}>
      <Heading level={1} size="title" tone="white" weight="medium" className={styles.title}>
        {title}
      </Heading>
      <p className={styles.subtitle}>{subtitle}</p>
      <p className={styles.by}>
        by <Link to={paths.creator(course.creatorId)}>{course.creatorName}</Link>
      </p>
      <ul className={styles.badges}>
        {badges.map((badge) => (
          <li key={badge.label}>
            <Pill tone="white" size="md" icon={<Icon name={badge.icon} size={badge.iconSize} />}>
              {badge.label}
            </Pill>
          </li>
        ))}
      </ul>
      <Button size="sm" className={styles.share} icon={<Icon name="share" size={20} />}>
        {shareLabel}
      </Button>
    </header>
  );
}
