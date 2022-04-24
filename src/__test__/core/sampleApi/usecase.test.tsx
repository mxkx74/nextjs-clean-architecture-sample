import { renderHook, waitFor } from '@testing-library/react';
import { ReactChild } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useSampleQuery, useSampleMutation, type SampleData } from '../../../core/sampleApi/usecase';
import { server } from '../../../mock/server';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const wrapper = ({ children }: { children: ReactChild }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('mswを使ったテスト', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  describe('query', () => {
    test('titleを取得できる', async () => {
      const { result } = renderHook(() => useSampleQuery(1), { wrapper });
      await waitFor(() => {
        expect(result.current.data?.title).toBe('query');
      });
    });
  });

  describe('mutation', () => {
    test('成功時のmessageはsuccess', async () => {
      const data: SampleData = {
        title: 'mutation',
        text: 'new text',
      };
      const { result } = renderHook(() => useSampleMutation(), { wrapper });
      result.current.mutate(data);

      await waitFor(() => {
        expect(result.current.data?.message).toBe('success');
      });
    });
  });
});
