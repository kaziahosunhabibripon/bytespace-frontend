import { useNavigate, useParams } from "react-router-dom";
import { courseDetails } from "@/data/courseDetails";
import { useCourse } from "@/hooks/useCourses";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { parseCourseTab } from "@/lib/courseTabs";
import { paths } from "@/lib/paths";
import { Container } from "@/components/layout/Container";
import { GridSection } from "@/components/layout/GridSection";
import { Nav } from "@/components/layout/Nav";
import { Tabs } from "@/components/ui/Tabs";
import type { CourseTab } from "@/types/course";
import NotFoundPage from "@/features/not-found/NotFoundPage";
import { AboutPanel } from "./AboutPanel";
import { CourseHeader } from "./CourseHeader";
import { EnrollSidebar } from "./EnrollSidebar";
import { LessonsPanel } from "./LessonsPanel";
import { PreviewPoster } from "./PreviewPoster";
import { ReviewsPanel } from "./ReviewsPanel";
import styles from "./CourseDetailsPage.module.css";

export default function CourseDetailsPage() {
  const params = useParams();
  const navigate = useNavigate();
  const courseId = Number(params.id);
  const activeTab = parseCourseTab(params.tab);
  const { status, data: course } = useCourse(courseId);

  useDocumentTitle(course?.title);

  if (activeTab === null || (status === "ready" && !course)) return <NotFoundPage />;

  return (
    <div className={styles.page}>
      <GridSection className={styles.backdrop} aria-hidden="true" />
      <Nav />
      <Container className={styles.layout}>
        {course ? <CourseHeader course={course} /> : <div className={styles.headPlaceholder} />}

        <main id="main" className={styles.main} style={{ paddingBottom: courseDetails.bottomSpace[activeTab] }}>
          <PreviewPoster />
          <Tabs value={activeTab} onValueChange={(tab) => navigate(paths.course(courseId, tab as CourseTab))}>
            {/* The Lessons and Reviews frames in the design start their content 17px lower than About. */}
            <Tabs.List label="Course sections" className={activeTab === "about" ? undefined : styles.tabsShifted}>
              {courseDetails.tabs.map((tab) => (
                <Tabs.Tab key={tab.value} value={tab.value}>
                  {tab.label}
                </Tabs.Tab>
              ))}
            </Tabs.List>
            <Tabs.Panel value="about">
              <AboutPanel />
            </Tabs.Panel>
            <Tabs.Panel value="lessons">
              <LessonsPanel />
            </Tabs.Panel>
            <Tabs.Panel value="reviews">
              <ReviewsPanel />
            </Tabs.Panel>
          </Tabs>
        </main>

        {course ? <EnrollSidebar course={course} /> : null}
      </Container>
    </div>
  );
}
