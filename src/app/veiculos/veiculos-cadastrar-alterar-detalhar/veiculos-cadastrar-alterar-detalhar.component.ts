import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from 'src/app/model/veiculo';
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
  acao!: string | null;

  mostraBotaoCadastrar: boolean = false;
  mostraBotaoAlterar: boolean = false;
  desabilitaCampos: boolean = false;

  veiculoForm = this.formBuilder.group({
    placa: ['',Validators.required],
    marca: ['', [Validators.required, Validators.pattern('[a-zA-z]+')]],
    modelo: ['', [Validators.required, Validators.pattern('[a-zA-z]+')]],
    anoFabricacao: [''],
    motorizacao: [''],
  })

  veiculo: Veiculo = new Veiculo();

  constructor(private path: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.acao = this.path.snapshot.paramMap.get('acao');
    
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

    switch (this.acao) {
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

  cadastrar(valor: any) {

    localStorage.setItem('veiculo', JSON.stringify(valor));

    this.modal.titulo = 'Aviso';
    this.modal.mensagem = 'Cadastro realizado com sucesso!';
    this.modal.abrirModal();
  }

  alterar(placa: string, marca: string, modelo: string, anoFabricacao: string, motorizacao: string) {
    this.modal.titulo = 'Aviso';
    this.modal.mensagem = 'Alteração realizada com sucesso!';
    this.modal.abrirModal();
  }

  fecharModal() {
    this.router.navigate(['/veiculos/listagem']);
  }

}
