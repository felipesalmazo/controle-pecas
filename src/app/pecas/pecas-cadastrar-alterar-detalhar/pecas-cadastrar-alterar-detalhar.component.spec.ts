import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecasCadastrarAlterarDetalharComponent } from './pecas-cadastrar-alterar-detalhar.component';

describe('PecasCadastrarAlterarDetalharComponent', () => {
  let component: PecasCadastrarAlterarDetalharComponent;
  let fixture: ComponentFixture<PecasCadastrarAlterarDetalharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecasCadastrarAlterarDetalharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecasCadastrarAlterarDetalharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
