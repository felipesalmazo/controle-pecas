import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-opcao',
  templateUrl: './modal-opcao.component.html',
  styleUrls: ['./modal-opcao.component.css']
})
export class ModalOpcaoComponent implements OnInit {
  mensagem: string = '';
  titulo: string = '';

  @Output()
  event: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  abrirModal() {
    (document.getElementById('dispararModal') as HTMLButtonElement).click();
  }

  fecharModal(opcao: string) {
    (document.getElementById('dispararModal') as HTMLButtonElement).click();
    this.event.emit(opcao);
  }
}
