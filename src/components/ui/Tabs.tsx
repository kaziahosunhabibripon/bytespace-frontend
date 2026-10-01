import { createContext, useContext, useId, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./Tabs.module.css";

interface TabsContextValue {
  value: string;
  onValueChange: (value: string) => void;
  idPrefix: string;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabs(): TabsContextValue {
  const context = useContext(TabsContext);
  if (!context) throw new Error("Tabs components must be rendered inside <Tabs>");
  return context;
}

interface TabsProps {
  value: string;
  onValueChange: (value: string) => void;
  children: ReactNode;
}

/**
 * Accessible tabs as a compound component: `<Tabs><Tabs.List><Tabs.Tab/></Tabs.List><Tabs.Panel/></Tabs>`.
 * The selected value is controlled, so it can live in the URL.
 */
export function Tabs({ value, onValueChange, children }: TabsProps) {
  const idPrefix = useId();
  return <TabsContext.Provider value={{ value, onValueChange, idPrefix }}>{children}</TabsContext.Provider>;
}

function TabList({ label, className, children }: { label: string; className?: string; children: ReactNode }) {
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const keys = ["ArrowLeft", "ArrowRight", "Home", "End"];
    if (!keys.includes(event.key)) return;
    const tabs = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
    const current = tabs.findIndex((tab) => tab === document.activeElement);
    if (current === -1) return;
    event.preventDefault();
    const last = tabs.length - 1;
    const next =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? last
          : event.key === "ArrowRight"
            ? (current + 1) % tabs.length
            : (current - 1 + tabs.length) % tabs.length;
    tabs[next]?.focus();
    tabs[next]?.click();
  };

  return (
    // The tablist container only forwards arrow-key navigation to the focusable tabs inside it.
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    <div role="tablist" aria-label={label} className={cn(styles.list, className)} onKeyDown={onKeyDown}>
      {children}
    </div>
  );
}

function Tab({ value, children }: { value: string; children: ReactNode }) {
  const context = useTabs();
  const selected = context.value === value;
  return (
    <button
      type="button"
      role="tab"
      id={`${context.idPrefix}-tab-${value}`}
      aria-selected={selected}
      aria-controls={`${context.idPrefix}-panel-${value}`}
      tabIndex={selected ? 0 : -1}
      className={cn(styles.tab, selected && styles.selected)}
      onClick={() => context.onValueChange(value)}
    >
      {children}
    </button>
  );
}

function TabPanel({ value, className, children }: { value: string; className?: string; children: ReactNode }) {
  const context = useTabs();
  if (context.value !== value) return null;
  return (
    <div
      role="tabpanel"
      id={`${context.idPrefix}-panel-${value}`}
      aria-labelledby={`${context.idPrefix}-tab-${value}`}
      className={className}
    >
      {children}
    </div>
  );
}

Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panel = TabPanel;
