import { sampleInteractor } from '@/feature/sampleApi/domain/interactor';
import { type SampleRequestParams } from '@/feature/sampleApi/domain/usecase';
import { sampleRepository } from '@/feature/sampleApi/infrastructure/repository';
import { queryClient } from '@/lib/queryClient';
import { useMutationWrapper, useQueryWrapper } from '@/hooks';

const interactor = sampleInteractor(sampleRepository());

export const useGetSample = (id: number) => {
  return useQueryWrapper({
    queryKey: 'sample.index',
    deps: [id],
    fetcher: () => interactor.findById(id),
  });
};

export const useCreateSample = () => {
  return useMutationWrapper({
    fetcher: (data: SampleRequestParams) => interactor.create(data),
    options: {
      onSettled: () => {
        queryClient.invalidateQueries(['sample']);
      },
    },
  });
};
