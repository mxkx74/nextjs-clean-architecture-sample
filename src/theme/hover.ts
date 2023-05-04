import { type FlattenSimpleInterpolation, css } from 'styled-components';

export const hover = (content: FlattenSimpleInterpolation) => css`
  &:focus-visible {
    ${content};
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      ${content};
    }
  }
`;
