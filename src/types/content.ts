import type { CourseTab } from "@/types/course";
import type { IconName } from "@/types/icon";

export interface NavItem {
  label: string;
  to: string;
  end?: boolean;
}

/** A footer entry. Entries without a route render as plain text until their page exists. */
export interface FooterLink {
  label: string;
  to?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  /** The first card in the design is set slightly tighter than the other two. */
  spacing?: "tight";
}

export interface LearningPath {
  id: string;
  label: string;
  icon: IconName;
}

export interface IconListItem {
  label: string;
  icon?: IconName;
}

export interface CourseModule {
  title: string;
  summary: string;
}

export interface SidebarLesson {
  number: string;
  title: string;
  duration: string;
}

export interface RatingBucket {
  stars: 1 | 2 | 3 | 4 | 5;
  /** Bar fill, 0-100. */
  percent: number;
  count: number;
}

export type RatingFilter = "all" | 1 | 2 | 3 | 4 | 5;

export interface Review {
  id: string;
  author: string;
  avatar: string;
  role: string;
  rating: 1 | 2 | 3 | 4 | 5;
  postedAgo: string;
  text: string;
  /** The first review in the design uses a tighter line height than the rest. */
  spacing?: "tight";
}

export interface CourseTabItem {
  value: CourseTab;
  label: string;
}

export interface Creator {
  id: number;
  name: string;
  avatar: string;
  headline: string;
  badge: string;
  bio: readonly string[];
  productCount: number;
  followerCount: number;
}

export type AuthMode = "login" | "register";

export interface AuthField {
  name: string;
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
  autoComplete: string;
}

export interface AuthCopy {
  heading: string;
  lead: string;
  kicker: string;
  title: string;
  submitLabel: string;
  fields: readonly AuthField[];
  switchPrompt: { text: string; label: string; to: string };
  socialProviders: readonly ("facebook" | "google")[];
}
