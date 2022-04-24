import { QueryKey, useMutation, useQuery, UseQueryOptions } from 'react-query';
import { queryClient } from '../../lib/queryClient';
import { type Entity } from './entity';
import { sampleRepository } from './repository';

export type SampleData = Entity;
export type PostResponseData = { message: string };

export const useSampleQuery = (options?: UseQueryOptions<SampleData, Error>) => {
  return useQuery('sample' as QueryKey, sampleRepository.getSample, {
    useErrorBoundary: true,
    suspense: true,
    ...options,
  });
};

export const useSampleMutation = () => {
  return useMutation(sampleRepository.postSample, {
    onSettled: () => {
      queryClient.invalidateQueries('sample');
    },
  });
};
