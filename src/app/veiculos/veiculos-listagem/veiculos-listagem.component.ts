import { Router } from '@angular/router';
import { Veiculo } from './../../model/veiculo';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { ModalOpcaoComponent } from 'src/app/shared/modal-opcao/modal-opcao.component';

@Component({
  selector: 'app-veiculos-listagem',
  templateUrl: './veiculos-listagem.component.html',
  styleUrls: ['./veiculos-listagem.component.css', '../../app.component.css']
})
export class VeiculosListagemComponent implements OnInit {

  @ViewChild('modalOpcao')
  modalOpcao: ModalOpcaoComponent = new ModalOpcaoComponent();

  listaVeiculos: Veiculo[] = [
    {placa:'eph-5056', marca:'Chevrolet', modelo:'astra', anoFabricacao:'2011', motorizacao:'2.0', pecas:[]},
    {placa:'eph-5898', marca:'Chevrolet', modelo:'astra', anoFabricacao:'2011', motorizacao:'2.0', pecas:[]},
    {placa:'eph-5056', marca:'Chevrolet', modelo:'astra', anoFabricacao:'2011', motorizacao:'2.0', pecas:[]},
    {placa:'eph-5898', marca:'Chevrolet', modelo:'astra', anoFabricacao:'2011', motorizacao:'2.0', pecas:[]},
    {placa:'eph-5056', marca:'Chevrolet', modelo:'astra', anoFabricacao:'2011', motorizacao:'2.0', pecas:[]},
    {placa:'eph-5898', marca:'Chevrolet', modelo:'astra', anoFabricacao:'2011', motorizacao:'2.0', pecas:[]},
    {placa:'eph-5056', marca:'Chevrolet', modelo:'astra', anoFabricacao:'2011', motorizacao:'2.0', pecas:[]},
    {placa:'eph-5898', marca:'Chevrolet', modelo:'astra', anoFabricacao:'2011', motorizacao:'2.0', pecas:[]},
    {placa:'eph-5056', marca:'Chevrolet', modelo:'astra', anoFabricacao:'2011', motorizacao:'2.0', pecas:[]},
    {placa:'eph-5898', marca:'Chevrolet', modelo:'astra', anoFabricacao:'2011', motorizacao:'2.0', pecas:[]}
  ]

  titulo: string = 'Veículos > Listagem';
  veiculo: string = 'teste';

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  getPlaca(valor: string) {
    console.log("placa", valor);
  }

  getModelo(valor: string) {
    console.log("modelo", valor);
  }

  getMarca(valor: string) {
    console.log("marca", valor);
  }

  getVeiculo(valor: string) {
    console.log("veiculo completo", valor)
  }

  voltar() {
    this.router.navigate(['/inicio']);
  }

  cadastro() {
    this.router.navigate(['/veiculos', 'cadastro']);
  }

  alteracao() {
    this.router.navigate(['/veiculos', 'alteracao', this.veiculo])
  }

  detalhe() {
    this.router.navigate(['/veiculos', 'detalhar']);
  }

  abrirModalOpcaoExcluir() {
    this.modalOpcao.titulo = 'Exclusão';
    this.modalOpcao.mensagem = 'Deseja realmente excluir o item selecionado?';

    this.modalOpcao.abrirModal()
  }

  verificarExclusao(event: any) {
    if(event == 'sim') {
      console.log('excluiu', event)
    }
  }
}
