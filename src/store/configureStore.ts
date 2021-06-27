import logger from 'redux-logger';
import { applyMiddleware, combineReducers, createStore } from 'redux';
// import { rootSaga } from '../modules/saga';
import createSagaMiddleware from 'redux-saga';
import { reducers } from '../modules/reducers';

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const loggerMiddleware = process.env.NODE_ENV === 'development' ? [logger] : [];
  const middlewares = [sagaMiddleware, ...loggerMiddleware];

  const rootReducer = combineReducers(reducers);

  const store = createStore(rootReducer, applyMiddleware(...middlewares));

  // TODO: sagaの設定
  // sagaMiddleware.run(rootSaga);

  return store;
};
