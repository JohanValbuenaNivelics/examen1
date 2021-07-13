import { TestBed } from '@angular/core/testing';

import { UsuariosDefaultService } from './usuarios-default.service';

describe('UsuariosDefaultService', () => {
  let service: UsuariosDefaultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosDefaultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
