import { useMutation } from '@tanstack/react-query';
import type { MutationFunction, UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

type Props<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown
> = {
  fetcher: MutationFunction<TData, TVariables>;
  options?: UseMutationOptions<TData, AxiosError<TError>, TVariables, TContext>;
};

export const useMutationWrapper = <D, E, V, C>({
  fetcher,
  options,
}: Props<D, E, V, C>) => {
  return useMutation(fetcher, {
    useErrorBoundary: (error) => {
      const status = error.response?.status;
      return !!(status && status >= 500);
    },
    ...options,
  });
};
