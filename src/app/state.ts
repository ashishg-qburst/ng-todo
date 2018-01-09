import { Item } from './item'

export interface IAppState {
  todos: Item[],
  selectedItem: Item
}
