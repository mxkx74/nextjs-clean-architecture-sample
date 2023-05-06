/* eslint-disable @typescript-eslint/indent */
import { CSSProperties, FC, ReactNode } from 'react';
import classNames from 'classnames';
import styled, { css } from 'styled-components';
import { useMatchMedia } from '@/hooks/useMatchMedia';
import { spacing as space, uiColor } from '@/theme';

type FlexDirection = 'row' | 'column';
type FlexDirectionList<T = FlexDirection> = [T, T];
type Spacing = keyof typeof space;
type SpacingList<T = Spacing> = [T, T];

type Props = {
  /**
   * wrapperのtag
   * @default div
   */
  as?: 'div' | 'section' | 'article';
  /** スペース(flex gap)
   * 配列の場合第一要素がsp、第二要素がpc
   * @default M
   */
  spacing?: SpacingList | Spacing;
  /**
   * リストの方向(flex direction)
   * 配列の場合第一要素がsp、第二要素がpc
   * @default row
   * @type 'row' | 'column' | ('row' | 'column')[]
   */
  direction?: FlexDirectionList | FlexDirection;
  /**
   * 縦のalign
   * @default initial
   * @type  "inherit" | "initial" | "revert" | "unset" | "-moz-initial" | "center" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "start" | "baseline" | "normal" | "stretch"
   */
  align?: CSSProperties['alignItems'];
  /** 横のalign
   * @default flex-start
   * @type  "inherit" | "initial" | "revert" | "unset" | "-moz-initial" | "left" | "normal" | "right" | "space-around" | "space-between" | "space-evenly" | "stretch" | "center" | "end" | "flex-end" | "flex-start" | "start"
   */
  justify?: CSSProperties['justifyContent'];
  /** 折り返し
   * @default unset
   */
  wrap?: boolean;
  /** アイテムの区切り */
  divider?: boolean;
  className?: string;
  children?: ReactNode;
};

export const Stack: FC<Props> = ({
  as = 'div',
  children,
  className,
  direction = 'row',
  spacing = 'M',
  wrap = false,
  divider = false,
  ...props
}) => {
  const isSp = useMatchMedia('sp');
  const [spDirection, pcDirection] = !Array.isArray(direction) ? [direction] : direction;
  const [spSpacing, pcSpacing] = !Array.isArray(spacing) ? [spacing] : spacing;
  const currentDirection = isSp ? spDirection : pcDirection || spDirection;
  const currentSpacing = isSp ? spSpacing : pcSpacing || spSpacing;
  const wrapperClass = classNames(className, currentDirection, { wrap });

  return (
    <Wrapper
      as={as}
      className={wrapperClass}
      spacing={currentSpacing}
      direction={currentDirection}
      divider={divider}
      {...props}
      data-testid="stack"
    >
      {children}
    </Wrapper>
  );
};

type WrapperProps = Omit<Props, 'spacing' | 'direction'> & {
  direction: FlexDirection;
  spacing: Spacing;
};

const Wrapper = styled.div<WrapperProps>`
  ${({ spacing, direction, divider, align, justify }) => {
    const gap = `${space[spacing]}px`;
    const divide = divider ? 'block' : 'none';
    const alignItems = align || 'initial';
    const justifyContents = justify || 'flex-start';
    const dividePosition = -space[spacing] / 2;

    return css`
      // stackのスタイル
      display: flex;
      column-gap: ${gap};
      row-gap: ${gap};
      flex-direction: ${direction};
      align-items: ${alignItems};
      justify-content: ${justifyContents};

      &.wrap {
        flex-wrap: wrap;
      }

      // childrenのスタイル
      > * {
        position: relative;

        &:not(:last-child) {
          &::after {
            content: '';
            position: absolute;
            display: ${divide};
            background-color: ${uiColor.text.border};
          }
        }
      }

      // dividerのスタイル
      &.row {
        > * {
          &:not(:last-child)::after {
            width: 1px;
            height: 100%;
            top: 0;
            right: ${dividePosition}px;
          }
        }
      }

      // dividerのスタイル
      &.column {
        > * {
          &:not(:last-child)::after {
            height: 1px;
            width: 100%;
            left: 0;
            bottom: ${dividePosition}px;
          }
        }
      }
    `;
  }}
`;
