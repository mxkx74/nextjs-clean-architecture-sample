/**
 * @description
 * オブジェクトのキーからパスを取得する
 * @example
 * type Obj = {
 *  a: {
 *    b: {
 *      c: string;
 *    };
 *   };
 * };
 *  type Test = ObjectPath<Obj>; // 'a' | 'a.b' | 'a.b.c'
 */
export type ObjectPath<T extends object, D extends string = ''> = {
  [K in keyof T]: `${D}${Exclude<K, symbol>}${'' | (T[K] extends object ? ObjectPath<T[K], '.'> : '')}`
}[keyof T]

export type CamelToSnakeCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> ? '_' : ''}${Lowercase<T>}${CamelToSnakeCase<U>}`
  : S;

export type SnakeToCamelCase<T extends string> = T extends `${infer R}_${infer U}`
  ? `${R}${Capitalize<SnakeToCamelCase<U>>}`
  : T;
