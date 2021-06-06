import type { ActionTypes } from '../../types/action';

const types = {
  INIT_APP: 'INIT_APP',
} as const;

const initApp = () => {
  return {
    type: types.INIT_APP,
  };
};

export const actionCreators = {
  initApp,
};

export type AppAction = ActionTypes<typeof actionCreators>;
