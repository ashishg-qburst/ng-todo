import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item'

@Component({
  selector: 'app-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.css']
})
export class SelectedItemComponent implements OnInit {

  @Input() item: Item;

  ngOnInit() {
  }
}