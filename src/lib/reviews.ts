import type { RatingFilter, Review } from "@/types/content";

export function filterReviews(reviews: readonly Review[], filter: RatingFilter): Review[] {
  return filter === "all" ? [...reviews] : reviews.filter((review) => review.rating === filter);
}
