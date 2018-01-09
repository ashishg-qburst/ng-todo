import { Item } from './item'

export interface TodoAppState {
  todos: Item[],
  selectedItem: Item
}
