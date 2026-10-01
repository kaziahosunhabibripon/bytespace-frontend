const base = import.meta.env.BASE_URL;

/** Resolves a file in `public/` so the app also works when deployed under a sub-path. */
export const assetUrl = (path: string): string => `${base}${path.replace(/^\/+/, "")}`;

/** Photos, avatars and course covers live in `public/img` as WebP. */
export const imageUrl = (name: string): string => assetUrl(`img/${name}.webp`);

export const shapeUrl = (name: string, tone: string): string => assetUrl(`img/shape-${name}-${tone}.webp`);
