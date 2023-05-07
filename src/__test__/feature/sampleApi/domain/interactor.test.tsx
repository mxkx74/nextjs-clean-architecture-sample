import { AxiosError } from 'axios';
import { sampleGetHandler, sampleInteractor, samplePostHandler } from '@/feature/sampleApi';
import { sampleRepository } from '@/feature/sampleApi/infrastructure/repository';
import { server } from '@/mock';

describe('interactorのtest', () => {
  const interactor = sampleInteractor(sampleRepository());
  const response = {
    id: '1',
    mainText: 'sample text',
    text: 'TOP PAGE',
    title: 'page1',
  };

  describe('findByIdのtest', () => {
    test('sampleEntityをSampleResponseModelに変換して返す', async () => {
      await expect(interactor.findById(1)).resolves.toEqual(response);
    });

    test('失敗時errorをthrowする', async () => {
      server.use(sampleGetHandler(403));
      await expect(interactor.findById(1)).rejects.toThrow(AxiosError);
    });
  });

  describe('createのtest', () => {
    const request = {
      id: '1',
      mainText: 'sample text',
      text: 'TOP PAGE',
      title: 'page1',
    };

    test('sampleEntityを返却する', async () => {
      await expect(interactor.create(request)).resolves.toEqual(response);
    });

    test('失敗時errorをthrowする', async () => {
      server.use(samplePostHandler(403));
      await expect(interactor.create(request)).rejects.toThrow(AxiosError);
    });
  });
});
