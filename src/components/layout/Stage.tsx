import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { gridStyles } from "./GridSection";
import styles from "./Stage.module.css";

const DESIGN_WIDTH = 1440;

interface StageProps {
  /** Height of the section in Figma design pixels. */
  height: number;
  /** Paint the blue grid behind the section. */
  grid?: boolean;
  className?: string;
  children: ReactNode;
}

/**
 * A section laid out on the 1440px Figma canvas. Children are positioned in design pixels
 * (see `Abs`); the canvas scales down on narrow screens and stays centred on wide ones.
 */
export function Stage({ height, grid = false, className, children }: StageProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const element = wrapRef.current;
    if (!element) return;
    const update = () => setScale(Math.min(1, element.clientWidth / DESIGN_WIDTH));
    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapRef}
      className={cn(styles.wrap, grid && gridStyles.grid, className)}
      data-surface={grid ? "dark" : undefined}
      style={{ height: height * scale, "--s": scale } as CSSProperties}
    >
      <div
        className={styles.stage}
        style={{
          width: DESIGN_WIDTH,
          height,
          transform: `scale(${scale})`,
          marginLeft: scale < 1 ? 0 : `calc(50% - ${DESIGN_WIDTH / 2}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
