import { type MutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { authInteractor } from '@/feature/auth/domain/interactor';
import { AuthLoginOutputModel, type AuthLoginInputModel } from '@/feature/auth/domain/usecase';
import { authRepository } from '@/feature/auth/infrastructure/repository';
import { useMutationWrapper } from '@/hooks';

const interactor = authInteractor(authRepository());

export const useAuthLogin = (
  options?: MutationOptions<AuthLoginOutputModel, AxiosError<Error>, AuthLoginInputModel>
) => {
  return useMutationWrapper({
    fetcher: (data: AuthLoginInputModel) => interactor.login(data),
    options,
  });
};
