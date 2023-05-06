export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  tooltip: 1000,
  sticky: 1100,
  overlay: 1200,
  modal: 1300,
  toast: 1400,
  corner: 10000,
} as const;

export type ZIndex = typeof zIndex;
