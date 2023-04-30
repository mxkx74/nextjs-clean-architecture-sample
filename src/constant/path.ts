import { KeyPath } from '@/types';

export const ENDPOINT = 'http://localhost:3000/api';

export const apiPath = {
  sample: {
    get: () => `${ENDPOINT}/sample`,
    post: () => `${ENDPOINT}/sample`,
  },
};

export type ApiQueryKeys = Exclude<KeyPath<typeof apiPath>, keyof typeof apiPath>;
