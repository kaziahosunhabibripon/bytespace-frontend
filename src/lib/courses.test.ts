import { describe, expect, it } from "vitest";
import { courses } from "@/data/courses";
import { filterCourses, formatPrice, matchesQuery } from "@/lib/courses";

describe("matchesQuery", () => {
  const figma = courses.find((course) => course.title === "Learn Figma from Basic");

  it("matches the title case-insensitively and ignores surrounding spaces", () => {
    expect(figma && matchesQuery(figma, { text: "  FIGMA " })).toBe(true);
    expect(figma && matchesQuery(figma, { text: "python" })).toBe(false);
  });

  it("matches on category", () => {
    expect(figma && matchesQuery(figma, { category: "UI/UX Design" })).toBe(true);
    expect(figma && matchesQuery(figma, { category: "Music" })).toBe(false);
  });

  it("requires both the text and the category to match", () => {
    expect(figma && matchesQuery(figma, { text: "figma", category: "Music" })).toBe(false);
  });
});

describe("filterCourses", () => {
  it("returns everything for an empty query", () => {
    expect(filterCourses(courses, {})).toHaveLength(courses.length);
  });

  it("returns nothing when no course matches", () => {
    expect(filterCourses(courses, { text: "does not exist" })).toEqual([]);
  });
});

describe("formatPrice", () => {
  it("prefixes a dollar sign", () => {
    expect(formatPrice(25)).toBe("$25");
  });
});
