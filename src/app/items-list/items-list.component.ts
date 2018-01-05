import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TODO_ITEMS } from '../mock-items';
import { Item } from '../item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

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
    this.selectedItem.emit(item);
    console.log(this.selectedItem);
  }
}
