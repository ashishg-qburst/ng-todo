import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TODO_ITEMS } from '../mock-items';
import { Item } from '../item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  currentItem: Item;
  items = TODO_ITEMS;
  newItemName: string;
  @Output() selectedItem: EventEmitter<Item> = new EventEmitter<Item>();

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.items.push(new Item(this.newItemName));
    this.newItemName = '';
  }

  selectItem(item: Item) {
    this.currentItem = item;
    this.selectedItem.emit(this.currentItem);
  }

  showStringOverflow(text: string, limit: number = 20) {
    return text.length > limit ? '...' : ''
  }
}
