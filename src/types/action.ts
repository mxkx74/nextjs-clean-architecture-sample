type ActionCreatorTypes = {
  [key: string]: (...args: any[]) => { type: string };
};

// action creatorのobjectから返り値の型を取得
export type ActionTypes<T extends ActionCreatorTypes> = {
  [K in keyof T]: T[K] extends (...args: any[]) => infer R ? R : never;
} extends { [_ in keyof T]: infer U }
  ? U
  : never;
