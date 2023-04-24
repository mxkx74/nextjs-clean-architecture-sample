export const ENDPOINT = 'http://localhost:3000/api';

export const path = {
  sample: () => `${ENDPOINT}/sample`,
};

export type ApiQueryKeys = keyof typeof path;
