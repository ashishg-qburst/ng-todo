import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Item } from './item';
import { TODO_ITEMS } from './mock-items';

@Injectable()
export class TodoService {

  selectedItem = new Subject<Item>();
  itemCount = new BehaviorSubject<number>(0);

  constructor() {}

  getItems = (): Observable<Item[]> => { return of(TODO_ITEMS); }

  setSelectedItem(item: Item): void {
    this.selectedItem.next(item);
  }

  setItemCount(count: number): void {
    this.itemCount.next(count);
  }
}
