import undoable, { distinctState } from 'redux-undo'
import { TodoAppState } from './state'
import { Item } from './item'

let initState: TodoAppState = { todos: [], selectedItem: null }

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

