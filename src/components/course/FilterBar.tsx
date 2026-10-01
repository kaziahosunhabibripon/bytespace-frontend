import { filterBarConfig } from "@/data/taxonomy";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import styles from "./FilterBar.module.css";

/** Filter / Level / Category triggers on the left and the sort trigger on the right. */
export function FilterBar() {
  const { filters, sort } = filterBarConfig;
  return (
    <div className={styles.bar}>
      <div className={styles.filters}>
        {filters.map(({ label, icon, iconSize }) => (
          <Button
            key={label}
            variant="outline"
            size="lg"
            className={styles.control}
            icon={<Icon name={icon} size={iconSize} />}
          >
            {label}
          </Button>
        ))}
      </div>
      <Button
        variant="outline"
        size="lg"
        className={styles.control}
        icon={<Icon name={sort.icon} size={sort.iconSize} />}
      >
        {sort.label}
      </Button>
    </div>
  );
}
