import { z } from 'zod';
import { userSchema, type UserEntity } from './entity';

/**
 * repository
 */
export type UserRepository = {
  findById: (id: number) => Promise<UserEntity>;
  create: (data: UserInputModel) => Promise<UserEntity>;
};

/**
 * input
 */
export const inputModelSchema = z
  .object({
    id: z.number(),
    data: userSchema.omit({ id: true, createdAt: true }),
  })
  .transform((schema) => ({
    id: schema.id,
    ...schema.data,
  }));

export type UserInputParams = z.input<typeof inputModelSchema>;
export type UserInputModel = z.output<typeof inputModelSchema>;

export const convertToUserInputModel = (input: UserInputParams): UserInputModel => {
  return inputModelSchema.parse(input);
};

/**
 * input
 */
export const userOutputModelSchema = userSchema.omit({ createdAt: true });

export type UserOutputModel = z.output<typeof userOutputModelSchema>;

export const convertToUserOutputModel = (entity: UserEntity): UserOutputModel => {
  return userOutputModelSchema.parse(entity);
};
