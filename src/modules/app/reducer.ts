import type { AppAction } from './action';

export type AppState = {
  initialize: boolean;
};

const initialState: AppState = {
  initialize: false,
};

export const reducer = (state: AppState = initialState, action: AppAction) => {
  switch (action.type) {
    case 'INIT_APP': {
      return {
        ...state,
        initialize: true,
      };
    }

    default:
      return {
        ...state,
      };
  }
};
