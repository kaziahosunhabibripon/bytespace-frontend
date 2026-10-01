import { useParams } from "react-router-dom";
import { creators, creatorLabels } from "@/data/creator";
import { useCreatorCourses } from "@/hooks/useCourses";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { imageUrl } from "@/lib/assets";
import { CourseList } from "@/components/course/CourseList";
import { FilterBar } from "@/components/course/FilterBar";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Pill } from "@/components/ui/Pill";
import { Text } from "@/components/ui/Text";
import NotFoundPage from "@/features/not-found/NotFoundPage";
import styles from "./CreatorPage.module.css";

const COURSES_SHOWN = 6;

export default function CreatorPage() {
  const { id } = useParams();
  const creator = creators.find((candidate) => String(candidate.id) === id);
  const { data: courses } = useCreatorCourses(creator?.id ?? 0, COURSES_SHOWN);

  useDocumentTitle(creator?.name);

  if (!creator) return <NotFoundPage />;

  return (
    <>
      <PageHero className={styles.hero}>
        <Container className={styles.head}>
          <img className={styles.avatar} src={imageUrl(creator.avatar)} alt={creator.name} width={96} height={96} />
          <div className={styles.name}>
            <Heading level={1} size="title" tone="white" className={styles.title}>
              {creator.name}
            </Heading>
            <span className={styles.badge}>{creator.badge}</span>
            <Text tone="white" className={styles.headline}>
              {creator.headline}
            </Text>
          </div>
          <div className={styles.bio}>
            {creator.bio.map((paragraph) => (
              <Text key={paragraph} tone="white">
                {paragraph}
              </Text>
            ))}
          </div>
          <div className={styles.stats}>
            <Pill tone="white" size="lg">
              <b className={styles.number}>{creator.productCount}</b> {creatorLabels.products}
            </Pill>
            <Pill tone="white" size="lg">
              <b className={styles.number}>{creator.followerCount}</b> {creatorLabels.followers}
            </Pill>
            <Button className={styles.follow}>{creatorLabels.follow}</Button>
          </div>
        </Container>
      </PageHero>

      <Container as="main" id="main" className={styles.main}>
        <FilterBar />
        <div className={styles.courses}>
          <CourseList
            courses={courses}
            emptyMessage="This creator has not published any courses yet."
            skeletonCount={COURSES_SHOWN}
          />
        </div>
      </Container>
    </>
  );
}
