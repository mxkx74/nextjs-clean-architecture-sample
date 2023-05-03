import { AxiosError } from 'axios';

export const isInternalError = <E extends AxiosError<unknown, unknown>>(error: E) => {
  const status = error.response?.status;
  return !!(status && status >= 500);
};

export type Success<T> = {
  isSuccess: true;
  data: T;
};

export type Failure<T> = {
  isSuccess: false;
  data: T;
};

export const success = <T>(data: T): Success<T> => ({
  isSuccess: true,
  data,
});

export const failure = <T>(data: T): Failure<T> => ({
  isSuccess: false,
  data,
});

export type Result<T, U> = Success<T> | Failure<U>;
