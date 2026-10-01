import type { ShapeSpec } from "@/types/decor";

/**
 * Placement of the 3D shapes, fitted against the Figma frames (centers in design pixels,
 * relative to the top-left corner of the section they belong to).
 */
export const heroShapes = {
  behind: [
    { id: "hero-lime-spring", name: "spring", tone: "lime", cx: 71, cy: 414, size: 384.6 },
    { id: "hero-white-spring", name: "spring", tone: "white", cx: 273, cy: 567, size: 175.3, rotate: 134.5 },
    {
      id: "hero-white-pyramid",
      name: "pyramid",
      tone: "white",
      cx: 1214,
      cy: 562,
      size: 186.6,
      rotate: 30,
      flip: true,
    },
    { id: "hero-lime-cylinder", name: "cylinder", tone: "lime", cx: 1411, cy: 404, size: 370.5, rotate: 180 },
  ],
  inFront: [
    { id: "hero-white-torus", name: "torus", tone: "white", cx: 186, cy: 847, size: 341.3, rotate: 180 },
    { id: "hero-white-spring-2", name: "spring2", tone: "white", cx: 1289, cy: 837, size: 332.5 },
  ],
} satisfies Record<string, ShapeSpec[]>;

export const growthShapes = {
  nearCard: { id: "growth-lime-spring-card", name: "spring2", tone: "lime", cx: 1269, cy: 295, size: 215 },
  nearCreator: {
    id: "growth-lime-spring-creator",
    name: "spring",
    tone: "lime",
    cx: 531,
    cy: 965,
    size: 215.3,
    rotate: 0.5,
  },
} satisfies Record<string, ShapeSpec>;

export const ctaShapes: readonly ShapeSpec[] = [
  { id: "cta-lime-spring", name: "spring", tone: "lime", cx: 71, cy: 31, size: 385, rotate: -0.5 },
  { id: "cta-white-spring", name: "spring2", tone: "white", cx: 265, cy: 85, size: 175.3, rotate: 135, flip: true },
  { id: "cta-lime-pyramid", name: "pyramid", tone: "lime", cx: 1172, cy: 94, size: 189 },
  {
    id: "cta-white-cylinder",
    name: "cylinder",
    tone: "white",
    cx: 1408,
    cy: 190,
    size: 373,
    rotate: 127.5,
    flip: true,
  },
  { id: "cta-white-cone", name: "cone", tone: "white", cx: 44, cy: 319, size: 187.6 },
  { id: "cta-lime-torus", name: "torus", tone: "lime", cx: 186, cy: 465, size: 341.3, rotate: 111.5, flip: true },
  { id: "cta-lime-spring-2", name: "spring2", tone: "lime", cx: 1272, cy: 455, size: 332.5 },
];

export const authShapes = {
  overCards: [
    { id: "auth-lime-torus", name: "torus", tone: "lime", cx: 223, cy: 392, size: 146, rotate: 291.5, flip: true },
    { id: "auth-lime-pyramid", name: "pyramid", tone: "lime", cx: 205, cy: 800, size: 190, rotate: 30, flip: true },
  ],
  topmost: {
    id: "auth-white-spring",
    name: "spring",
    tone: "white",
    cx: 557,
    cy: 709,
    size: 192.4,
    rotate: -1.5,
    flip: true,
  },
} satisfies { overCards: ShapeSpec[]; topmost: ShapeSpec };
