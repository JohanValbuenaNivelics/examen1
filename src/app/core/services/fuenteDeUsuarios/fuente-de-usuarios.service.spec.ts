import { TestBed } from '@angular/core/testing';

import { FuenteDeUsuariosService } from './fuente-de-usuarios.service';

describe('FuenteDeUsuariosService', () => {
  let service: FuenteDeUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuenteDeUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
