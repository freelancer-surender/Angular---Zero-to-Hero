import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  filterByType = '';
  filteredItems = [];
  items = [
    { name: 'Green', type: 'color' },
    { name: 'Dog', type: 'animal' },
    { name: 'Apple', type: 'fruit' },
    { name: 'Mango', type: 'fruit' },
    { name: 'Yellow', type: 'color' },
    { name: 'Cat', type: 'animal' },
    { name: 'Blue', type: 'color' },
    { name: 'Red', type: 'color' },
    { name: 'Cow', type: 'animal' },
    { name: 'Goat', type: 'animal' },
    { name: 'Black', type: 'color' },
    { name: 'Banana', type: 'fruit' },
    { name: 'Cherry', type: 'fruit' },
  ];
  selectedItem: any;

  ngOnInit() {
    this.filteredItems = [...this.items];
  }

  filterBy(type) {
    this.filteredItems = [...this.items.filter((x) => x.type === type)];
  }

  selectItem(item) {
    this.selectedItem = item;
  }
}
