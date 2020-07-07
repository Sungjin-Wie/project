import { combineReducers } from "redux";
import Thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from "redux";
import { indexReducer as index, indexState } from './index/reducers';
import { IndexState } from "./index/types";

type PreloadedState = {
    index: IndexState
}

const preloadedState: PreloadedState = { index: indexState };

const reducer = combineReducers({ index });

let middleware = [Thunk];

if (process.env.NODE_ENV !== "production") {
    const logger = createLogger();
    middleware = [Thunk, logger];
} else { 
}

const store = createStore(reducer, preloadedState, applyMiddleware(...middleware));

export default store;