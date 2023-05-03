import {
  type SampleRequestParams,
  type SampleRepository,
  convertToSampleRequestModel,
  convertToSampleResponseModel,
} from './usecase';

export const sampleInteractor = (repository: SampleRepository) => {
  return {
    async findById(id: number) {
      return repository.findById(id).then((data) => convertToSampleResponseModel(data));
    },

    async create(data: SampleRequestParams) {
      return repository.create(convertToSampleRequestModel(data)).then((data) => convertToSampleResponseModel(data));
    },
  };
};
