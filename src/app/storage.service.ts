import { Injectable } from '@angular/core';

import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

import { TodoAppState } from './state'
import { store } from './store'
import { loadState, saveState } from './storageHandler'

@Injectable()
export class StorageService {

  constructor() {
    store.subscribe(() => {
      saveState(store.getState());
    });
  }

  getItems = (): Observable<TodoAppState> => { return of(loadState()); }
}
