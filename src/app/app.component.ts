import { Component } from '@angular/core';

import { Item } from './item';
import { TodoService } from './todo.service'
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title: string;
  @select(state => state.present.todos.length) itemCount: Observable<number>;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.itemCount.subscribe(itemCount => this.setTitle(itemCount));
  }

  setTitle(itemCount: number) {
    this.title = itemCount < 1 ? 'N<small class="text-muted">othin</small>g Todo' : 'Ng Todo';
  }
}
