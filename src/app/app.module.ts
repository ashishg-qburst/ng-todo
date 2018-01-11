import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoService } from './todo.service'
import { StorageService } from './storage.service'
import { ItemsListComponent } from './items-list/items-list.component';
import { SelectedItemComponent } from './selected-item/selected-item.component';

import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { TodoAppState, initState } from './state'

import { store } from './store'

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
  providers: [TodoService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<TodoAppState>) {
    ngRedux.provideStore(store);
  }
}
