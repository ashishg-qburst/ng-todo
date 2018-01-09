import undoable, { distinctState } from 'redux-undo'
import { IAppState } from './state'
import { Item } from './item'

let initState: IAppState = { todos: [], selectedItem: null }

const todos = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        todos: [...state.todos, action.item],
        selectedItem: state.selectedItem
      }
    case 'SELECT_ITEM':
      return {
        todos: [...state.todos],
        selectedItem: action.item
      }
    default:
      return state;
  }
}

export const undoableTodos = undoable(todos);

