import { WebStorageUtil } from './../../utils/web-storage-util';
import { Peca } from './../../model/peca';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PecaService } from 'src/app/services/peca.service';
import { ModalOpcaoComponent } from 'src/app/shared/modal-opcao/modal-opcao.component';

@Component({
  selector: 'app-pecas-listagem',
  templateUrl: './pecas-listagem.component.html',
  styleUrls: ['./pecas-listagem.component.css', '../../app.component.css']
})
export class PecasListagemComponent implements OnInit {

  @ViewChild('modalOpcao')
  modalOpcao: ModalOpcaoComponent = new ModalOpcaoComponent();

  listaPecas: Peca[] = []

  titulo: string = 'Peças > Listagem';

  desabilitaBotoes: boolean = true;
  filtro: string = '';

  private peca!: Peca;

  constructor(private router: Router, private pecaService: PecaService) { }

  ngOnInit(): void {
    this.pecaService.getAll().subscribe(
      {
        next: (valor) => {
          this.listaPecas = valor;
        },
        error: (error) => {
          alert(error)
        }
      }
    )
  }

  getPeca(valor: Peca) {
    this.desabilitaBotoes = false;
    this.pecaService.peca = valor;
  }

  voltar() {
    this.router.navigate(['/inicio']);
  }

  cadastro() {
    this.router.navigate(['/pecas', 'cadastro']);
  }

  alteracao() {
    this.router.navigate(['/pecas', 'alteracao'])
  }

  detalhe() {
    this.router.navigate(['/pecas', 'detalhar']);
  }

  abrirModalOpcaoExcluir() {
    this.modalOpcao.titulo = 'Exclusão';
    this.modalOpcao.mensagem = 'Deseja realmente excluir o item selecionado?';
    this.modalOpcao.abrirModal()
  }

  verificarExclusao(event: any) {
    if(event == 'sim') {
      this.pecaService.deletePeca(this.pecaService.peca.id).subscribe(
        {
          next: () => {
            window.location.reload();
          },
          error: (error) => {
            alert(JSON.stringify(error));
          }
        }
      )
    }
  }

}
