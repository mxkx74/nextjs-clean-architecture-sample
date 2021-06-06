import logger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
// import { rootSaga } from '../modules/saga';
import createSagaMiddleware from 'redux-saga';

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    sagaMiddleware,
    ...(process.env.NODE_ENV === 'development' ? [logger] : undefined),
  ];

  const store = createStore(applyMiddleware(...middlewares));

  // TODO: sagaの設定
  // sagaMiddleware.run(rootSaga);

  return store;
};
