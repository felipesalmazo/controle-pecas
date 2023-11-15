import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOpcaoComponent } from './modal-opcao.component';

describe('ModalOpcaoComponent', () => {
  let component: ModalOpcaoComponent;
  let fixture: ComponentFixture<ModalOpcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalOpcaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOpcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
