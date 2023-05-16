import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPessoasComponent } from './cadastro-pessoas.component';

describe('CadastroPessoasComponent', () => {
  let component: CadastroPessoasComponent;
  let fixture: ComponentFixture<CadastroPessoasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroPessoasComponent]
    });
    fixture = TestBed.createComponent(CadastroPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
