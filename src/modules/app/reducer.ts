import produce from 'immer';
import type { AppAction } from './action';

export type AppState = {
  initialize: boolean;
};

export const initialState: AppState = {
  initialize: false,
};

export const reducer = produce((draft: AppState, action: AppAction) => {
  switch (action.type) {
    case 'INIT_APP':
      draft.initialize = true;
      break;
  }
}, initialState);
