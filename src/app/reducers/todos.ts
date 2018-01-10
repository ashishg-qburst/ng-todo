import undoable, { distinctState, includeAction, excludeAction  } from 'redux-undo'
import { Item } from '../item'

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.item]
    case 'ADD_ITEMS':
      return [...state, ...action.items]
    case 'REMOVE_ITEM':
      return state.filter((item, index) => index !== action.index)
    default:
      return state
  }
}

export const todos = undoable(todoReducer, { filter: excludeAction(['SELECT_ITEM', 'CLEAR_SELECTED_ITEM']) });

