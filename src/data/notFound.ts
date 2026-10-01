import { paths } from "@/lib/paths";

export const notFoundContent = {
  code: "404",
  titleLines: ["The page you are looking", "for doesn’t exist"],
  text: "Try to use a correct url or go back to homepage to start again",
  action: { label: "Back to Home", to: paths.home },
} as const;
