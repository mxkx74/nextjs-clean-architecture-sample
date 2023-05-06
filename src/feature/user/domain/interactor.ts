import { UserRepository, convertToUserOutputModel, UserInputParams, convertToUserInputModel } from './usecase';

export const userInteractor = (repository: UserRepository) => {
  return {
    async findById(id: number) {
      return repository.findById(id).then((data) => convertToUserOutputModel(data));
    },

    async create(data: UserInputParams) {
      return repository.create(convertToUserInputModel(data));
    },
  };
};
