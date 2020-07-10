import { combineReducers } from 'redux';
import Thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { indexReducer as index, indexState } from './index/reducers';
import { IndexState } from './index/types';

export type DefaultRootState = {
  index: IndexState;
};

const preloadedState: DefaultRootState = { index: indexState };

const reducer = combineReducers({ index });

let middleware;
if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middleware = [Thunk, logger];
} else {
  middleware = [Thunk];
}
const store = createStore(
  reducer,
  preloadedState,
  applyMiddleware(...middleware),
);

export default store;
