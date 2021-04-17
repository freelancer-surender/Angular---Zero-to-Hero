import { Component, OnInit } from '@angular/core';
import { ShapesService } from '../shapes.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

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
