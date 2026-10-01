import type { Course, CourseQuery, CourseSort } from "@/types/course";

const comparators: Record<CourseSort, (a: Course, b: Course) => number> = {
  relevant: () => 0,
  rating: (a, b) => b.rating - a.rating,
  "price-low": (a, b) => a.price - b.price,
  "price-high": (a, b) => b.price - a.price,
};

/** Everything a user could plausibly type, lower-cased once per course. */
const searchableText = (course: Course): string =>
  [course.title, course.creatorName, course.level, ...course.categories].join(" ").toLowerCase();

export function matchesQuery(course: Course, { text, category, level }: CourseQuery): boolean {
  const needle = text?.trim().toLowerCase();
  if (needle && !searchableText(course).includes(needle)) return false;
  if (category && !course.categories.includes(category)) return false;
  if (level && course.level !== level) return false;
  return true;
}

/** Relevance: a title hit outranks a category hit, which outranks a creator or level hit. */
function relevance(course: Course, needle: string): number {
  if (!needle) return 0;
  if (course.title.toLowerCase().includes(needle)) return 3;
  if (course.categories.some((name) => name.toLowerCase().includes(needle))) return 2;
  return 1;
}

export function filterCourses(courses: readonly Course[], query: CourseQuery): Course[] {
  const matched = courses.filter((course) => matchesQuery(course, query));
  const needle = query.text?.trim().toLowerCase() ?? "";
  if (!needle) return matched.sort(comparators[query.sort ?? "relevant"]);
  return matched
    .map((course, index) => ({ course, index, score: relevance(course, needle) }))
    .sort((a, b) => b.score - a.score || comparators[query.sort ?? "relevant"](a.course, b.course) || a.index - b.index)
    .map((entry) => entry.course);
}

export const formatPrice = (amount: number): string => `$${amount}`;
