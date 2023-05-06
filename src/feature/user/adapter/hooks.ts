import { userInteractor } from '@/feature/user/domain/interactor';
import { UserInputParams } from '@/feature/user/domain/usecase';
import { userRepository } from '@/feature/user/infrastructure/repository';
import { queryClient } from '@/lib/queryClient';
import { useMutationWrapper, useQueryWrapper } from '@/hooks';

const interactor = userInteractor(userRepository());

export const useGetUser = (id: number) => {
  return useQueryWrapper({
    queryKey: 'user.index',
    deps: [id],
    fetcher: () => interactor.findById(id),
  });
};

export const useCreateUser = () => {
  return useMutationWrapper({
    fetcher: (data: UserInputParams) => interactor.create(data),
    options: {
      onSettled: (response) => {
        queryClient.invalidateQueries(['user.index', response?.id]);
      },
    },
  });
};
