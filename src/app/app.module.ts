import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoService } from './todo.service'
import { ItemsListComponent } from './items-list/items-list.component';
import { SelectedItemComponent } from './selected-item/selected-item.component';

import { applyMiddleware, Store, combineReducers, compose, createStore } from 'redux';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { undoableTodos } from './reducers'
import { IAppState } from './state'
import logger from 'redux-logger'

export const store: Store<IAppState> = createStore(undoableTodos, applyMiddleware(logger));

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    SelectedItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }
}
