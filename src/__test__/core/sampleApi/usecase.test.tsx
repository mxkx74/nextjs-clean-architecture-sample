import { renderHook } from '@testing-library/react-hooks';
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
      const { result, waitFor } = renderHook(() => useSampleQuery({ suspense: false }), { wrapper });
      await waitFor(() => result.current.isSuccess);
      expect(result.current.data?.title).toBe('CSR Source');
    });
  });

  describe('mutation', () => {
    test('titleを取得できる', async () => {
      const data: SampleData = {
        title: 'mutated',
        text: 'new text',
      };
      const { result, waitFor } = renderHook(() => useSampleMutation(), { wrapper });
      result.current.mutate(data);

      await waitFor(() => result.current.isSuccess);
      expect(result.current.data?.message).toBe('success');
    });
  });
});
