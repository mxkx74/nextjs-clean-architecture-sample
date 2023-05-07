import { z } from 'zod';
import { type UserEntity } from '@/feature/user';

export const authLoginSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string().regex(/^\d{10,11}$/),
  address: z.string().optional(),
  company: z.string().optional(),
  description: z.string().max(800).optional(),
  createdAt: z.string(),
}) as z.ZodSchema<UserEntity>; // UserEntityを継承した型を作成する

export type AuthLoginEntity = z.infer<typeof authLoginSchema>;
