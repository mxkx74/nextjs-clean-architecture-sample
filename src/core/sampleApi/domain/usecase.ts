import { z } from 'zod';
import { type SampleEntity, sampleSchema } from './entity';

/**
 * repository
 * @description repositoryのinterface
 * @param id
 * @returns Promise<SampleEntity>
 */
export type SampleRepository = {
  findById: (id: number) => Promise<SampleEntity>;
  create: (data: SampleRequestModel) => Promise<SampleEntity>;
}

/**
 * request model
 */
export const requestModelSchema = z.object({
  id: z.string(),
  text: z.string().optional(),
  title: z.string().optional()
}).transform((schema) => ({
  ...schema,
  id: parseInt(schema.id),
}));

export type SampleRequestParams = z.input<typeof requestModelSchema>;
export type SampleRequestModel = z.output<typeof requestModelSchema>;

// 変換用のmapper
export const sampleRequestMapper = (input: SampleRequestParams): SampleRequestModel => {
  return requestModelSchema.parse(input);
};


/**
 * response model
 * @description entityをviewに渡す前に、必要に応じて変換する
 */

export const responseModelSchema = sampleSchema
  .extend({
    id: z.number().transform((val) => String(val)),
  });

export type SampleResponseModel = z.output<typeof responseModelSchema>;

// 変換用のmapper
export const sampleResponseMapper = (entity: SampleEntity): SampleResponseModel => {
  return responseModelSchema.parse(entity);
};



