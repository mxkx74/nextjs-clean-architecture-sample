import type { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  logger: {
    log: console.log,
    warn: console.warn,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    error: process.env.NODE_ENV === 'test' ? () => {} : console.error,
  },
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export const WithQueryClient = (component?: ReactNode, _queryClient = queryClient) => {
  const Wrapper: FC<{ children?: ReactNode }> = ({ children }) => {
    return (
      <QueryClientProvider client={_queryClient}>{children}</QueryClientProvider>
    );
  };

  if (component) {
    return () => <Wrapper>{component}</Wrapper>;
  }

  return Wrapper;
};
