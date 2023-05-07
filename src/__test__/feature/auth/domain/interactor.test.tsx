import { AxiosError } from 'axios';
import {
  authInteractor,
  authLoginInputModelMock,
  authLoginOutputModelMock,
  authLoginPostHandler,
} from '@/feature/auth';
import { authRepository } from '@/feature/auth/infrastructure/repository';
import { server } from '@/mock';

describe('interactorのtest', () => {
  const interactor = authInteractor(authRepository());

  describe('createのtest', () => {
    test('userEntityを返却する', async () => {
      await expect(interactor.login(authLoginInputModelMock)).resolves.toEqual(authLoginOutputModelMock);
    });

    test('失敗時errorをthrowする', async () => {
      server.use(authLoginPostHandler(403));
      expect.assertions(1);
      await expect(interactor.login(authLoginInputModelMock)).rejects.toThrow(AxiosError);
    });
  });
});
