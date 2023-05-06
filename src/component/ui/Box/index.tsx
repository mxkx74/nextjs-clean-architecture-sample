import { ComponentPropsWithoutRef, CSSProperties, type FC, type ReactNode } from 'react';
import styled from 'styled-components';

type BoxType = 'div' | 'span';

type Props = {
  as?: BoxType;
  style?: CSSProperties;
  children?: ReactNode;
};

type ComponentProps = ComponentPropsWithoutRef<'div' | 'span'> & Props;

export const Box: FC<ComponentProps> = ({ children, as = 'div', ...props }) => {
  return (
    <Wrapper as={as} {...props}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<ComponentProps>`
  display: inline-block;
`;
