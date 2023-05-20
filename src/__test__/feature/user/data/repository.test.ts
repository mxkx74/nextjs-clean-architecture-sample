import { AxiosError } from 'axios';
import { userEntityMock, userGetHandler, userInputModelMock, userPostHandler } from '@/feature/user';
import { userRepository } from '@/feature/user/infrastructure/repository';
import { server } from '@/mock';

describe('repositoryのtest', () => {
  const repository = userRepository();

  describe('post', () => {
    test('errorをthrowする', async () => {
      server.use(userGetHandler(403));
      expect.assertions(1);
      await expect(repository.findById(1)).rejects.toThrow(AxiosError);
    });
  });

  describe('get', () => {
    test('userEntityがapiから返る', async () => {
      await expect(repository.findById(1)).resolves.toEqual(userEntityMock);
    });

    test('errorをthrowする', async () => {
      server.use(userPostHandler(403));
      expect.assertions(1);
      await expect(repository.create(userInputModelMock)).rejects.toThrow(AxiosError);
    });
  });
});
