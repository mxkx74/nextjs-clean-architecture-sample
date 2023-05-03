import { type SampleEntity, sampleSchema } from '@/feature/sampleApi/domain/entity';
import { type SampleRepository, type SampleRequestModel } from '@/feature/sampleApi/domain/usecase';
import { getFetchClient } from '@/lib/apiClient';
import { ENDPOINT, apiPath } from '@/constant/path';

export const sampleRepository = (): SampleRepository => {
  const client = getFetchClient({ baseURL: ENDPOINT, camelCase: true });
  const resource = apiPath.sample.index();

  return {
    async findById(id: number) {
      const response = await client.get<SampleEntity>(resource, { params: { id } });
      return sampleSchema.parse(response.data);
    },

    async create(data: SampleRequestModel) {
      const response = await client.post<SampleEntity>(resource, data);
      return sampleSchema.parse(response.data);
    },
  };
};
