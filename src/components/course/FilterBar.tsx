import { levelOptions, sortOptions } from "@/data/taxonomy";
import { Button } from "@/components/ui/Button";
import { Dropdown } from "@/components/ui/Dropdown";
import { Icon } from "@/components/ui/Icon";
import type { CourseLevel, CourseSort } from "@/types/course";
import styles from "./FilterBar.module.css";

interface FilterBarProps {
  level?: CourseLevel | "all";
  onLevelChange?: (level: CourseLevel | "all") => void;
  sort?: CourseSort;
  onSortChange?: (sort: CourseSort) => void;
  /** Clears every active filter. Omit to hide the Filter trigger. */
  onReset?: () => void;
  /** Scrolls the chip row into view. Omit to hide the Category trigger. */
  onCategoryClick?: () => void;
}

/**
 * Filter / Level / Category triggers on the left and the sort trigger on the right.
 * Every trigger is optional: a page that cannot filter simply renders fewer of them.
 */
export function FilterBar({
  level = "all",
  onLevelChange,
  sort = "relevant",
  onSortChange,
  onReset,
  onCategoryClick,
}: FilterBarProps) {
  return (
    <div className={styles.bar}>
      <div className={styles.filters}>
        {onReset ? (
          <Button
            variant="outline"
            size="lg"
            className={styles.control}
            icon={<Icon name="funnel" size={20} />}
            onClick={onReset}
          >
            Filter
          </Button>
        ) : null}
        {onLevelChange ? (
          <Dropdown
            className={styles.control}
            label="Level"
            icon={<Icon name="bars" size={20} />}
            options={levelOptions}
            value={level}
            onChange={onLevelChange}
          />
        ) : null}
        {onCategoryClick ? (
          <Button
            variant="outline"
            size="lg"
            className={styles.control}
            icon={<Icon name="category" size={22} />}
            onClick={onCategoryClick}
          >
            Category
          </Button>
        ) : null}
      </div>

      {onSortChange ? (
        <Dropdown
          className={styles.control}
          label="Most relevant"
          icon={<Icon name="sort" size={22} />}
          options={sortOptions}
          value={sort}
          onChange={onSortChange}
        />
      ) : null}
    </div>
  );
}
