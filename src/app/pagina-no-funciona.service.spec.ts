import { TestBed } from '@angular/core/testing';

import { PaginaNoFuncionaService } from './pagina-no-funciona.service';

describe('PaginaNoFuncionaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaginaNoFuncionaService = TestBed.get(PaginaNoFuncionaService);
    expect(service).toBeTruthy();
  });
});
