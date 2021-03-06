import { Component } from '@angular/core';

import { Item } from './item';
import { TodoService } from './todo.service'

import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @select(state => state.todos.past.length > 0) undoable: Observable<boolean>;
  @select(state => state.todos.future.length > 0) redoable: Observable<boolean>;
  @select(state => state.todos.present.length) itemCount: Observable<number>;

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  getTitle(itemCount: number) {
    return itemCount < 1 ? 'N<small class="text-muted">othin</small>g Todo' : 'Ng Todo';
  }

  undoTodo() {
    this.todoService.undo();
  }

  redoTodo() {
    this.todoService.redo();
  }
}
