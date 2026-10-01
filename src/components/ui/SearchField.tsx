import { Icon } from "./Icon";
import styles from "./SearchField.module.css";

interface SearchFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  /** Accessible name; the design shows only the placeholder. */
  label: string;
  name?: string;
}

/** White pill with a magnifier, used in the hero and on the search page. */
export function SearchField({ value, onChange, placeholder, label, name = "q" }: SearchFieldProps) {
  return (
    <label className={styles.field}>
      <span className="visually-hidden">{label}</span>
      <Icon name="search" size={18} />
      <input
        className={styles.input}
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        enterKeyHint="search"
        autoComplete="off"
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
