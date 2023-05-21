import { composeStories } from '@storybook/react';
import { render, waitFor } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { WithQueryClient } from '@/component/context/WithQueryClient';
import * as Stories from '@/component/pages/user/User.stories';

const { Default } = composeStories(Stories);

jest.mock('next/router', () => ({
  ...mockRouter,
  useRouter() {
    return {
      query: { id: '1' },
    };
  },
}));

describe('loginのテスト', () => {
  const wrapper = WithQueryClient();

  describe('default', () => {
    test('各見出しが表示されている', async () => {
      const { getByText } = render(<Default />, { wrapper });
      await waitFor(() => {
        expect(getByText('name')).toBeInTheDocument();
        expect(getByText('email')).toBeInTheDocument();
        expect(getByText('phone')).toBeInTheDocument();
        expect(getByText('address')).toBeInTheDocument();
        expect(getByText('company')).toBeInTheDocument();
        expect(getByText('description')).toBeInTheDocument();
      });
    });

    test('apiのレスポンスがviewに反映されている', async () => {
      const { getByText } = render(<Default />, { wrapper });
      await waitFor(() => {
        expect(getByText('sample')).toBeInTheDocument();
        expect(getByText('09012345678')).toBeInTheDocument();
        expect(getByText('東京都')).toBeInTheDocument();
        expect(getByText('sample company')).toBeInTheDocument();
        expect(getByText(/Lorem Ipsum is simply dummy text/)).toBeInTheDocument();
      });
    });
  });

  // TODO: 異常系のテストを動くようにする
  // describe('API error', () => {
  //   test('errorBoundaryのfallbackが表示される', async () => {
  //     const { getByText } = render(<ApiError />, { wrapper });
  //     await waitFor(() => expect(getByText('ERROR')).toBeVisible());
  //   });
  // });
});
