import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { dispatch } from '@angular-redux/store';

import { Item } from '../item';
import { TodoService } from '../todo.service'

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  currentItem: Item;
  items: Item[];
  newItemName: string;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getItems();
  }

  @dispatch()
  updateState(action) {
    return action;
  }

  getItems() {
    this.todoService.getItems().subscribe(items => {
      this.items = items;
      this.updateItemCount();
    });
  }

  addItem() {
    let newItem = new Item(this.newItemName)
    this.updateState({ type: 'ADD_ITEM', item: newItem });
    this.items.push(newItem);
    this.newItemName = '';
    this.updateItemCount();
  }

  removeItem(index: number) {
    if(this.items[index] === this.currentItem) { this.todoService.setSelectedItem(null) }
    this.items.splice(index, 1);
    this.updateItemCount();
  }

  updateItemCount = () => { this.todoService.setItemCount(this.items.length); }

  selectItem(item: Item) {
    this.updateState({ type: 'SELECT_ITEM', item: item });
    this.currentItem = item;
    this.todoService.setSelectedItem(item);
  }

  showStringOverflow(text: string, limit: number = 20) {
    return text.length > limit ? '...' : ''
  }
}
