import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { DEFAULT_CATEGORY, levelOptions, searchCategories, sortOptions } from "@/data/taxonomy";
import { useCourseSearch } from "@/hooks/useCourses";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import type { CourseLevel, CourseSort } from "@/types/course";
import { CourseList } from "@/components/course/CourseList";
import { FilterBar } from "@/components/course/FilterBar";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Heading } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
import { Pagination } from "@/components/ui/Pagination";
import { SearchField } from "@/components/ui/SearchField";
import styles from "./SearchPage.module.css";

const PARAM = { text: "q", category: "category", level: "level", sort: "sort", page: "page" } as const;

const isLevel = (value: string): value is CourseLevel => levelOptions.some((option) => option.value === value);
const isSort = (value: string): value is CourseSort => sortOptions.some((option) => option.value === value);

export default function SearchPage() {
  useDocumentTitle("Courses");
  const [params, setParams] = useSearchParams();

  const text = params.get(PARAM.text) ?? "";
  const category = params.get(PARAM.category) ?? DEFAULT_CATEGORY;
  const levelParam = params.get(PARAM.level);
  const level: CourseLevel | "all" = levelParam && isLevel(levelParam) ? levelParam : "all";
  const sortParam = params.get(PARAM.sort);
  const sort: CourseSort = sortParam && isSort(sortParam) ? sortParam : "relevant";
  const page = Math.max(1, Number(params.get(PARAM.page)) || 1);

  const { data } = useCourseSearch({ text, category, level: level === "all" ? undefined : level, sort, page });
  const chipsRef = useRef<HTMLDivElement>(null);

  /** Writes filters to the URL so results are shareable; changing a filter goes back to page 1. */
  const update = (changes: Partial<Record<(typeof PARAM)[keyof typeof PARAM], string | undefined>>) => {
    const next = new URLSearchParams(params);
    Object.entries(changes).forEach(([key, value]) => (value ? next.set(key, value) : next.delete(key)));
    if (!("page" in changes)) next.delete(PARAM.page);
    setParams(next, { replace: true });
  };

  return (
    <>
      <PageHero className={styles.hero}>
        <Heading level={1} size="title" tone="white" align="center" className={styles.title}>
          Find Your Next Course
        </Heading>
        <form className={styles.search} role="search" onSubmit={(event) => event.preventDefault()}>
          <SearchField
            value={text}
            onChange={(value) => update({ [PARAM.text]: value })}
            placeholder="Search"
            label="Search courses"
          />
          <Button size="lg" className={styles.scope}>
            Courses
            <Icon name="chevronDown" size={20} />
          </Button>
        </form>
      </PageHero>

      <Container as="main" id="main" className={styles.main}>
        <FilterBar
          level={level}
          onLevelChange={(next) => update({ [PARAM.level]: next === "all" ? undefined : next })}
          sort={sort}
          onSortChange={(next) => update({ [PARAM.sort]: next === "relevant" ? undefined : next })}
          onReset={() => update({ [PARAM.text]: undefined, [PARAM.category]: undefined, [PARAM.level]: undefined })}
          onCategoryClick={() => chipsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
        />
        <div className={styles.chips} ref={chipsRef}>
          {searchCategories.map((label) => (
            <Chip
              key={label}
              selected={label === category}
              onClick={() => update({ [PARAM.category]: label === DEFAULT_CATEGORY ? undefined : label })}
            >
              {label}
            </Chip>
          ))}
        </div>

        <div className={styles.results}>
          <CourseList
            courses={data?.items}
            emptyMessage="No courses match your search. Try clearing the filters."
            skeletonCount={18}
          />
        </div>

        {data && data.pageCount > 1 ? (
          <div className={styles.pagination}>
            <Pagination
              page={data.page}
              pageCount={data.pageCount}
              onPageChange={(next) => update({ [PARAM.page]: String(next) })}
            />
          </div>
        ) : null}
      </Container>
    </>
  );
}
