import type { Course } from "@/types/course";
import { CourseCard } from "./CourseCard";
import styles from "./CourseList.module.css";

interface CourseListProps {
  /** `undefined` while the first page is still loading. */
  courses: readonly Course[] | undefined;
  emptyMessage: string;
  /** Number of placeholder cards to show while loading. */
  skeletonCount?: number;
}

/** Three-column course grid with loading and empty states, so pages do not repeat that logic. */
export function CourseList({ courses, emptyMessage, skeletonCount = 6 }: CourseListProps) {
  if (!courses) {
    return (
      <ul className={styles.grid} aria-busy="true" aria-label="Loading courses">
        {Array.from({ length: skeletonCount }, (_, index) => (
          <li key={index} className={styles.skeleton} />
        ))}
      </ul>
    );
  }

  if (courses.length === 0) {
    return <p className={styles.empty}>{emptyMessage}</p>;
  }

  return (
    <ul className={styles.grid}>
      {courses.map((course) => (
        <li key={course.id}>
          <CourseCard course={course} />
        </li>
      ))}
    </ul>
  );
}
