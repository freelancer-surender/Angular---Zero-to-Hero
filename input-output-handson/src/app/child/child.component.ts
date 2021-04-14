import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input()
  items = [];

  @Output()
  selectedItemEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  selectItem(item) {
    this.selectedItemEmitter.emit(item);
  }
}
