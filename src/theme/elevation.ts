export const elevation = {
  depth1: '0px 0px 4px rgba(31, 42, 52, 0.06), 0px 1px 2px rgba(31, 42, 52, 0.12)',
  depth2: '0px 0px 12px rgba(31, 42, 52, 0.08), 0px 2px 6px rgba(31, 42, 52, 0.1)',
  depth3: '0px 0px 24px rgba(31, 42, 52, 0.09), 0px 4px 12px rgba(31, 42, 52, 0.07)',
  depth4: '0px 0px 48px rgba(31, 42, 52, 0.11), 0px 8px 24px rgba(31, 42, 52, 0.05)',
} as const;

export type Elevation = typeof elevation;
