import { useState } from "react";
import { homeContent } from "@/data/home";
import { DEFAULT_CATEGORY, homeCategoryRows } from "@/data/taxonomy";
import { useCourseSearch } from "@/hooks/useCourses";
import { paths } from "@/lib/paths";
import { CourseList } from "@/components/course/CourseList";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Chip } from "@/components/ui/Chip";
import styles from "./FeaturedCourses.module.css";

export function FeaturedCourses() {
  const { discover } = homeContent;
  const [category, setCategory] = useState(DEFAULT_CATEGORY);
  const { data } = useCourseSearch({ category, pageSize: discover.courseCount });
  const lastRow = homeCategoryRows.length - 1;

  return (
    <section className={styles.section} aria-labelledby="featured-courses-title">
      <SectionHeader titleLines={discover.titleLines} lead={discover.lead} titleId="featured-courses-title" />

      <div className={styles.chips}>
        {homeCategoryRows.map((row, index) => (
          <div key={row[0]} className={styles.row}>
            {row.map((label) => (
              <Chip key={label} selected={label === category} onClick={() => setCategory(label)}>
                {label}
              </Chip>
            ))}
            {index === lastRow ? (
              <Chip variant="text" to={paths.search}>
                {discover.moreLabel}
              </Chip>
            ) : null}
          </div>
        ))}
      </div>

      <Container className={styles.courses}>
        <CourseList
          courses={data?.items}
          emptyMessage="No courses in this category yet."
          skeletonCount={discover.courseCount}
        />
      </Container>
    </section>
  );
}
