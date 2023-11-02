import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'controle-pecas';

  tituloCombo = 'combo teste';
  tituloInput = 'input teste';

  lista: string[] = [
    'primeiro',
    'combo',
    'padronizado'
  ]

  textoChild: string = '';

  capturaValor(event: string) {
    this.textoChild = event;
  }
}
