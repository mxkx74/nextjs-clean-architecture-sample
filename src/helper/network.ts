import { AxiosError } from 'axios';

export const isInternalError = <E extends AxiosError<unknown, unknown>>(error: E) => {
  const status = error.response?.status;
  return !!(status && status >= 500);
};
