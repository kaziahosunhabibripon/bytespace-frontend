import { courseDetails } from "@/data/courseDetails";
import { formatPrice } from "@/lib/courses";
import { paths } from "@/lib/paths";
import type { Course } from "@/types/course";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { IconList } from "@/components/ui/IconList";
import { Surface } from "@/components/ui/Surface";
import { Text } from "@/components/ui/Text";
import styles from "./EnrollSidebar.module.css";

export function EnrollSidebar({ course }: { course: Course }) {
  const { sidebar } = courseDetails;

  return (
    <Surface as="aside" className={styles.sidebar} aria-label="Enroll in this course">
      <Heading level={2} size="heading" tone="text" className={styles.title}>
        {sidebar.title}
      </Heading>
      <ol className={styles.lessons}>
        {sidebar.lessons.map((lesson) => (
          <li key={lesson.number}>
            <span>{lesson.number}</span>
            <span className={styles.lessonTitle}>{lesson.title}</span>
            <span className={styles.duration}>{lesson.duration}</span>
          </li>
        ))}
      </ol>
      <Text size="md" tone="soft">
        {sidebar.moreVideos}
      </Text>
      <Text size="md" tone="soft" className={styles.pitch}>
        {sidebar.pitch}
      </Text>

      <p className={styles.price}>
        <b>{formatPrice(course.price)}</b>
        <span>{sidebar.priceUnit}</span>
      </p>
      <Button width="full" className={styles.enroll}>
        {sidebar.enrollLabel}
      </Button>

      <Heading level={3} size="heading" tone="text" className={styles.includesHeading}>
        {sidebar.includesHeading}
      </Heading>
      <IconList items={sidebar.includes} className={styles.includes} />
      <hr className={styles.divider} />

      <div className={styles.creator}>
        <Avatar image={sidebar.creator.avatar} size={52} />
        <div>
          <b className={styles.creatorName}>{sidebar.creator.name}</b>
          <span className={styles.creatorRole}>{sidebar.creator.role}</span>
        </div>
      </div>
      <Text size="md" tone="soft" className={styles.pitch}>
        {sidebar.pitch}
      </Text>
      <Button variant="outline" size="xs" to={paths.creator(course.creatorId)} className={styles.profile}>
        {sidebar.profileLabel}
      </Button>
    </Surface>
  );
}
