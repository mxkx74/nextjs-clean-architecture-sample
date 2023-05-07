import { convertToLoginOutputModel, type AuthRepository, type AuthLoginInputModel } from './usecase';

export const authInteractor = (repository: AuthRepository) => {
  return {
    async login(data: AuthLoginInputModel) {
      return repository.login(data).then((data) => convertToLoginOutputModel(data));
    },
  };
};
