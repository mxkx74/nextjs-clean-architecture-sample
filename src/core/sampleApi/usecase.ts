import { QueryKey, useMutation, useQuery, UseQueryOptions } from 'react-query';
import { queryClient } from '../../lib/queryClient';
import { sampleRepository } from './repository';

export type PostData = {
  title: string;
  text: string;
};

const repository = sampleRepository;

export const useSampleQuery = (options?: UseQueryOptions<PostData, Error>) => {
  return useQuery(
    'sample' as QueryKey,
    async () => {
      const data = await repository.getSample();

      return data;
    },
    {
      useErrorBoundary: true,
      suspense: true,
      ...options,
    }
  );
};
