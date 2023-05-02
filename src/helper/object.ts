import { DeepCamelToSnakeCase, DeepSnakeToCamelCase } from '@/types';
import { camelToSnake, snakeToCamel } from './string';

export const deepSnakeToCamelCase = <T extends object>(data: T) => {
  return Object.entries(data).reduce((acc, current) => {
    const [key, value] = current;

    if (Array.isArray(value)) {
      const list: DeepSnakeToCamelCase<T>[] = value.map((item) => {
        return typeof item === 'object' && item !== null && !Array.isArray(item) ? deepSnakeToCamelCase(item) : item;
      });

      return {
        ...acc,
        [snakeToCamel(key)]: list,
      };
    }

    if (value !== null && typeof value === 'object') {
      const nested: DeepSnakeToCamelCase<T> = deepSnakeToCamelCase(value);
      return {
        ...acc,
        [snakeToCamel(key)]: nested,
      };
    }

    return {
      ...acc,
      [snakeToCamel(key)]: value,
    };
  }, {} as DeepSnakeToCamelCase<T>);
};

export const deepCamelToSnakeCase = <T extends object>(data: T) => {
  return Object.entries(data).reduce((acc, current) => {
    const [key, value] = current;

    if (Array.isArray(value)) {
      const list: DeepCamelToSnakeCase<T>[] = value.map((item) => {
        return typeof item === 'object' && item !== null && !Array.isArray(item) ? deepCamelToSnakeCase(item) : item;
      });

      return {
        ...acc,
        [camelToSnake(key)]: list,
      };
    }

    if (value !== null && typeof value === 'object') {
      const nested: DeepCamelToSnakeCase<T> = deepCamelToSnakeCase(value);
      return {
        ...acc,
        [camelToSnake(key)]: nested,
      };
    }

    return {
      ...acc,
      [camelToSnake(key)]: value,
    };
  }, {} as DeepCamelToSnakeCase<T>);
};
