import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ng Todo';
  selectedItem: Item;

  setSelectedItem(item) {
    this.selectedItem = item;
  }

  updateSelectedItemAfterItemRemoval(item) {
    if(item === this.selectedItem) { this.selectedItem = null }
  }
}
