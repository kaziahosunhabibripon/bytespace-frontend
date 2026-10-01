import type { Page } from "@/types/course";

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/** Slices `items` into the requested page, clamping out-of-range page numbers. */
export function paginate<T>(items: readonly T[], page: number, pageSize: number): Page<T> {
  const pageCount = Math.max(1, Math.ceil(items.length / pageSize));
  const current = clamp(Math.trunc(page) || 1, 1, pageCount);
  const start = (current - 1) * pageSize;
  return { items: items.slice(start, start + pageSize), page: current, pageCount, total: items.length };
}

/** `[1, 2, ..., pageCount]` */
export function pageNumbers(pageCount: number): number[] {
  return Array.from({ length: pageCount }, (_, index) => index + 1);
}
