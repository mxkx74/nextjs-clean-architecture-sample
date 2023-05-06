export const spacing = {
  XS: 4,
  S: 8,
  M: 12,
  L: 16,
  XL: 20,
  XXL: 24,
  '3XL': 32,
  '4XL': 40,
  '5XL': 48,
  '6XL': 64,
  '7XL': 80,
} as const;

export type Spacing = typeof spacing;
