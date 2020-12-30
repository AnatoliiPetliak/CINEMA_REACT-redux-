// @ts-nocheck
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import { promise } from './middlewares/promise';

const composeEnhancers =
	process.env.NODE_ENV !== 'production' &&
	typeof window !== 'undefined' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: compose;

const middlewares = applyMiddleware(thunk, promise);

const store = createStore(reducer, composeEnhancers(middlewares));

export default store;
