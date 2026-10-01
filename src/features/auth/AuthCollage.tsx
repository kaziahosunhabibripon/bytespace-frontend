import { authShapes } from "@/data/decor";
import { floatingCards } from "@/data/floatingCards";
import { useCourse } from "@/hooks/useCourses";
import { HappyStudentsCard } from "@/components/cards/HappyStudentsCard";
import { CourseCardPreview } from "@/components/course/CourseCard";
import { Shape, ShapeLayer } from "@/components/decor/Shape";
import { Abs } from "@/components/layout/Abs";

/** Decorative course cards and shapes on the left of the sign-in / register pages. */
export function AuthCollage() {
  const { data: behind } = useCourse(2);
  const { data: front } = useCourse(3);

  return (
    <>
      {behind ? (
        <Abs left={123} top={395} width={373}>
          <CourseCardPreview course={behind} variant="showcase" />
        </Abs>
      ) : null}
      {front ? (
        <Abs left={234} top={306} width={373}>
          <CourseCardPreview course={front} variant="showcase" />
        </Abs>
      ) : null}
      <ShapeLayer shapes={authShapes.overCards} />
      <Abs left={349} top={741}>
        <HappyStudentsCard {...floatingCards.happyStudents} tone="lime" />
      </Abs>
      <Shape spec={authShapes.topmost} />
    </>
  );
}
