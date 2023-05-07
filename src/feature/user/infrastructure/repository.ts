import { type UserEntity, userSchema } from '@/feature/user/domain/entity';
import { type UserInputModel, type UserRepository } from '@/feature/user/domain/usecase';
import { getFetchClient } from '@/lib/apiClient';
import { apiPath } from '@/constant/path';

export const userRepository = (): UserRepository => {
  const client = getFetchClient({ camelCase: true });

  return {
    async findById(id: number) {
      const response = await client.get<UserEntity>(apiPath.user.index(id));
      return userSchema.parse(response.data);
    },

    async create(data: UserInputModel) {
      const response = await client.post<UserEntity>(apiPath.user.create(), data);
      return userSchema.parse(response.data);
    },
  };
};
