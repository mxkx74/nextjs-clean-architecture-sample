import { ComponentProps, ComponentPropsWithRef, ElementType, PropsWithoutRef, forwardRef } from 'react';
import styled from 'styled-components';
import { radius, spacing, uiColor } from '@/theme';

type ButtonElement = 'button' | 'a';

type RefType<T extends ElementType = ButtonElement> = PropsWithoutRef<ComponentProps<T>>[string];

type Props<T extends ElementType = ButtonElement> = {
  tag?: T;
  children?: React.ReactNode;
} & Omit<ComponentPropsWithRef<T>, 'tag'>;

const Component = <T extends ElementType = ButtonElement>(
  { tag, children, ...props }: Props<T>,
  ref: RefType<T>
): JSX.Element => {
  const Tag = tag || 'button';
  return (
    <Wrapper>
      <Tag {...props} ref={ref}>
        {children}
      </Tag>
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
    border-radius: ${radius.large}px;
    background: ${uiColor.primary.main};

    &:disabled {
      cursor: none;
      opacity: 0.5;
    }
  }
`;
