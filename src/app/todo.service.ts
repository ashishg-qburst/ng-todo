import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Item } from './item';
import { TODO_ITEMS } from './mock-items';

import { dispatch } from '@angular-redux/store';

@Injectable()
export class TodoService {

  selectedItem = new Subject<Item>();
  itemCount = new BehaviorSubject<number>(0);

  constructor() {}

  getItems = (): Observable<Item[]> => { return of(TODO_ITEMS); }

  setSelectedItem(item: Item): void {
    this.updateState({ type: 'SELECT_ITEM', item: item })
  }

  setItemCount(count: number): void {
    this.itemCount.next(count);
  }

  addItems(items: Item[]) {
    this.updateState({ type: 'ADD_ITEMS', items: items });
  }

  addItem(item: Item) {
    this.updateState({ type: 'ADD_ITEM', item: item });
  }

  removeItemAtIndex(index: number) {
    this.updateState({ type: 'REMOVE_ITEM', index: index });
  }

  @dispatch()
  updateState(action) {
    return action;
  }
}
