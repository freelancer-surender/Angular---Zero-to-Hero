import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
})
export class TemplateDrivenComponent implements OnInit {

  @ViewChild('myForm', {static: true}) myForm;
  constructor() {}

  ngOnInit(): void {}

  onSubmit(myForm) {
    this.myForm.reset();
  }
}
