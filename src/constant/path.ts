import { KeyPath } from '@/type';

export const ENDPOINT = 'http://localhost:3000/api';

export const apiPath = {
  sample: {
    index: () => `${ENDPOINT}/sample`,
    update: () => `${ENDPOINT}/sample`,
  },
};

// useQuery用のユニークなqueryKeyを生成する
export type ApiQueryKeys = KeyPath<typeof apiPath>;
