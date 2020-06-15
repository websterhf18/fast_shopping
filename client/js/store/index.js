import 'regenerator-runtime/runtime';
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import { loadState, saveState } from "./storage";
import reducers from "../reducers";
import mySaga from '../sagas';

const sagaMiddleware = createSagaMiddleware()

const initialData = loadState()

const store = createStore(
  reducers,
  initialData,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(mySaga)

store.subscribe( function () {
  saveState(store.getState())
})

export default store;