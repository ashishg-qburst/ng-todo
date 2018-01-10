import { Reducer, combineReducers } from 'redux'
import { todos } from './todos'
import { selectedItem } from './selectedItem'
import { TodoAppState } from '../state'

const todoAppReducer: Reducer<TodoAppState> = combineReducers({
  todos,
  selectedItem
});

export const todoApp: Reducer<TodoAppState> = todoAppReducer;
