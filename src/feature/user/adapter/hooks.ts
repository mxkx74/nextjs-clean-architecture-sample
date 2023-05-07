import { type UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { userInteractor } from '@/feature/user/domain/interactor';
import { type UserOutputModel, type UserInputParams } from '@/feature/user/domain/usecase';
import { userRepository } from '@/feature/user/infrastructure/repository';
import { queryClient } from '@/lib/queryClient';
import { useMutationWrapper, useQueryWrapper } from '@/hooks';

const interactor = userInteractor(userRepository());

export const useGetUser = (id?: number, options?: UseQueryOptions<UserOutputModel | null, AxiosError<unknown>>) => {
  return useQueryWrapper({
    queryKey: 'user.index',
    deps: [id],
    fetcher: () => interactor.findById(id),
    options: {
      enabled: !!(typeof id !== 'undefined'),
      ...options,
    },
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

// | UseQueryOptions<
// {
//   id: number;
//   name: string;
//   email: string;
//   phone: string;
//   address?: string | undefined;
//   company?: string | undefined;
//   description?: string | undefined;
// } | null,
// AxiosError<unknown, any>,
// {
//   id: number;
//   name: string;
//   email: string;
//   phone: string;
//   address?: string | undefined;
//   company?: string | undefined;
//   description?: string | undefined;
// } | null,
// QueryKey
// >
// | undefined
