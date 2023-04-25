import { SampleRepository, SampleRequestParams, sampleRequestMapper, sampleResponseMapper } from './usecase';
import { useMutationWrapper, useQueryWrapper } from '@/hooks';
import { queryClient } from '@/lib/queryClient';

export const sampleInteractor = (repository: SampleRepository) => {
  return {
    useGet (id: number) {
      return useQueryWrapper({
        queryKey: 'sample',
        deps: [id],
        fetcher: () => repository.get(id),
        options: {
          select: (data) => sampleResponseMapper(data)
        }
      });
    },

    useCreate () {
      return useMutationWrapper({
        fetcher: (data: SampleRequestParams) => {
          return repository.post(sampleRequestMapper(data));
        },
        options: {
          onSettled: () => {
            queryClient.invalidateQueries(['sample']);
          }
        }
      });
    }
  };
};
