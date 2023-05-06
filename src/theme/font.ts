export const font = {
  letterSpacing: {
    NONE: 0,
    NORMAL: 0.04,
    RELAXED: 0.13,
  },

  lineHeight: {
    NONE: 1,
    TIGHT: 1.3,
    NORMAL: 1.5,
    RELAXED: 1.7,
  },

  weight: {
    REGULAR: 400,
    MEDIUM: 500,
    BOLD: 700,
  },

  size: {
    XXS: 10,
    XS: 11,
    S: 12,
    M: 14,
    L: 16,
    XL: 18,
    XXL: 20,
    '3XL': 24,
    '4XL': 32,
    '5XL': 40,
  },
  family: {
    body: '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
  },
} as const;

export type Font = typeof font;
