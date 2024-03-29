import { StoryObj, Meta } from '@storybook/react';
import { userGetHandler } from '@/feature/user';
import User from './page';

const meta: Meta<typeof User> = {
  component: User,
  parameters: {
    title: 'pages/User',
    layout: 'fullscreen',
    nextjs: {
      router: {
        asPath: '/user/1',
        query: {
          id: '1',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof User>;

export const Default: Story = {};

export const ApiError: Story = {
  parameters: {
    msw: {
      handlers: [userGetHandler(403)],
    },
  },
};
