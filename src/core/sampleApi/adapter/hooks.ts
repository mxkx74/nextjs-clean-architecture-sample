import { sampleRepository } from '@/core/sampleApi/data/repository';
import { sampleInteractor } from '@/core/sampleApi/domain/interactor';
import { type SampleRequestParams } from '@/core/sampleApi/domain/usecase';
import { useMutationWrapper, useQueryWrapper } from '@/hooks';
import { queryClient } from '@/lib/queryClient';

const interactor = sampleInteractor(sampleRepository());

export const useGetSample = (id: number) => {
  return useQueryWrapper({
    queryKey: 'sample',
    deps: [id],
    fetcher: () => interactor.findById(id)
  });
};

export const useCreateSample = () => {
  return useMutationWrapper({
    fetcher: (data: SampleRequestParams) => interactor.create(data),
    options: {
      onSettled: () => {
        queryClient.invalidateQueries(['sample']);
      }
    }
  });
};
