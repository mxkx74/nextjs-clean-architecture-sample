import { useRouter } from 'next/router';
import { authInteractor } from '@/feature/auth/domain/interactor';
import { type AuthLoginInputModel } from '@/feature/auth/domain/usecase';
import { authRepository } from '@/feature/auth/infrastructure/repository';
import { route } from '@/constant';
import { useMutationWrapper } from '@/hooks';

const interactor = authInteractor(authRepository());

export const useAuthLogin = () => {
  const { push } = useRouter();
  return useMutationWrapper({
    fetcher: (data: AuthLoginInputModel) => interactor.login(data),
    options: {
      onSuccess: (data) => {
        push(route.user(data.id));
      },
    },
  });
};
