import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { ReactNode } from 'react';
import { useSampleQuery, useSampleMutation, type SampleData } from '../../../core/sampleApi/usecase';
import { handlers } from '../../../mock/handlers';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const server = setupServer(...handlers);

const wrapper = ({ children }: { children: ReactNode }) => (
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
        expect(result.current.data?.title).toBe('page1');
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
