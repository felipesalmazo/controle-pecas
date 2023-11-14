import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['../../app.component.css']
})
export class FooterComponent implements OnInit {

  conteudo: string = 'Controle de Peças - Desenvolvido por Felipe Salmazo - 2023'

  constructor() { }

  ngOnInit(): void {
  }



}
