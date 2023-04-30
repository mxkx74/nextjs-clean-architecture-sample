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


