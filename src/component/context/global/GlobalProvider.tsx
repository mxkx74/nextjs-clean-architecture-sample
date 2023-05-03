import { FC, createContext, useReducer, Dispatch, ReactNode } from 'react';
import { GlobalActions } from './action';
import { GlobalState, reducer, initialState } from './reducer';

export type GlobalContextState = {
  state: GlobalState;
  dispatch: Dispatch<GlobalActions>;
};

export const GlobalContext = createContext<GlobalContextState | undefined>(undefined);

export const GlobalContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};
