import { type Meta, type StoryObj } from '@storybook/react';
import { TextInput } from '.';

type Props = typeof TextInput;

const meta = {
  title: 'ui/TextInput',
  component: TextInput,
} satisfies Meta<Props>;

export default meta;

export const Default: StoryObj<Props> = {
  args: {
    placeholder: 'テキストフィールド',
    error: false,
    disabled: false,
    width: 370,
  },
};
