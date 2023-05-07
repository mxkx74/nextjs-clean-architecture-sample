import { type AuthLoginEntity, authLoginSchema } from '@/feature/auth/domain/entity';
import { type AuthLoginInputModel, type AuthRepository } from '@/feature/auth/domain/usecase';
import { getFetchClient } from '@/lib/apiClient';
import { apiPath } from '@/constant/path';

export const authRepository = (): AuthRepository => {
  const client = getFetchClient({ camelCase: true });

  return {
    async login(data: AuthLoginInputModel) {
      const response = await client.post<AuthLoginEntity>(apiPath.auth.login(), data);
      return authLoginSchema.parse(response.data);
    },
  };
};
