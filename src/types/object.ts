import type { CamelToSnakeCase, SnakeToCamelCase } from '@/types/string';

export type DeepCamelToSnakeCase<T extends object> = {
  [K in keyof T as `${CamelToSnakeCase<string & K>}`]: T[K] extends Array<infer U>
    ? U extends object
      ? DeepCamelToSnakeCase<U>[]
      : U[]
    : T[K] extends object
      ? DeepCamelToSnakeCase<T[K]>
      : T[K];
};

export type DeepSnakeToCamelCase<T extends object> = {
  [K in keyof T as `${SnakeToCamelCase<string & K>}`]: T[K] extends Array<infer U>
    ? U extends object
      ? DeepSnakeToCamelCase<U>[]
      : U[]
    : T[K] extends object
      ? DeepSnakeToCamelCase<T[K]>
      : T[K];
};
