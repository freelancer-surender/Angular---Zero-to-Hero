import { TestBed } from '@angular/core/testing';

import { ShapesService } from './shapes.service';

describe('ShapesService', () => {
  let service: ShapesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShapesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
