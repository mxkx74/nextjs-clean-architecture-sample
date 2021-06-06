import { AppState, reducer as app } from './app/index';

export type StoreState = Readonly<{
  app: AppState;
}>;

export const reducers = {
  app,
};
