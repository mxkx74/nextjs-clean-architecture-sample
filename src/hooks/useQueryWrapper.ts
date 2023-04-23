import type { QueryFunction, QueryKey, UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import type { ApiQueryKeys } from '@/constant/path';

type Props<T, E> = {
  queryKey?: ApiQueryKeys;
  deps?: QueryKey;
  options?: UseQueryOptions<T, AxiosError<E>>;
  repository: QueryFunction<T>;
};

export const useQueryWrapper = <T, E>({
  queryKey,
  deps = [],
  options,
  repository,
}: Props<T, E>) => {
  const key = Array.isArray(deps) ? [queryKey, ...deps] : [queryKey];
  return useQuery(
    key as QueryKey,
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
