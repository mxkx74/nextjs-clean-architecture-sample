import type { MutationFunction, UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

type Props<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown
> = {
  repository: MutationFunction<TData, TVariables>;
  options?: Exclude<UseMutationOptions<TData, AxiosError<TError>, TVariables, TContext>, 'useErrorBoundary'>;
};

export const useMutationWrapper = <D, E, V, C>({
  repository,
  options,
}: Props<D, E, V, C>) => {
  return useMutation(repository, {
    useErrorBoundary: (error) => {
      const status = error.response?.status;
      return !!(status && status >= 500);
    },
    ...options,
  });
};
