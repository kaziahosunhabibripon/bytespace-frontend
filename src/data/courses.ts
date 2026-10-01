import type { Course } from "@/types/course";

type CourseSeed = Pick<Course, "title" | "image" | "categories">;

const seeds: readonly CourseSeed[] = [
  {
    title: "Learn Figma from Basic",
    image: "course-figma",
    categories: ["Featured", "UI/UX Design", "Graphic Design"],
  },
  {
    title: "Build Digital Asset",
    image: "course-icons",
    categories: ["Featured", "Digital Illustration", "Graphic Design"],
  },
  { title: "the Power of Big Data", image: "course-data", categories: ["Featured", "Data Science"] },
  { title: "Balancing Productivity and Focus", image: "course-desk", categories: ["Featured", "Productivity"] },
  {
    title: "Mastering Money Management",
    image: "course-chart",
    categories: ["Featured", "Freelance & Entrepreneurship"],
  },
  {
    title: "From Idea to Startup Success",
    image: "course-team",
    categories: ["Featured", "Marketing", "Freelance & Entrepreneurship"],
  },
];

/** Avatars in the small "26+" stack on every course card. */
export const courseCardAvatars = ["a02", "a09", "a10", "a11"] as const;

/** The design shows 18 cards per page and 5 pages. */
export const COURSES_PER_PAGE = 18;
const PAGE_COUNT = 5;

export const courses: readonly Course[] = Array.from({ length: COURSES_PER_PAGE * PAGE_COUNT }, (_, index) => {
  const seed = seeds[index % seeds.length];
  return {
    ...seed,
    id: index + 1,
    creatorId: 1,
    creatorName: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    lessonCount: 17,
    duration: "2 hours 16 mins",
    commentCount: 59,
    price: 25,
  } satisfies Course;
});
