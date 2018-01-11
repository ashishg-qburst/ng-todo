import { Injectable } from '@angular/core';

import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { throttle } from 'lodash'

import { TodoAppState } from './state'
import { store } from './store'
import { loadState, saveState } from './storageHandler'



@Injectable()
export class StorageService {

  constructor() {
    store.subscribe(throttle(() => {
      saveState(store.getState());
    }, 1000));
  }

  getItems = (): Observable<TodoAppState> => { return of(loadState()); }
}
