export const radius = {
  none: 0,
  regular: 3,
  large: 6,
} as const;

export type Radius = typeof radius;
