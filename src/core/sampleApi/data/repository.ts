import { ENDPOINT, path } from '@/constant/path';
import { type SampleEntity, sampleSchema } from '@/core/sampleApi/domain/entity';
import { type SampleRepository, type SampleRequestModel } from '@/core/sampleApi/domain/usecase';
import { deepSnakeToCamel } from '@/helper/object';
import { getFetchClient } from '@/lib/apiClient';

export const sampleRepository = (): SampleRepository => {
  const client = getFetchClient(ENDPOINT);
  const endpoint = path.sample();

  return {
    async findById(id: number) {
      return client.get<SampleEntity>(endpoint, { params: { id } })
        .then((response) => sampleSchema.parse(deepSnakeToCamel(response.data)));
    },

    async create(data: SampleRequestModel) {
      const { data: response } = await client.post<SampleEntity>(endpoint, data);
      return sampleSchema.parse(deepSnakeToCamel(response));
    }
  };
};
