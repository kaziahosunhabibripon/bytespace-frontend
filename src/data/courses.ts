import type { Course } from "@/types/course";

type CourseSeed = Pick<Course, "title" | "image" | "categories" | "level" | "rating" | "price">;

const seeds: readonly CourseSeed[] = [
  {
    title: "Learn Figma from Basic",
    image: "course-figma",
    categories: ["Featured", "UI/UX Design", "Graphic Design"],
    level: "Beginner",
    rating: 4.5,
    price: 25,
  },
  {
    title: "Build Digital Asset",
    image: "course-icons",
    categories: ["Featured", "Digital Illustration", "Graphic Design"],
    level: "Intermediate",
    rating: 4.8,
    price: 35,
  },
  {
    title: "the Power of Big Data",
    image: "course-data",
    categories: ["Featured", "Data Science"],
    level: "Advanced",
    rating: 4.3,
    price: 45,
  },
  {
    title: "Balancing Productivity and Focus",
    image: "course-desk",
    categories: ["Featured", "Productivity"],
    level: "Beginner",
    rating: 4.6,
    price: 15,
  },
  {
    title: "Mastering Money Management",
    image: "course-chart",
    categories: ["Featured", "Freelance & Entrepreneurship"],
    level: "Intermediate",
    rating: 4.4,
    price: 30,
  },
  {
    title: "From Idea to Startup Success",
    image: "course-team",
    categories: ["Featured", "Marketing", "Freelance & Entrepreneurship"],
    level: "Advanced",
    rating: 4.7,
    price: 50,
  },
  {
    title: "Music Production for Beginners",
    image: "a01",
    categories: ["Music", "Film & Video"],
    level: "Beginner",
    rating: 4.2,
    price: 20,
  },
  {
    title: "Drawing and Painting Essentials",
    image: "a09",
    categories: ["Drawing & Painting", "Crafts"],
    level: "Beginner",
    rating: 4.5,
    price: 25,
  },
  {
    title: "Motion Graphics and Animation",
    image: "a10",
    categories: ["Animation", "Film & Video"],
    level: "Intermediate",
    rating: 4.7,
    price: 40,
  },
  {
    title: "Growing a Social Media Audience",
    image: "a11",
    categories: ["Social Media", "Marketing"],
    level: "Beginner",
    rating: 4.1,
    price: 18,
  },
  {
    title: "Creative Marketing Campaigns",
    image: "course-chart",
    categories: ["Creative Marketing", "Marketing"],
    level: "Intermediate",
    rating: 4.6,
    price: 32,
  },
  {
    title: "Everyday Cooking Masterclass",
    image: "course-desk",
    categories: ["Cooking"],
    level: "Beginner",
    rating: 4.9,
    price: 22,
  },
  {
    title: "Photography for Social Media",
    image: "course-figma",
    categories: ["Photography", "Social Media"],
    level: "Beginner",
    rating: 4.4,
    price: 28,
  },
  {
    title: "Modern Web Development Bootcamp",
    image: "course-team",
    categories: ["Web Development", "Data Science"],
    level: "Advanced",
    rating: 4.8,
    price: 55,
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
    lessonCount: 17 + (index % 12),
    duration: "2 hours 16 mins",
    commentCount: 59 + (index % 40),
  } satisfies Course;
});
