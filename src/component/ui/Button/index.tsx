import { ComponentPropsWithRef, ElementType, forwardRef } from 'react';
import styled from 'styled-components';
import { radius, spacing, uiColor } from '@/theme';

type ButtonElement = 'button' | 'a';

type Props<T extends ElementType = ButtonElement> = {
  tag?: T;
} & Omit<ComponentPropsWithRef<T>, 'tag'>;

const Component = <T extends ElementType = ButtonElement>({ tag, ...props }: Props<T>) => {
  const Tag = tag || 'button';
  return (
    <Wrapper>
      <Tag {...props} />
    </Wrapper>
  );
};

export const Button: <T extends ElementType = ButtonElement>(props: Props<T>) => JSX.Element | null =
  forwardRef(Component);

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${radius.large}px;
  background: ${uiColor.primary.main};

  > button,
  > a {
    cursor: pointer;
    color: ${uiColor.text.white};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${spacing.L}px;
    border: none;
    background: transparent;
  }
`;
