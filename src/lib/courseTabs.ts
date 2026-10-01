import type { CourseTab } from "@/types/course";

const NAMED_TABS: readonly CourseTab[] = ["lessons", "reviews"];

/** Maps the `:tab` route param to a tab. No param means "about"; unknown values return `null`. */
export function parseCourseTab(param: string | undefined): CourseTab | null {
  if (param === undefined) return "about";
  return NAMED_TABS.find((tab) => tab === param) ?? null;
}
