import { rest } from 'msw';
import { type SampleEntity } from '@/feature/sampleApi/domain/entity';
import { apiPath } from '@/constant';
import { type DeepCamelToSnakeCase } from '@/type';

export const sampleGetHandler = (status: 200 | 403 | 404 | 500 = 200) => {
  return rest.get(apiPath.sample.index(), (_, res, ctx) => {
    if (status === 403) {
      return res(ctx.status(403));
    }

    if (status === 404) {
      return res(ctx.status(404));
    }

    if (status === 500) {
      return res(ctx.status(500));
    }

    return res(
      ctx.status(status),
      ctx.json<DeepCamelToSnakeCase<SampleEntity>>({
        id: 1,
        title: 'page1',
        text: 'TOP PAGE',
        main_text: 'sample text',
      })
    );
  });
};

export const samplePostHandler = (status: 200 | 403 | 404 | 500 = 200) => {
  return rest.post(apiPath.sample.update(), (_, res, ctx) => {
    if (status === 403) {
      return res(ctx.status(403));
    }

    if (status === 404) {
      return res(ctx.status(404));
    }

    if (status === 500) {
      return res(ctx.status(500));
    }

    return res(
      ctx.status(200),
      ctx.json<DeepCamelToSnakeCase<SampleEntity>>({
        id: 1,
        title: 'page1',
        text: 'TOP PAGE',
        main_text: 'sample text',
      })
    );
  });
};
