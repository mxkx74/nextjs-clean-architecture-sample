import { camelToSnake, snakeToCamel } from './string';

type CamelToSnakeCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> ? '_' : ''}${Lowercase<T>}${CamelToSnakeCase<U>}`
  : S;

type SnakeToCamelCase<T extends string> = T extends `${infer R}_${infer U}`
  ? `${R}${Capitalize<SnakeToCamelCase<U>>}`
  : T;

export type CamelToSnake<T extends object> = {
  [K in keyof T as `${CamelToSnakeCase<string & K>}`]: T[K] extends Array<infer U>
    ? U extends object
      ? CamelToSnake<U>[]
      : U[]
    : T[K] extends object
      ? CamelToSnake<T[K]>
      : T[K];
};

export type SnakeToCamel<T extends object> = {
  [K in keyof T as `${SnakeToCamelCase<string & K>}`]: T[K] extends Array<infer U>
    ? U extends object
      ? SnakeToCamel<U>[]
      : U[]
    : T[K] extends object
      ? SnakeToCamel<T[K]>
      : T[K];
};

export const deepSnakeToCamel = <T extends object>(data: T) => {
  return Object.entries(data).reduce((acc, current) => {
    const [key, value] = current;

    if (Array.isArray(value)) {
      const list: SnakeToCamel<T>[] = value.map((item) => {
        return typeof item === 'object' && item !== null && !Array.isArray(item) ? deepSnakeToCamel(item) : item;
      });

      return {
        ...acc,
        [snakeToCamel(key)]: list,
      };
    }

    if (value !== null && typeof value === 'object') {
      const nested: SnakeToCamel<T> = deepSnakeToCamel(value);
      return {
        ...acc,
        [snakeToCamel(key)]: nested,
      };
    }

    return {
      ...acc,
      [snakeToCamel(key)]: value,
    };
  }, {} as SnakeToCamel<T>);
};

export const deepCamelToSnake = <T extends object>(data: T) => {
  return Object.entries(data).reduce((acc, current) => {
    const [key, value] = current;

    if (Array.isArray(value)) {
      const list: CamelToSnake<T>[] = value.map((item) => {
        return typeof item === 'object' && item !== null && !Array.isArray(item) ? deepCamelToSnake(item) : item;
      });

      return {
        ...acc,
        [camelToSnake(key)]: list,
      };
    }

    if (value !== null && typeof value === 'object') {
      const nested: CamelToSnake<T> = deepCamelToSnake(value);
      return {
        ...acc,
        [camelToSnake(key)]: nested,
      };
    }

    return {
      ...acc,
      [camelToSnake(key)]: value,
    };
  }, {} as CamelToSnake<T>);
};

export const removeNullableProperty = <T extends object>(obj: T) =>
  Object.fromEntries(Object.entries(obj).filter(([, v]) => v != null)) as {
    [P in keyof T as T[P] extends NonNullable<T[P]> ? P : never]: T[P];
  };
