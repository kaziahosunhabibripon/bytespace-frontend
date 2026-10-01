import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";
import { imageUrl } from "@/lib/assets";
import styles from "./Avatar.module.css";

interface AvatarProps {
  /** Image name under /img (without extension). */
  image: string;
  size: number;
  className?: string;
}

export function Avatar({ image, size, className }: AvatarProps) {
  return <img className={cn(styles.avatar, className)} src={imageUrl(image)} width={size} height={size} alt="" />;
}

interface AvatarStackProps {
  images: readonly string[];
  size: number;
  /** How many pixels each avatar tucks under its left neighbour. */
  overlap: number;
  /** Label of the trailing "+N" bubble. */
  more?: string;
  moreTone?: "lime" | "dark";
  className?: string;
}

export function AvatarStack({ images, size, overlap, more, moreTone = "lime", className }: AvatarStackProps) {
  const style = { "--size": `${size}px`, "--overlap": `${overlap}px` } as CSSProperties;
  return (
    <div className={cn(styles.stack, className)} style={style}>
      {images.map((image) => (
        <Avatar key={image} image={image} size={size} className={styles.stacked} />
      ))}
      {more ? <span className={cn(styles.more, styles.stacked, styles[moreTone])}>{more}</span> : null}
    </div>
  );
}
