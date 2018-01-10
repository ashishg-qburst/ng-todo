import { Item } from '../item'

const selectedItemReducer = (state: Item = null, action) => {
  switch (action.type) {
    case 'SELECT_ITEM':
      return action.item
    case 'REMOVE_ITEM':
      let newSelected = state === action.item ? null : state
      return newSelected
    case 'CLEAR_SELECTED_ITEM':
      return null
    default:
      return state
  }
}

export const selectedItem = selectedItemReducer;
