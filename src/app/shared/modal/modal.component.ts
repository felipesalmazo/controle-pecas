import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
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

  fecharModal() {
    (document.getElementById('dispararModal') as HTMLButtonElement).click();
    this.event.emit();
  }

}
