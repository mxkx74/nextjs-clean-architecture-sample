import { AxiosError } from 'axios';
import {
  userEntityMock,
  userGetHandler,
  userInputParamsMock,
  userInteractor,
  userOutputModelMock,
  userPostHandler,
} from '@/feature/user';
import { userRepository } from '@/feature/user/infrastructure/repository';
import { server } from '@/mock';

describe('interactorのtest', () => {
  const interactor = userInteractor(userRepository());

  describe('findByIdのtest', () => {
    test('userEntityをuserOutputModelに変換して返す', async () => {
      await expect(interactor.findById(1)).resolves.toEqual(userOutputModelMock);
    });

    test('失敗時errorをthrowする', async () => {
      server.use(userGetHandler(403));
      expect.assertions(1);
      await expect(interactor.findById(1)).rejects.toThrow(AxiosError);
    });
  });

  describe('createのtest', () => {
    test('userEntityを返却する', async () => {
      await expect(interactor.create(userInputParamsMock)).resolves.toEqual(userEntityMock);
    });

    test('失敗時errorをthrowする', async () => {
      server.use(userPostHandler(403));
      expect.assertions(1);
      await expect(interactor.create(userInputParamsMock)).rejects.toThrow(AxiosError);
    });
  });
});
