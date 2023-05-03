import type { CamelToSnakeCase, SnakeToCamelCase } from '@/type/string';

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

/**
 * @description
 * オブジェクトのキーからパスを取得する
 * @example
 * type Obj = {
 *  a: {
 *    b: {
 *      c: string;
 *    };
 *   d: string;
 *   };
 * };
 *  type Test = KeyPath<Obj>; // 'a.b.c' | a.d'
 */

export type KeyPath<T extends Record<string, unknown>, K = keyof T> = K extends string
  ? T[K] extends Record<string, unknown>
    ? `${K}.${KeyPath<T[K]>}`
    : K
  : never;
