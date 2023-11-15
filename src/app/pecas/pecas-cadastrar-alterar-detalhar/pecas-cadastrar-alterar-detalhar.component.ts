import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Peca } from 'src/app/model/peca';
import { Veiculo } from 'src/app/model/veiculo';
import { PecaService } from 'src/app/services/peca.service';
import { VeiculoService } from 'src/app/services/veiculo.service';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-pecas-cadastrar-alterar-detalhar',
  templateUrl: './pecas-cadastrar-alterar-detalhar.component.html',
  styleUrls: ['./pecas-cadastrar-alterar-detalhar.component.css', '../../app.component.css']
})
export class PecasCadastrarAlterarDetalharComponent implements OnInit, OnDestroy {

  @ViewChild('modal')
  modal!: ModalComponent;

  titulo: string = '';
  acao!: string | null;

  mostraBotaoCadastrar: boolean = false;
  mostraBotaoAlterar: boolean = false;
  desabilitaCampos: boolean = false;

  pecaForm = this.formBuilder.group({
    numeroSerie: ['',Validators.required],
    marca: ['', [Validators.required, Validators.pattern('[a-zA-z ]+')]],
    nome: ['', [Validators.required, Validators.pattern('[a-zA-z0-9 ]+')]],
    veiculoId: [''],
  })

  listaVeiculos: Veiculo[] = [];

  peca: Peca = new Peca();

  constructor(private path: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private pecaService: PecaService, private veiculoService: VeiculoService) { }

  ngOnInit(): void {
    this.acao = this.path.snapshot.paramMap.get('acao');

    switch (this.acao) {
      case 'cadastro':
        this.titulo = 'Peças > Listagem > Cadastro';
        this.mostraBotaoAlterar = false;
        this.mostraBotaoCadastrar = true;
        this.desabilitaCampos = false;
        break;

      case 'alteracao':
        this.titulo = 'Peças > Listagem > Alteração';
        this.mostraBotaoAlterar = true;
        this.mostraBotaoCadastrar = false;
        this.desabilitaCampos = false;
        this.peca = this.pecaService.peca;
        break;

      case 'detalhar':
        this.titulo = 'Peças > Listagem > Detalhar';
        this.mostraBotaoAlterar = false;
        this.mostraBotaoCadastrar = false;
        this.desabilitaCampos = true;
        this.peca = this.pecaService.peca;

        // this.veiculoService.getVeiculoById(this.peca.veiculoId).then(
        //   res => {
        //     this.pecaForm.controls['veiculo'].setValue(res);
        //   }
        // ).catch(e => {
        //   this.modal.titulo = 'Aviso';
        //   this.modal.mensagem = JSON.stringify(e);
        //   this.modal.abrirModal();
        // })

        
        this.pecaForm.disable();
        break;

      default:
        break;
    }

    this.veiculoService.getAllVeiculos().then(
      res => {
        this.listaVeiculos = res;
      }
    ).catch(e => {
      this.modal.titulo = 'Aviso';
      this.modal.mensagem = JSON.stringify(e);
      this.modal.abrirModal();
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

  voltar() {
    this.router.navigate(['/pecas/listagem']);
  }

  cadastrar(valor: Peca) {
    this.pecaService.savePeca(valor).subscribe(
      {
        next: () => {
          this.modal.titulo = 'Aviso';
          this.modal.mensagem = 'Cadastro realizado com sucesso!';
          this.modal.abrirModal();
        },
        error: (error) => {
          this.modal.titulo = 'Aviso';
          this.modal.mensagem = JSON.stringify(error);
          this.modal.abrirModal();
        }
      }
    )
  }

  alterar() {
    console.log("AQUI", this.pecaForm.value);
    this.pecaService.editPeca(this.peca).subscribe(
      {
        next: () => {
          this.modal.titulo = 'Aviso';
          this.modal.mensagem = 'Alteração realizada com sucesso!';
          this.modal.abrirModal();
        },
        error: (error) => {
          this.modal.titulo = 'Aviso';
          this.modal.mensagem = JSON.stringify(error);
          this.modal.abrirModal();
        }
      }
    )
  }

  fecharModal() {
    this.router.navigate(['/pecas/listagem']);
  }

  ngOnDestroy(): void {
    this.pecaService.peca = new Peca();
  }
}
