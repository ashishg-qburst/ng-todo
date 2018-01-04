import { Component, OnInit } from '@angular/core';
import { TODO_ITEMS } from '../mock-items';
import { Item } from '../item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  newItemName: string;
  items = TODO_ITEMS;

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.items.push(new Item(this.newItemName));
    this.newItemName = '';
  }
}
