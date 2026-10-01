import { useAsync } from "@/hooks/useAsync";
import { useCourseRepository } from "@/services/CourseRepositoryContext";
import type { CourseQuery } from "@/types/course";

export function useCourseSearch({ text, category, page, pageSize }: CourseQuery) {
  const repository = useCourseRepository();
  return useAsync(
    () => repository.search({ text, category, page, pageSize }),
    [repository, text, category, page, pageSize],
  );
}

export function useCourse(id: number) {
  const repository = useCourseRepository();
  return useAsync(() => repository.getById(id), [repository, id]);
}

export function useCreatorCourses(creatorId: number, limit: number) {
  const repository = useCourseRepository();
  return useAsync(() => repository.listByCreator(creatorId, limit), [repository, creatorId, limit]);
}
