import { z } from 'zod';
import { userSchema } from '@/feature/user';
import { type AuthLoginEntity } from './entity';

/**
 * repository
 */
export type AuthRepository = {
  login: (data: AuthLoginInputModel) => Promise<AuthLoginEntity>;
};

/**
 * input
 */
export const inputModelSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type AuthLoginInputModel = z.output<typeof inputModelSchema>;

/**
 * output
 */
export const authLoginOutputModelSchema = userSchema.pick({ id: true });

export type AuthLoginOutputModel = z.output<typeof authLoginOutputModelSchema>;

export const convertToLoginOutputModel = (entity: AuthLoginEntity): AuthLoginOutputModel => {
  return authLoginOutputModelSchema.parse(entity);
};
