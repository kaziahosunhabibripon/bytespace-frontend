import { pageNumbers } from "@/lib/pagination";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";
import styles from "./Pagination.module.css";

interface PaginationProps {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ page, pageCount, onPageChange }: PaginationProps) {
  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <button
        type="button"
        className={cn(styles.arrow, styles.previous)}
        aria-label="Previous page"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
      >
        <Icon name="chevronLeft" size={26} />
      </button>
      {pageNumbers(pageCount).map((number) => (
        <button
          key={number}
          type="button"
          className={cn(styles.number, number === page && styles.current)}
          aria-current={number === page ? "page" : undefined}
          aria-label={`Page ${number}`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}
      <button
        type="button"
        className={cn(styles.arrow, styles.next)}
        aria-label="Next page"
        disabled={page >= pageCount}
        onClick={() => onPageChange(page + 1)}
      >
        <Icon name="chevronRight" size={26} />
      </button>
    </nav>
  );
}
