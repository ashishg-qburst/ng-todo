import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item'
import { TodoService } from '../todo.service'

@Component({
  selector: 'app-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.scss']
})
export class SelectedItemComponent implements OnInit {

  @Input() item: Item;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.selectedItem.subscribe(item => this.item = item);
  }

  validateItemNameLength(item: Item) {
    item.name = item.name.length < 1 ? 'Todo...' : item.name
  }
}
