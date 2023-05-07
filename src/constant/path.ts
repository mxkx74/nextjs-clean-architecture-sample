import { KeyPath } from '@/type';

export const apiPath = {
  sample: {
    index: () => '/api/sample',
    update: () => '/api/sample',
  },
  user: {
    index: (id: number) => `/api/user/${id}`,
    create: () => '/api/user',
  },
  auth: {
    login: () => '/api/auth/login',
  },
};

// useQuery用のユニークなqueryKeyを生成する
export type ApiQueryKeys = KeyPath<typeof apiPath>;

export const route = {
  top: {
    index: () => '/',
  },
  user: {
    index: (id: number) => `/user/${id}`,
  },
  auth: {
    login: () => '/login',
  },
};
