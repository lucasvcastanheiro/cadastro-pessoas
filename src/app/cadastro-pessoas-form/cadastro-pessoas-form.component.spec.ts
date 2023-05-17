import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPessoasFormComponent } from './cadastro-pessoas-form.component';

describe('CadastroPessoasFormComponent', () => {
  let component: CadastroPessoasFormComponent;
  let fixture: ComponentFixture<CadastroPessoasFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroPessoasFormComponent]
    });
    fixture = TestBed.createComponent(CadastroPessoasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
