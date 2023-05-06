import { Fragment } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@/component/ui/Stack';
import { uiColor } from '@/theme';
import { Box } from '.';

type Props = typeof Box;

const meta = {
  title: 'ui/Box',
  component: Box,
} satisfies Meta<typeof Box>;

export default meta;

const colors = [uiColor.primary.main, uiColor.primary.medium, uiColor.primary.light];

export const Default: StoryObj<Props> = {
  render: () => (
    <Stack spacing="XL" direction={['column', 'row']}>
      {Array.from(Array(3)).map((_, index) => (
        <Fragment key={index}>
          <Box
            style={{
              backgroundColor: colors[index % 3],
              width: '50px',
              height: '50px',
              padding: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '11px',
              borderRadius: '3px',
              color: '#fff',
            }}
          >
            BOX {index + 1}
          </Box>
        </Fragment>
      ))}
    </Stack>
  ),
};
