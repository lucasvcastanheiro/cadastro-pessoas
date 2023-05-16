import { TestBed } from '@angular/core/testing';

import { CadastroPessoasService } from './cadastro-pessoas.service';

describe('CadastroPessoasService', () => {
  let service: CadastroPessoasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroPessoasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
