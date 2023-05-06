import { color } from './color';

export const uiColor = {
  primary: {
    main: color.navy[900],
    medium: color.navy[800],
    light: color.navy[700],
    pale: color.navy[300],
  },

  secondary: {
    main: color.orange[600],
    pale: color.orange[100],
  },

  background: {
    base: color.gray[200],
    light: color.gray[100],
    white: color.white,
  },

  text: {
    white: color.white,
    black: color.gray[900],
    text: color.gray[800],
    light: color.gray[600],
    pale: color.gray[400],
    border: color.gray[300],
    link: color.navy[700],
  },

  overlay: {
    dark: 'rgba(0, 0, 0, 0.7)',
    main: 'rgba(34, 34, 34, 0.6)',
    light: 'rgba(34, 34, 34, 0.3)',
    primary: 'rgba(31, 42, 52, 0.6)',
  },

  error: {
    dark: color.red[800],
    main: color.red[600],
    light: color.red[200],
  },

  warning: {
    dark: color.yellow[800],
    main: color.yellow[400],
    light: color.yellow[200],
  },

  success: {
    dark: color.green[800],
    main: color.green[600],
    light: color.green[200],
  },

  info: {
    dark: color.teal[800],
    main: color.teal[600],
    light: color.teal[200],
  },
} as const;

export type UiColor = typeof uiColor;
