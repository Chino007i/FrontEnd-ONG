import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNoFuncionaComponent } from './pagina-no-funciona.component';

describe('PaginaNoFuncionaComponent', () => {
  let component: PaginaNoFuncionaComponent;
  let fixture: ComponentFixture<PaginaNoFuncionaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaNoFuncionaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaNoFuncionaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
