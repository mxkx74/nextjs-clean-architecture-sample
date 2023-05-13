import { forwardRef, type ComponentPropsWithRef } from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import { uiColor, spacing, font, pxToRem } from '@/theme';

type Props = {
  type?: Omit<HTMLInputElement['type'], 'radio' | 'checkbox' | 'hidden' | 'submit' | 'reset' | 'button'>;
  complete?: boolean;
  error?: boolean;
  width?: number;
  sizeOf?: 'medium' | 'small' | 'xSmall';
  className?: string;
};

type ComponentProps = ComponentPropsWithRef<'input'> & Props;

export const TextInput = forwardRef<HTMLInputElement, ComponentProps>(
  ({ className, error, disabled, complete, width, sizeOf, ...props }, ref) => {
    const wrapperClass = classNames('textInput', className, sizeOf, {
      disabled,
      error,
      complete,
    });

    return (
      <Wrapper className={wrapperClass} width={width}>
        <Input disabled={disabled} {...props} ref={ref} />
        {/* {complete && !error && <Icon type="Check" fill={uiColor.success.main} size={spacing.XXL} />} */}
      </Wrapper>
    );
  }
);

const fontSize = font.size.M;

const Wrapper = styled.div<{ width?: number }>`
  position: relative;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  border-radius: 3px;
  border: 1px solid ${uiColor.text.pale};
  display: inline-flex;
  align-items: center;
  padding: 0 ${spacing.L}px;
  min-height: ${spacing['4XL']}px;
  background-color: ${uiColor.background.white};
  box-sizing: border-box;

  &.error {
    border-color: ${uiColor.error.main};
    background-color: ${uiColor.error.light};

    &:hover {
      border-color: ${uiColor.error.main};
    }
  }

  &.complete {
    &:hover {
      border-color: inherit;
    }
  }

  &:hover {
    border-color: ${uiColor.text.light};
  }

  &:focus,
  &:focus-visible {
    border-color: ${uiColor.primary.main};
    outline: ${uiColor.primary.main};
  }

  &.small {
    min-height: ${34 / font.size.S}em;
    font-size: ${pxToRem(font.size.S)};
  }

  &.medium {
    min-height: ${spacing['4XL'] / font.size.M}em;
    font-size: ${pxToRem(font.size.M)};
  }

  &.xSmall {
    min-height: ${spacing.XXL / font.size.S}em;
    font-size: ${pxToRem(font.size.S)};
    padding: 0 ${spacing.S}px;
  }

  &.disabled {
    background-color: ${uiColor.background.base};
    border-color: ${uiColor.text.border};

    &:hover {
      border-color: ${uiColor.text.border};
    }

    .showPassword {
      input {
        color: ${uiColor.text.pale};
      }
    }
  }
`;

const Input = styled.input`
  border: none;
  padding: ${spacing.M}px 0;
  width: 100%;
  color: ${uiColor.text.black};
  background-color: transparent;
  letter-spacing: ${font.letterSpacing.NORMAL}em;
  font-family: ${font.family.body};
  font-size: ${pxToRem(fontSize)};
  line-height: ${font.lineHeight.TIGHT};

  &::placeholder {
    color: ${uiColor.text.pale};
  }

  &:focus-visible {
    outline: none;
  }

  &:disabled {
    color: ${uiColor.text.pale};
  }

  .small${Wrapper} &,
  .medium${Wrapper} &,
  .xSmall${Wrapper} & {
    padding: 0;
    font-size: inherit;
  }
`;
