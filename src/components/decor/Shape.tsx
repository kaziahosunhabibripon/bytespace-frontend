import type { CSSProperties } from "react";
import { shapeUrl } from "@/lib/assets";
import type { ShapeSpec } from "@/types/decor";
import styles from "./Shape.module.css";

/** One decorative 3D shape, positioned by its center inside a `Stage`. */
export function Shape({ spec }: { spec: ShapeSpec }) {
  const { name, tone, cx, cy, size, rotate = 0, flip = false } = spec;
  const style: CSSProperties = {
    left: cx - size / 2,
    top: cy - size / 2,
    width: size,
    height: size,
    transform: `rotate(${rotate}deg)${flip ? " scaleX(-1)" : ""}`,
  };
  return (
    <img className={styles.shape} src={shapeUrl(name, tone)} alt="" style={style} draggable={false} decoding="async" />
  );
}

export function ShapeLayer({ shapes }: { shapes: readonly ShapeSpec[] }) {
  return (
    <>
      {shapes.map((spec) => (
        <Shape key={spec.id} spec={spec} />
      ))}
    </>
  );
}
