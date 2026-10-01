export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export interface Course {
  id: number;
  title: string;
  /** File name (without extension) of the cover image under /img. */
  image: string;
  creatorId: number;
  creatorName: string;
  rating: number;
  level: CourseLevel;
  lessonCount: number;
  duration: string;
  commentCount: number;
  price: number;
  categories: readonly string[];
}

export interface CourseQuery {
  text?: string;
  category?: string;
  page?: number;
  pageSize?: number;
}

export interface Page<T> {
  items: T[];
  page: number;
  pageCount: number;
  total: number;
}

export type CourseTab = "about" | "lessons" | "reviews";
