import { z } from 'zod';

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string().regex(/^\d{10,11}$/),
  address: z.string().optional(),
  company: z.string().optional(),
  description: z.string().max(120).optional(),
  createdAt: z.string(),
});

export type UserEntity = z.infer<typeof userSchema>;
