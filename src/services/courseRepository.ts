import type { Course, CourseQuery, Page } from "@/types/course";

/**
 * Where course data comes from. The UI only depends on this interface, so the mock below
 * can be swapped for an HTTP implementation (the Express backend) without touching components.
 */
export interface CourseRepository {
  search(query: CourseQuery): Promise<Page<Course>>;
  getById(id: number): Promise<Course | undefined>;
  listByCreator(creatorId: number, limit: number): Promise<Course[]>;
}
