import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoService } from './todo.service'
import { ItemsListComponent } from './items-list/items-list.component';
import { SelectedItemComponent } from './selected-item/selected-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    SelectedItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
