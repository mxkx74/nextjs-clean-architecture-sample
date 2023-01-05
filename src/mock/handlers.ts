import { rest } from 'msw';
import { path } from '@/constant/path';

export type Source = {
  title: string;
  text: string;
};

export const handlers = [
  rest.get(path.sample(), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(),
      ctx.json({
        title: 'page1',
        text: 'TOP PAGE',
      } as Source)
    );
  }),

  rest.post(path.sample(), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(),
      ctx.json({
        message: 'success',
      })
    );
  }),
];
