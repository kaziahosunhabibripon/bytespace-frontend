import type { Course, CourseQuery } from "@/types/course";

export function matchesQuery(course: Course, { text, category }: CourseQuery): boolean {
  const needle = text?.trim().toLowerCase();
  if (needle && !course.title.toLowerCase().includes(needle)) return false;
  if (category && !course.categories.includes(category)) return false;
  return true;
}

export function filterCourses(courses: readonly Course[], query: CourseQuery): Course[] {
  return courses.filter((course) => matchesQuery(course, query));
}

export const formatPrice = (amount: number): string => `$${amount}`;
