import { AxiosError } from 'axios';
import { SampleEntity, sampleSchema } from '../domain/entity';
import { SampleRepository, SampleRequestModel } from '../domain/usecase';
import { ENDPOINT, path } from '@/constant/path';
import { deepSnakeToCamel } from '@/helper/object';
import { getFetchClient } from '@/lib/apiClient';

export const sampleRepository = (): SampleRepository => {
  const client = getFetchClient(ENDPOINT);
  const endpoint = path.sample();

  return {
    async get(id: number) {
      return await client
        .get<SampleEntity>(endpoint, { params: { id } })
        .then(({ data }) => sampleSchema.parse(deepSnakeToCamel(data)))
        .catch((reason: AxiosError<Error>) => {
          throw reason;
        });
    },

    async post(data: SampleRequestModel) {
      return await client
        .post<SampleEntity>(endpoint, data)
        .then(({data}) => sampleSchema.parse(deepSnakeToCamel(data)))
        .catch((reason: AxiosError<Error>) => {
          throw reason;
        });
    }
  };
};
