import { type ComponentPropsWithoutRef, type FC, type ReactNode } from 'react';
import styled from 'styled-components';
import { font, pxToRem, spacing } from '@/theme';

type Props = {
  children: ReactNode;
};

type ComponentProps = ComponentPropsWithoutRef<'label' | 'span'> & Props;

export const Label: FC<ComponentProps> = ({ children, ...props }) => {
  return (
    <>
      <StyledLabel {...props}>{children}</StyledLabel>
    </>
  );
};

const StyledLabel = styled.label`
  display: block;
  margin-bottom: ${spacing.XS}px;
  /* padding: 0; */
  font-size: ${pxToRem(font.size.M)};
`;
