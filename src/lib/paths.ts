import type { CourseTab } from "@/types/course";

/** Single source of truth for every URL in the app. */
export const paths = {
  home: "/",
  search: "/search",
  login: "/login",
  register: "/register",
  course: (id: number | string, tab: CourseTab = "about") =>
    tab === "about" ? `/courses/${id}` : `/courses/${id}/${tab}`,
  creator: (id: number | string) => `/creators/${id}`,
} as const;
