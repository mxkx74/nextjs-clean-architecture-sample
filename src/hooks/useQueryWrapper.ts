import { type QueryFunction, type QueryKey, type UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { type ApiQueryKeys } from '@/constant/path';
import { isInternalError } from '@/helper';

type Props<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData // selectを使用した際のreturn型
> = {
  queryKey?: ApiQueryKeys;
  deps?: QueryKey;
  options?: UseQueryOptions<TQueryFnData, AxiosError<TError>, TData>;
  fetcher: QueryFunction<TQueryFnData | TData, QueryKey>;
};

export const useQueryWrapper = <T, E, D extends T>({ queryKey, deps = [], options, fetcher }: Props<T, E, D>) => {
  return useQuery([queryKey, ...deps] as QueryKey, fetcher, {
    useErrorBoundary: isInternalError,
    ...options,
  });
};
