import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShapesService {

  constructor() { }

  getClassName(shape, color) {
    return shape + '-' + color;
  }
}
