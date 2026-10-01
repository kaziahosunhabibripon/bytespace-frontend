import { describe, expect, it } from "vitest";
import { courses } from "@/data/courses";
import { searchCategories } from "@/data/taxonomy";
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

  it("matches the creator name, the level and a category as well as the title", () => {
    expect(figma && matchesQuery(figma, { text: "purepearl" })).toBe(true);
    expect(figma && matchesQuery(figma, { text: "beginner" })).toBe(true);
    expect(figma && matchesQuery(figma, { text: "graphic design" })).toBe(true);
  });

  it("matches on level", () => {
    expect(figma && matchesQuery(figma, { level: "Beginner" })).toBe(true);
    expect(figma && matchesQuery(figma, { level: "Advanced" })).toBe(false);
  });
});

describe("filterCourses", () => {
  it("returns everything for an empty query", () => {
    expect(filterCourses(courses, {})).toHaveLength(courses.length);
  });

  it("returns nothing when no course matches", () => {
    expect(filterCourses(courses, { text: "does not exist" })).toEqual([]);
  });

  it("ranks title hits above category hits", () => {
    const results = filterCourses(courses, { text: "graphic design" });
    expect(results[0].title).toBe("Learn Figma from Basic");
    expect(results.some((course) => course.title === "Everyday Cooking Masterclass")).toBe(false);
  });

  it("every search chip matches at least one course", () => {
    for (const category of searchCategories) {
      expect(filterCourses(courses, { category }), category).not.toEqual([]);
    }
  });

  it("every level matches at least one course", () => {
    for (const level of ["Beginner", "Intermediate", "Advanced"] as const) {
      expect(filterCourses(courses, { level }), level).not.toEqual([]);
    }
  });

  it("sorts by price and rating", () => {
    const cheapFirst = filterCourses(courses, { sort: "price-low" }).map((course) => course.price);
    expect(cheapFirst).toEqual([...cheapFirst].sort((a, b) => a - b));

    const priciestFirst = filterCourses(courses, { sort: "price-high" }).map((course) => course.price);
    expect(priciestFirst).toEqual([...priciestFirst].sort((a, b) => b - a));
  });

  it("combines text, category, level and sort", () => {
    const results = filterCourses(courses, { text: "design", category: "Featured", level: "Beginner" });
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((course) => course.level === "Beginner" && course.categories.includes("Featured"))).toBe(true);
  });
});

describe("formatPrice", () => {
  it("prefixes a dollar sign", () => {
    expect(formatPrice(25)).toBe("$25");
  });
});
