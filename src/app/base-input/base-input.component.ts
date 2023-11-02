import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-base-input',
  templateUrl: './base-input.component.html',
  styleUrls: ['./base-input.component.css'],
})
export class BaseInputComponent implements OnInit {
  @Output()
  emitirValor = new EventEmitter<string>();

  @Input('titulo')
  titulo!: string;

  constructor() {}

  ngOnInit(): void {}

  emissaoValor(valor: string) {
    this.emitirValor.emit(valor);
  }
}
