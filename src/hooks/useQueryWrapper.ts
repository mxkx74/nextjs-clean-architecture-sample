import type { QueryFunction, QueryKey, UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import type { ApiQueryKeys } from '@/constant/path';

type Props<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData, // selectを使用した際のreturn型
> = {
  queryKey?: ApiQueryKeys;
  deps?: QueryKey;
  options?: UseQueryOptions<TQueryFnData, AxiosError<TError>, TData>;
  repository: QueryFunction<TQueryFnData>;
};

export const useQueryWrapper = <T, E, D>({
  queryKey,
  deps = [],
  options,
  repository,
}: Props<T, E, D>) => {
  return useQuery(
    [queryKey, ...deps] as QueryKey,
    repository,
    {
      useErrorBoundary: (error) => {
        const status = error.response?.status;
        return !!(status && status >= 500);
      },
      ...options,
    }
  );
};
