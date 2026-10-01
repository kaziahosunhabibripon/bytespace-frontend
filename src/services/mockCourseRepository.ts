import { COURSES_PER_PAGE, courses as catalog } from "@/data/courses";
import { filterCourses } from "@/lib/courses";
import { paginate } from "@/lib/pagination";
import type { CourseRepository } from "@/services/courseRepository";
import type { Course } from "@/types/course";

export function createMockCourseRepository(source: readonly Course[] = catalog): CourseRepository {
  return {
    search: async (query) =>
      paginate(filterCourses(source, query), query.page ?? 1, query.pageSize ?? COURSES_PER_PAGE),
    getById: async (id) => source.find((course) => course.id === id),
    listByCreator: async (creatorId, limit) =>
      source.filter((course) => course.creatorId === creatorId).slice(0, limit),
  };
}

export const mockCourseRepository = createMockCourseRepository();
