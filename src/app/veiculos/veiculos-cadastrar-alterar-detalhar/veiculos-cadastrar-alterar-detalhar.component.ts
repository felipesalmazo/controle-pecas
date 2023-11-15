import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from 'src/app/model/veiculo';
import { VeiculoService } from 'src/app/services/veiculo.service';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-veiculos-cadastrar-alterar-detalhar',
  templateUrl: './veiculos-cadastrar-alterar-detalhar.component.html',
  styleUrls: ['./veiculos-cadastrar-alterar-detalhar.component.css', '../../app.component.css']
})
export class VeiculosCadastrarAlterarDetalharComponent implements OnInit, OnDestroy {

  @ViewChild('modal')
  modal!: ModalComponent;

  titulo: string = '';
  acao!: string | null;

  mostraBotaoCadastrar: boolean = false;
  mostraBotaoAlterar: boolean = false;
  desabilitaCampos: boolean = false;

  veiculoForm = this.formBuilder.group({
    placa: ['',Validators.required],
    marca: ['', [Validators.required, Validators.pattern('[a-zA-z ]+')]],
    modelo: ['', [Validators.required, Validators.pattern('[a-zA-z0-9 ]+')]],
    anoFabricacao: [''],
    motorizacao: [''],
  })

  veiculo: Veiculo = new Veiculo();

  constructor(private path: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private veiculoService: VeiculoService) { }

  ngOnInit(): void {
    this.acao = this.path.snapshot.paramMap.get('acao');

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
        this.veiculo = this.veiculoService.veiculo;
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

  cadastrar(valor: Veiculo) {
    this.veiculoService.saveVeiculo(valor).then(
      res => {
        this.modal.titulo = 'Aviso';
        this.modal.mensagem = 'Cadastro realizado com sucesso!';
        this.modal.abrirModal();
      }
    ).catch(e => {
      this.modal.titulo = 'Aviso';
      this.modal.mensagem = e;
      this.modal.abrirModal();
    })
    
  }

  alterar(placa: string, marca: string, modelo: string, anoFabricacao: string, motorizacao: string) {
    this.modal.titulo = 'Aviso';
    this.modal.mensagem = 'Alteração realizada com sucesso!';
    this.modal.abrirModal();
  }

  fecharModal() {
    this.router.navigate(['/veiculos/listagem']);
  }

  ngOnDestroy(): void {
    this.veiculoService.veiculo = new Veiculo();
  }

}
