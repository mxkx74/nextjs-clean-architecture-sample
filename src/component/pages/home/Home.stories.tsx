import { StoryObj, Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { Home } from './page';

const meta: Meta<typeof Home> = {
  component: Home,
  parameters: {
    title: 'pages/Home',
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Home>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(await canvas.findByTestId('email'), 'test@test.co.jp', { delay: 5 });
    await userEvent.type(await canvas.findByTestId('password'), 'storybook-test', { delay: 5 });
    userEvent.click(canvas.getByRole('button'));
  },
};

export const EmailValidation: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(await canvas.findByTestId('email'), 'invalid email', { delay: 5 });
    canvas.getByTestId('email').blur();
  },
};

export const PasswordValidation: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    userEvent.type(await canvas.findByTestId('email'), 'test@test.co.jp');
    await userEvent.type(await canvas.findByTestId('password'), 'passwor', { delay: 5 });
    canvas.getByTestId('password').blur();
  },
};
