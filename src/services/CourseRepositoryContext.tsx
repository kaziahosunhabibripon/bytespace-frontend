import { createContext, useContext, type ReactNode } from "react";
import type { CourseRepository } from "@/services/courseRepository";
import { mockCourseRepository } from "@/services/mockCourseRepository";

const CourseRepositoryContext = createContext<CourseRepository>(mockCourseRepository);

interface ProviderProps {
  repository?: CourseRepository;
  children: ReactNode;
}

export function CourseRepositoryProvider({ repository = mockCourseRepository, children }: ProviderProps) {
  return <CourseRepositoryContext.Provider value={repository}>{children}</CourseRepositoryContext.Provider>;
}

export function useCourseRepository(): CourseRepository {
  return useContext(CourseRepositoryContext);
}
