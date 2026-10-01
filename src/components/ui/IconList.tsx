import { cn } from "@/lib/cn";
import type { IconListItem } from "@/types/content";
import type { IconName } from "@/types/icon";
import { Icon } from "./Icon";
import styles from "./IconList.module.css";

type Size = "sm" | "md";

interface IconListProps {
  items: readonly IconListItem[];
  /** Icon used for items that do not define their own. */
  defaultIcon?: IconName;
  size?: Size;
  className?: string;
}

/** A vertical list where every row starts with a blue icon (checklists, "what's included", ...). */
export function IconList({ items, defaultIcon = "checkCircle", size = "sm", className }: IconListProps) {
  return (
    <ul className={cn(styles.list, styles[size], className)}>
      {items.map((item) => (
        <li key={item.label} className={styles.item}>
          <Icon name={item.icon ?? defaultIcon} size={22} className={styles.icon} />
          {item.label}
        </li>
      ))}
    </ul>
  );
}
