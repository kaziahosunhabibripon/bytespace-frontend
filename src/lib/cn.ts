type ClassValue = string | false | null | undefined;

/** Joins truthy class names. Tiny replacement for `clsx` since we only need conditional joining. */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
