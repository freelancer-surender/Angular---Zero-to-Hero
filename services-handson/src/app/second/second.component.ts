import { Component, OnInit } from '@angular/core';
import { ShapesService } from '../shapes.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  shape = '';
  color = '';
  shapeClass = '';

  constructor(private shapesService: ShapesService) { }

  ngOnInit(): void {
  }

  drawShape() {
    this.shapeClass = this.shapesService.getClassName(this.shape, this.color);
  }

}
