import { describe, expect, it } from "vitest";
import { COURSES_PER_PAGE, courses } from "@/data/courses";
import { createMockCourseRepository } from "@/services/mockCourseRepository";

describe("mock course repository", () => {
  const repository = createMockCourseRepository();

  it("serves the first page of the catalogue by default", async () => {
    const page = await repository.search({});
    expect(page.items).toHaveLength(COURSES_PER_PAGE);
    expect(page.page).toBe(1);
    expect(page.total).toBe(courses.length);
    expect(page.pageCount).toBe(Math.ceil(courses.length / COURSES_PER_PAGE));
  });

  it("filters by text and category", async () => {
    const page = await repository.search({ text: "big data", category: "Data Science" });
    expect(page.items.length).toBeGreaterThan(0);
    expect(page.items.every((course) => course.title.toLowerCase().includes("big data"))).toBe(true);
  });

  it("finds a course by id and returns undefined for unknown ids", async () => {
    expect((await repository.getById(2))?.title).toBe("Build Digital Asset");
    expect(await repository.getById(9999)).toBeUndefined();
  });

  it("lists a creator's courses up to the limit", async () => {
    const list = await repository.listByCreator(1, 6);
    expect(list).toHaveLength(6);
    expect(list.every((course) => course.creatorId === 1)).toBe(true);
  });
});
