import { SampleEntity, sampleSchema } from '../domain/entity';
import { SampleRepository, SampleRequestModel } from '../domain/usecase';
import { ENDPOINT, path } from '@/constant/path';
import { deepSnakeToCamel } from '@/helper/object';
import { getFetchClient } from '@/lib/apiClient';

export const sampleRepository = (): SampleRepository => {
  const client = getFetchClient(ENDPOINT);
  const endpoint = path.sample();

  return {
    async findById(id: number) {
      const { data } = await client.get<SampleEntity>(endpoint, { params: { id } });
      return sampleSchema.parse(deepSnakeToCamel(data));
    },

    async create(data: SampleRequestModel) {
      const { data: _data } = await client
        .post<SampleEntity>(endpoint, data);
      return sampleSchema.parse(deepSnakeToCamel(_data));
    }
  };
};
