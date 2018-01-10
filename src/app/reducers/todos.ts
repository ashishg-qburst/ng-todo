import undoable, { distinctState } from 'redux-undo'
import { Item } from '../item'

const todoReducer = (state: Item[] = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.item];
    case 'ADD_ITEMS':
      return [...state, ...action.items];
    case 'REMOVE_ITEM':
      let removedItem = state.splice(action.index, 1)[0];
      return state;
    default:
      return state;
  }
}

export const todos = undoable(todoReducer);

