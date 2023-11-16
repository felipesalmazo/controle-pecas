import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosCadastrarAlterarDetalharComponent } from './veiculos-cadastrar-alterar-detalhar.component';

describe('VeiculosCadastrarAlterarDetalharComponent', () => {
  let component: VeiculosCadastrarAlterarDetalharComponent;
  let fixture: ComponentFixture<VeiculosCadastrarAlterarDetalharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculosCadastrarAlterarDetalharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculosCadastrarAlterarDetalharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
