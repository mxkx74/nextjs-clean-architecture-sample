import type { MutationFunction, UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

/**
  T: data mutationが返すデータの型
  E: error mutationが返すエラーの型
  V: variables mutate関数の引数の型
  C: context onMutate内でセットされるコンテキストの型
 */
type Props<T, E, V, C = unknown> = {
  repository: MutationFunction<T, V>;
  options?: Exclude<UseMutationOptions<T, AxiosError<E>, V, C>, 'useErrorBoundary'>;
};

export const useMutationWrapper = <T, E, V, C = unknown>({
  repository,
  options,
}: Props<T, E, V, C>) => {
  return useMutation(repository, {
    useErrorBoundary: (error) => {
      const status = error.response?.status;
      return !!(status && status >= 500);
    },
    ...options,
  });
};
