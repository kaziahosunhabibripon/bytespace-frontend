import { describe, expect, it } from "vitest";
import { clamp, pageNumbers, paginate } from "@/lib/pagination";

describe("paginate", () => {
  const items = Array.from({ length: 10 }, (_, index) => index + 1);

  it("returns the requested slice and page count", () => {
    expect(paginate(items, 2, 4)).toEqual({ items: [5, 6, 7, 8], page: 2, pageCount: 3, total: 10 });
  });

  it("clamps pages that are out of range", () => {
    expect(paginate(items, 99, 4).page).toBe(3);
    expect(paginate(items, 0, 4).page).toBe(1);
    expect(paginate(items, Number.NaN, 4).page).toBe(1);
  });

  it("always reports at least one page", () => {
    expect(paginate([], 1, 4)).toEqual({ items: [], page: 1, pageCount: 1, total: 0 });
  });
});

describe("pageNumbers", () => {
  it("counts from 1", () => {
    expect(pageNumbers(3)).toEqual([1, 2, 3]);
  });
});

describe("clamp", () => {
  it("keeps values inside the range", () => {
    expect(clamp(5, 1, 3)).toBe(3);
    expect(clamp(-5, 1, 3)).toBe(1);
    expect(clamp(2, 1, 3)).toBe(2);
  });
});
