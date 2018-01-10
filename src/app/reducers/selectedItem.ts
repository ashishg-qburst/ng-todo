import { Item } from '../item'

const selectedItemReducer = (state: Item = null, action) => {
  console.log(action);
  switch (action.type) {
    case 'SELECT_ITEM':
      return action.item
    default:
      return state
  }
}

export const selectedItem = selectedItemReducer;
