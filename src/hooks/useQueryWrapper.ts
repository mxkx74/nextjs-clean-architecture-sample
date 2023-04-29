import { useQuery } from '@tanstack/react-query';
import type { ApiQueryKeys } from '@/constant/path';
import type { QueryFunction, QueryKey, UseQueryOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';


type Props<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData, // selectを使用した際のreturn型
> = {
  queryKey?: ApiQueryKeys;
  deps?: QueryKey;
  options?: UseQueryOptions<TQueryFnData, AxiosError<TError>, TData>;
  fetcher: QueryFunction<TQueryFnData | TData, QueryKey>;
};

export const useQueryWrapper = <T, E, D extends T>({
  queryKey,
  deps = [],
  options,
  fetcher,
}: Props<T, E, D>) => {
  return useQuery(
    [queryKey, ...deps] as QueryKey,
    fetcher,
    {
      useErrorBoundary: (error) => {
        const status = error.response?.status;
        return !!(status && status >= 500);
      },
      ...options,
    }
  );
};
