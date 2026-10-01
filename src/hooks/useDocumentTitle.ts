import { useEffect } from "react";
import { siteConfig } from "@/data/site";

/** Sets `<title>` for the current page, e.g. "Courses | ByteSpace". */
export function useDocumentTitle(title?: string): void {
  useEffect(() => {
    document.title = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  }, [title]);
}
