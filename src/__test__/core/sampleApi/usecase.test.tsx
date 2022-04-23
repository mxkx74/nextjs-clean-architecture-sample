import { renderHook } from '@testing-library/react-hooks';
import { ReactChild } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useSampleQuery } from '../../../core/sampleApi/usecase';
import { server } from '../../../mock/server';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: true,
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

  test('titleを取得できる', async () => {
    const { result, waitFor } = renderHook(() => useSampleQuery({ suspense: false }), { wrapper });
    await waitFor(() => result.current.isSuccess);

    expect(result.current.data?.title).toBe('CSR Source');
  });
});
