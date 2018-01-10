import { Item } from './item'

export interface TodoAppState {
  todos: any,
  selectedItem: Item
}

export const initState: TodoAppState = { todos: {}, selectedItem: null }
