import type { LearningPath } from "@/types/content";
import type { CourseLevel, CourseSort } from "@/types/course";
import type { IconName } from "@/types/icon";

interface FilterControl {
  label: string;
  icon: IconName;
  iconSize: number;
}

/** Triggers shown above course lists (search page and creator profile). */
export const filterBarConfig: { filters: readonly FilterControl[]; sort: FilterControl } = {
  filters: [
    { label: "Filter", icon: "funnel", iconSize: 20 },
    { label: "Level", icon: "bars", iconSize: 20 },
    { label: "Category", icon: "category", iconSize: 22 },
  ],
  sort: { label: "Most relevant", icon: "sort", iconSize: 22 },
};

/** Options behind the Level / Category / sort triggers above course lists. */
export const levelOptions = [
  { value: "all", label: "All levels" },
  { value: "Beginner", label: "Beginner" },
  { value: "Intermediate", label: "Intermediate" },
  { value: "Advanced", label: "Advanced" },
] as const satisfies readonly { value: CourseLevel | "all"; label: string }[];

export const sortOptions = [
  { value: "relevant", label: "Most relevant" },
  { value: "rating", label: "Highest rated" },
  { value: "price-low", label: "Price: low to high" },
  { value: "price-high", label: "Price: high to low" },
] as const satisfies readonly { value: CourseSort; label: string }[];

/** Category chips on the home page, one array per visual row. */
export const homeCategoryRows: readonly (readonly string[])[] = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  ["Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography"],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

/** Category chips on the search page (a single row). */
export const searchCategories: readonly string[] = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
  "Photography",
  "Web Development",
];

export const DEFAULT_CATEGORY = "Featured";

export const learningPaths: readonly LearningPath[] = [
  { id: "design", label: "Design", icon: "pathDesign" },
  { id: "development", label: "Development", icon: "pathDevelopment" },
  { id: "it-software", label: "IT & Software", icon: "pathIt" },
  { id: "business", label: "Business", icon: "pathBusiness" },
  { id: "marketing", label: "Marketing", icon: "pathMarketing" },
  { id: "photography", label: "Photography", icon: "pathPhotography" },
];
