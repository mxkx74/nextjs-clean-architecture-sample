import { SampleRepository, SampleRequestParams, sampleRequestMapper, sampleResponseMapper } from './usecase';
import { useMutationWrapper, useQueryWrapper } from '@/hooks';
import { queryClient } from '@/lib/queryClient';

export const sampleInteractor = (repository: SampleRepository) => {
  return {
    useQuery (id: number) {
      return useQueryWrapper({
        queryKey: 'sample',
        deps: [id],
        repository: () => repository.get(id),
        options: {
          select: (data) => sampleResponseMapper(data)
        }
      });
    },

    useMutation () {
      return useMutationWrapper({
        repository: (data: SampleRequestParams) => {
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
