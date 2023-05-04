import { type FlattenSimpleInterpolation } from 'styled-components';

export const mediaSize = {
  sp: '(max-width: 599px)',
  tab: '(min-width: 600px)',
  pc: '(min-width: 1025px)',
} as const;

export const mediaQuery = {
  sp: (style: FlattenSimpleInterpolation): string => `@media screen and ${mediaSize.sp} {${style.join('')}}`,
  tab: (style: FlattenSimpleInterpolation): string => `@media screen and ${mediaSize.tab} {${style.join('')}}`,
  pc: (style: FlattenSimpleInterpolation): string => `@media screen and ${mediaSize.pc} {${style.join('')}}`,
};
