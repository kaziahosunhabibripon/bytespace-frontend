import { describe, expect, it } from "vitest";
import { courseDetails } from "@/data/courseDetails";
import { parseCourseTab } from "@/lib/courseTabs";
import { filterReviews } from "@/lib/reviews";

describe("filterReviews", () => {
  const { items } = courseDetails.reviews;

  it("returns a copy of every review for the 'all' filter", () => {
    const result = filterReviews(items, "all");
    expect(result).toEqual(items);
    expect(result).not.toBe(items);
  });

  it("keeps only reviews with the chosen rating", () => {
    expect(filterReviews(items, 5)).toHaveLength(items.length);
    expect(filterReviews(items, 1)).toEqual([]);
  });
});

describe("parseCourseTab", () => {
  it("treats a missing tab as About", () => {
    expect(parseCourseTab(undefined)).toBe("about");
  });

  it("accepts the named tabs and rejects anything else", () => {
    expect(parseCourseTab("lessons")).toBe("lessons");
    expect(parseCourseTab("reviews")).toBe("reviews");
    expect(parseCourseTab("about")).toBeNull();
    expect(parseCourseTab("nope")).toBeNull();
  });
});
