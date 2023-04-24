import { rest } from 'msw';
import { path } from '@/constant';
import { SampleEntity } from '@/core/sampleApi';

export const sampleGetHandler = (status: 200 | 403 | 404 | 500 = 200) => {
  return rest.get(path.sample(), (_, res, ctx) => {
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
      ctx.json({
        id: 1,
        title: 'page1',
        text: 'TOP PAGE',
      } as SampleEntity)
    );
  });
};

export const samplePostHandler = (status: 200 | 403 | 404 | 500 = 200) => {
  return rest.post(path.sample(), (_, res, ctx) => {
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
      ctx.json({
        id: 1,
        title: 'page1',
        text: 'TOP PAGE',
      } as SampleEntity)
    );
  });
};
