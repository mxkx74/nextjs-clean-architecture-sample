import { z } from 'zod';

export const sampleSchema = z.object({
  id: z.number(),
  title: z.string(),
  text: z.string(),
  mainText: z.string().optional(),
});

export type SampleEntity = z.infer<typeof sampleSchema>;
