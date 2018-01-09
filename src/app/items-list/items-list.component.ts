import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Item } from '../item';
import { select } from '@angular-redux/store';
import { TodoService } from '../todo.service'

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  newItemName: string;
  @select(['present', 'todos']) items: Item[];

  constructor(private todoService: TodoService) { }

  ngOnInit() { this.getItems(); }

  getItems() {
    this.todoService.getItems().subscribe(items => {
      this.todoService.addItems(items);
    });
  }

  addItem() {
    this.todoService.addItem(new Item(this.newItemName));
    this.newItemName = '';
  }

  removeItem(index: number) {
    this.todoService.removeItemAtIndex(index);
  }

  selectItem(item: Item) {
    this.todoService.setSelectedItem(item);
  }

  showStringOverflow(text: string, limit: number = 20) {
    return text.length > limit ? '...' : ''
  }
}
