import { TestBed } from '@angular/core/testing';

import { ObtenerdatosService } from './obtenerdatos.service';

describe('ObtenerdatosService', () => {
  let service: ObtenerdatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerdatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
