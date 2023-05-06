import { font } from './font';

const defaultHtmlFontSize = font.size.L;

export const pxToRem = (size: number): `${number}rem` => `${size / defaultHtmlFontSize}rem`;
