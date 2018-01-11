import { Injectable } from '@angular/core';

import { Item } from './item';
import { TODO_ITEMS } from './mock-items';

import { dispatch } from '@angular-redux/store';
import { ActionCreators } from 'redux-undo';

@Injectable()
export class TodoService {

  constructor() {}

  setSelectedItem(item: Item): void {
    this.updateState({ type: 'SELECT_ITEM', item: item })
  }

  addItems(items: Item[], type: string = 'ADD_ITEMS') {
    this.updateState({ type: type, items: items });
  }

  addItem(item: Item) {
    this.updateState({ type: 'ADD_ITEM', item: item });
  }

  removeItemAtIndex(index: number) {
    this.updateState({ type: 'REMOVE_ITEM', index: index });
  }

  undo() {
    this.updateState(ActionCreators.undo());
    this.updateState({ type: 'CLEAR_SELECTED_ITEM' });
  }

  redo() {
    this.updateState(ActionCreators.redo());
    this.updateState({ type: 'CLEAR_SELECTED_ITEM' });
  }

  @dispatch()
  updateState(action) {
    return action;
  }
}
