import { Router } from '@angular/router';
import { Veiculo } from './../../model/veiculo';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalOpcaoComponent } from 'src/app/shared/modal-opcao/modal-opcao.component';
import { VeiculoService } from 'src/app/services/veiculo.service';
import { WebStorageUtil } from 'src/app/utils/web-storage-util';

@Component({
  selector: 'app-veiculos-listagem',
  templateUrl: './veiculos-listagem.component.html',
  styleUrls: ['./veiculos-listagem.component.css', '../../app.component.css']
})
export class VeiculosListagemComponent implements OnInit {

  @ViewChild('modalOpcao')
  modalOpcao: ModalOpcaoComponent = new ModalOpcaoComponent();

  listaVeiculos: Veiculo[] = []

  titulo: string = 'Veículos > Listagem';

  desabilitaBotoes: boolean = true;
  filtro: string = '';

  private veiculo!: Veiculo;

  constructor(private router: Router, private veiculoService: VeiculoService) { }

  ngOnInit(): void {
    this.veiculoService.getAllVeiculos().then(
      res => {
        this.listaVeiculos = res
      }
    ).catch(e => {
      alert(JSON.stringify(e));
    })
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

  getVeiculo(valor: Veiculo) {
    this.desabilitaBotoes = false;
    this.veiculoService.veiculo = valor;
  }

  voltar() {
    this.router.navigate(['/inicio']);
  }

  cadastro() {
    this.router.navigate(['/veiculos', 'cadastro']);
  }

  alteracao() {
    this.router.navigate(['/veiculos', 'alteracao'])
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
      this.veiculoService.deleteVeiculo(this.veiculoService.veiculo.id).then(
        () => {
          window.location.reload();
        }
      ).catch(e => {
        alert(JSON.stringify(e))
      })
    }
  }
}
