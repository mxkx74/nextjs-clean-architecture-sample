import { QueryKey, useMutation, useQuery } from 'react-query';
import { queryClient } from '../../lib/queryClient';
import { type Entity } from './entity';
import { sampleRepository } from './repository';

export type SampleData = Entity;
export type PostResponseData = { message: string };

export const useSampleQuery = () => {
  return useQuery('sample' as QueryKey, sampleRepository.getSample, {
    useErrorBoundary: true,
    suspense: true,
  });
};

export const useSampleMutation = () => {
  return useMutation(sampleRepository.postSample, {
    onSettled: () => {
      queryClient.invalidateQueries('sample');
    },
  });
};
