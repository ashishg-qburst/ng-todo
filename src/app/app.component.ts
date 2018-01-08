import { Component } from '@angular/core';

import { Item } from './item';
import { TodoService } from './todo.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.itemCount.subscribe(itemCount => this.setTitle(itemCount));
  }

  setTitle(itemCount: number) {
    this.title = itemCount < 1 ? 'N<small class="text-muted">othin</small>g Todo' : 'Ng Todo';
  }
}
