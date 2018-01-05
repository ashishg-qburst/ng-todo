import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedItem: Item;
  itemCount: number;

  setSelectedItem(item) {
    this.selectedItem = item;
  }

  updateSelectedItemAfterItemRemoval(item) {
    if(item === this.selectedItem) { this.selectedItem = null }
  }

  setItemCount = (count: number) => { this.itemCount = count }

  title = () => { return this.itemCount < 1 ? 'N<small class="text-muted">othin</small>g Todo' : 'Ng Todo' }
}
