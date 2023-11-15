import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-veiculos-cadastrar-alterar-detalhar',
  templateUrl: './veiculos-cadastrar-alterar-detalhar.component.html',
  styleUrls: ['./veiculos-cadastrar-alterar-detalhar.component.css', '../../app.component.css']
})
export class VeiculosCadastrarAlterarDetalharComponent implements OnInit {

  @ViewChild('modal')
  modal!: ModalComponent;

  titulo: string = '';

  mostraBotaoCadastrar: boolean = false;
  mostraBotaoAlterar: boolean = false;
  desabilitaCampos: boolean = false;

  constructor(private path: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const acao = this.path.snapshot.paramMap.get('acao');
    
    // if (acao == 'cadastro') {
    //   this.titulo = 'Veículos > Listagem > Cadastro';
    //   this.mostraBotaoAlterar = false;
    //   this.mostraBotaoCadastrar = true;
    // }

    // if (acao == 'alteracao') {
    //   this.titulo = 'Veículos > Listagem > Cadastro';
    //   this.mostraBotaoAlterar = false;
    //   this.mostraBotaoCadastrar = true;
    // }

    switch (acao) {
      case 'cadastro':
        this.titulo = 'Veículos > Listagem > Cadastro';
        this.mostraBotaoAlterar = false;
        this.mostraBotaoCadastrar = true;
        this.desabilitaCampos = false;
        break;

      case 'alteracao':
        this.titulo = 'Veículos > Listagem > Alteração';
        this.mostraBotaoAlterar = true;
        this.mostraBotaoCadastrar = false;
        this.desabilitaCampos = false;
        break;

      case 'detalhar':
        this.titulo = 'Veículos > Listagem > Detalhar';
        this.mostraBotaoAlterar = false;
        this.mostraBotaoCadastrar = false;
        this.desabilitaCampos = true;
        break;

      default:
        break;
    }
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
    this.router.navigate(['/veiculos/listagem']);
  }

  cadastrar() {
    this.modal.titulo = 'Aviso';
    this.modal.mensagem = 'Cadastro realizado com sucesso!';
    this.modal.abrirModal();
  }

  alterar() {
    this.modal.titulo = 'Aviso';
    this.modal.mensagem = 'Alteração realizada com sucesso!';
    this.modal.abrirModal();
  }

  fecharModal() {
    this.router.navigate(['/veiculos/listagem']);
  }

}
