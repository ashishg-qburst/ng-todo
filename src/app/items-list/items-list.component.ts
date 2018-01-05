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
  @Output() removedItem: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() selectedItem: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() itemCountChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.itemCountChange.emit(this.items.length);
  }

  addItem() {
    this.items.push(new Item(this.newItemName));
    this.itemCountChange.emit(this.items.length);
    this.newItemName = '';
  }

  removeItem(index: number) {
    this.removedItem.emit(this.items[index]);
    this.items.splice(index, 1);
    this.itemCountChange.emit(this.items.length);
  }

  selectItem(item: Item) {
    this.currentItem = item;
    this.selectedItem.emit(this.currentItem);
  }

  showStringOverflow(text: string, limit: number = 20) {
    return text.length > limit ? '...' : ''
  }
}
