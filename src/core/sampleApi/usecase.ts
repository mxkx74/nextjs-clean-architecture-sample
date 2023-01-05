import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient } from '../../lib/queryClient';
import { type Entity } from './entity';
import { sampleRepository } from './repository';

export type SampleData = Entity;
export type PostResponseData = { message: string };

export const useSampleQuery = (id: number) => {
  return useQuery(['sample', id], () => sampleRepository.getSample(id), {
    useErrorBoundary: true,
    suspense: true,
  });
};

export const useSampleMutation = () => {
  return useMutation((data: SampleData) => sampleRepository.postSample(data), {
    onSettled: () => {
      queryClient.invalidateQueries(['sample']);
    },
  });
};
