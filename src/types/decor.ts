export type ShapeName = "spring" | "spring2" | "pyramid" | "torus" | "cylinder" | "cone";
export type ShapeTone = "lime" | "white";

/**
 * A decorative 3D shape, placed by its center point in Figma design pixels.
 * `layer` decides whether it paints behind or in front of the section's main content.
 */
export interface ShapeSpec {
  id: string;
  name: ShapeName;
  tone: ShapeTone;
  cx: number;
  cy: number;
  size: number;
  rotate?: number;
  flip?: boolean;
  layer?: "back" | "front";
}
