import { SampleRequestParams } from '../domain/usecase';
import { sampleInteractor } from '@/core/sampleApi';
import { useMutationWrapper, useQueryWrapper } from '@/hooks';
import { queryClient } from '@/lib/queryClient';

export const useGetSample = (id: number) => {
  return useQueryWrapper({
    queryKey: 'sample',
    deps: [id],
    fetcher: () => sampleInteractor.findById(id)
  });
};

export const useCreateSample = () => {
  return useMutationWrapper({
    fetcher: (data: SampleRequestParams) => sampleInteractor.create(data),
    options: {
      onSettled: () => {
        queryClient.invalidateQueries(['sample']);
      }
    }
  });
};
