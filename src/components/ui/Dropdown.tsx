import { useEffect, useId, useRef, useState } from "react";
import { Icon } from "./Icon";
import styles from "./Dropdown.module.css";

interface DropdownOption<T extends string> {
  value: T;
  label: string;
}

interface DropdownProps<T extends string> {
  label: string;
  /** Decorative icon rendered before the label. */
  icon?: React.ReactNode;
  options: readonly DropdownOption<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
}

/**
 * Button that opens a list of options. Closes on outside click and on Escape,
 * and moves focus to the selected option when it opens.
 */
export function Dropdown<T extends string>({ label, icon, options, value, onChange, className }: DropdownProps<T>) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const selected = options.find((option) => option.value === value);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    rootRef.current?.querySelector<HTMLButtonElement>("[data-selected='true']")?.focus();
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className={className} ref={rootRef}>
      <button
        type="button"
        className={styles.trigger}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        onClick={() => setOpen((previous) => !previous)}
      >
        {icon}
        <span>{selected && selected.value !== options[0].value ? selected.label : label}</span>
        <Icon name="chevronDown" size={16} className={styles.chevron} />
      </button>

      {open ? (
        <ul className={styles.list} id={listId}>
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                className={styles.option}
                data-selected={option.value === value}
                aria-current={option.value === value}
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
