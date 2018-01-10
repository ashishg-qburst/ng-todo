import { Reducer, combineReducers } from 'redux'
import { todos } from './todos'
import { selectedItem } from './selectedItem'
import { TodoAppState } from '../state'

const todoAppReducer = (state: TodoAppState, action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      let removedItem = state.todos.present[action.index]
      return {
        selectedItem: selectedItem(state.selectedItem, { type: 'REMOVE_ITEM', item: removedItem }),
        todos: todos(state.todos, action)
      }
    default:
      return {
        selectedItem: selectedItem(state.selectedItem, action),
        todos: todos(state.todos, action)
      }
  }
}

export const todoApp = todoAppReducer;
