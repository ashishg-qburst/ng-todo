import { todoApp } from './reducers/index'
import { TodoAppState, initState } from './state'

import { applyMiddleware, Store, createStore } from 'redux';

import logger from 'redux-logger'

export const store: Store<TodoAppState> = createStore(todoApp, initState, applyMiddleware(logger));
