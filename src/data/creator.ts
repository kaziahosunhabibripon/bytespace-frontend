import type { Creator } from "@/types/content";

export const creators: readonly Creator[] = [
  {
    id: 1,
    name: "PurePearl Studio",
    avatar: "a02",
    headline: "Passionate UI/UX, Web designer",
    badge: "Creator",
    bio: [
      "Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
      "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
    ],
    productCount: 3,
    followerCount: 12,
  },
];

export const creatorLabels = {
  products: "Products",
  followers: "Followers",
  follow: "Follow",
} as const;
