import { GlobalActions } from './action';

export type GlobalState = {
  value?: string;
};

export const initialState: GlobalState = {};

export const reducer = (state: GlobalState, action: GlobalActions) => {
  switch (action.type) {
    case 'SET_VALUE':
      return {
        ...state,
        value: action.payload.value,
      };
    default:
      return state;
  }
};
