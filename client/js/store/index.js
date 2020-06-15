import 'regenerator-runtime/runtime';
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import { persistStore } from 'redux-persist'

import reducer from "../reducers";
import mySaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [];
const enhancers = [];

middlewares.push(sagaMiddleware);
enhancers.push(applyMiddleware(...middlewares));

export const store = createStore(
  reducer,
  composeWithDevTools(...enhancers),
);

export const persistor = persistStore(store);
sagaMiddleware.run(mySaga)