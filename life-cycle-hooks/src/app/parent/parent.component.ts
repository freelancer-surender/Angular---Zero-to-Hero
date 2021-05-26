import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges, DoCheck {

  isChild = true;
  firstName = "";

  constructor() {
    console.log("Parent Constructor called");
   }

  ngOnInit(): void {
    console.log("Parent OnInit - component is initialized");
  }

  ngOnChanges() {
    console.log("Parent Onchanges");
  }

  ngDoCheck() {
    console.log("Parent DoCheck");
  }

  toggleChild() {
    this.isChild = !this.isChild;
  }

}
