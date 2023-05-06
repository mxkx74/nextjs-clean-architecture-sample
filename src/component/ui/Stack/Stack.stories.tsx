import { Fragment } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import { Box } from '@/component/ui/Box';
import { Stack } from '.';

type Props = typeof Stack;

const meta = {
  title: 'ui/Stack',
  component: Stack,
} satisfies Meta<Props>;

export default meta;

export const Default: StoryObj<Props> = {
  args: {
    wrap: true,
    divider: false,
    direction: ['column', 'row'],
    spacing: ['M', 'L'],
  },

  render: (args) => (
    <Stack {...args}>
      {Array.from(Array(10)).map((_, index) => (
        <Fragment key={index}>
          <Box
            style={{
              backgroundColor: '#ececec',
              width: '50px',
              height: '50px',
              padding: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '11px',
              borderRadius: '3px',
            }}
          >
            BOX {index + 1}
          </Box>
        </Fragment>
      ))}
    </Stack>
  ),
};
