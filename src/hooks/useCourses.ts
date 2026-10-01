import { useAsync } from "@/hooks/useAsync";
import { filterCourses } from "@/lib/courses";
import { useCourseRepository } from "@/services/CourseRepositoryContext";
import type { CourseQuery } from "@/types/course";

export function useCourseSearch({ text, category, level, sort, page, pageSize }: CourseQuery) {
  const repository = useCourseRepository();
  return useAsync(
    () => repository.search({ text, category, level, sort, page, pageSize }),
    [repository, text, category, level, sort, page, pageSize],
  );
}

export function useCourse(id: number) {
  const repository = useCourseRepository();
  return useAsync(() => repository.getById(id), [repository, id]);
}

/**
 * A creator's courses, filtered and sorted client-side. The repository only knows how to
 * list a creator's catalogue, so the extra `CourseQuery` fields are applied here.
 */
export function useCreatorCourses(creatorId: number, limit: number, query: CourseQuery = {}) {
  const repository = useCourseRepository();
  const { level, sort } = query;
  return useAsync(
    async () =>
      filterCourses(await repository.listByCreator(creatorId, creatorId ? Number.MAX_SAFE_INTEGER : 0), query).slice(
        0,
        limit,
      ),
    [repository, creatorId, limit, level, sort],
  );
}
