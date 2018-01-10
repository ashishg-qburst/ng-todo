import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../item'
import { TodoService } from '../todo.service'

import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.scss']
})
export class SelectedItemComponent implements OnInit {

  @select('selectedItem') item: Observable<Item>;

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  validateItemNameLength(item: Item) {
    item.name = item.name.length < 1 ? 'Todo...' : item.name
  }
}
