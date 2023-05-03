import { AxiosError } from 'axios';
import { sampleGetHandler, samplePostHandler } from '@/core/sampleApi';
import { sampleRepository } from '@/core/sampleApi/data/repository';
import { server } from '@/mock';

describe('repositoryのtest', () => {
  const repository = sampleRepository();

  describe('post', () => {
    test('errorをthrowする', async () => {
      server.use(sampleGetHandler(403));
      expect.assertions(1);
      await expect(repository.findById(1)).rejects.toThrow(AxiosError);
    });
  });

  describe('get', () => {
    test('errorをthrowする', async () => {
      server.use(samplePostHandler(403));
      expect.assertions(1);
      await expect(
        repository.create({
          id: 1,
          text: 'test',
          title: 'test',
          mainText: 'test',
        })
      ).rejects.toThrow(AxiosError);
    });
  });
});
