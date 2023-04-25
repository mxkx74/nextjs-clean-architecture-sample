import { SampleRepository, SampleRequestParams, sampleRequestMapper, sampleResponseMapper } from '@/core/sampleApi';

export const sampleInteractor = (repository: SampleRepository) => {
  return {
    async findById(id: number) {
      const result = await repository.findById(id);
      return sampleResponseMapper(result);
    },

    async create(data: SampleRequestParams) {
      const result = await repository.create(sampleRequestMapper(data));
      return result;
    }
  };
};
