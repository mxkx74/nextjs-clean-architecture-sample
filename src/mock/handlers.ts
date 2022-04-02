import { rest } from 'msw';
import { path } from '../constant/path';

export type Source = {
  title: string;
  text: string;
};

export const handlers = [
  rest.get(path.sample(), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(5000),
      ctx.json({
        title: 'CSR Source',
        text: 'Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The triology is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!',
      } as Source)
    );
  }),
];
