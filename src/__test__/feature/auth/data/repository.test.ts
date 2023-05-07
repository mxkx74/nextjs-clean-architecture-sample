import { AxiosError } from 'axios';
import { authLoginEntityMock, authLoginInputModelMock, authLoginPostHandler } from '@/feature/auth';
import { authRepository } from '@/feature/auth/infrastructure/repository';
import { server } from '@/mock';

describe('repositoryのtest', () => {
  const repository = authRepository();

  describe('post', () => {
    test('成功時authEntityを返す', async () => {
      await expect(repository.login(authLoginInputModelMock)).resolves.toEqual(authLoginEntityMock);
    });

    test('失敗時errorをthrowする', async () => {
      server.use(authLoginPostHandler(403));
      expect.assertions(1);
      await expect(repository.login(authLoginInputModelMock)).rejects.toThrow(AxiosError);
    });
  });
});
