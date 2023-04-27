import { sampleRequestMapper, sampleResponseMapper , type SampleRequestParams, type SampleRepository } from './usecase';

export const sampleInteractor = (repository: SampleRepository) => {
  return {
    async findById(id: number) {
      return repository.findById(id)
        .then((data) => sampleResponseMapper(data));
    },

    async create(data: SampleRequestParams) {
      return repository.create(sampleRequestMapper(data));
    }
  };
};
