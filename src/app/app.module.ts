import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PecasListagemComponent } from './pecas/pecas-listagem/pecas-listagem.component';
import { VeiculosListagemComponent } from './veiculos/veiculos-listagem/veiculos-listagem.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PecasCadastrarAlterarDetalharComponent } from './pecas/pecas-cadastrar-alterar-detalhar/pecas-cadastrar-alterar-detalhar.component';
import { VeiculosCadastrarAlterarDetalharComponent } from './veiculos/veiculos-cadastrar-alterar-detalhar/veiculos-cadastrar-alterar-detalhar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TituloPaginaComponent } from './shared/titulo-pagina/titulo-pagina.component';
import { NgxMaskModule } from 'ngx-mask';
import { ModalComponent } from './shared/modal/modal.component';
import { ModalOpcaoComponent } from './shared/modal-opcao/modal-opcao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FiltroTabelaPipe } from './pipes/filtro-tabela.pipe';
import { FiltroTabelaVeiculosPipe } from './pipes/filtro-tabela-veiculos.pipe'

@NgModule({
  declarations: [
    AppComponent,
    PecasListagemComponent,
    VeiculosListagemComponent,
    PaginaPrincipalComponent,
    PecasCadastrarAlterarDetalharComponent,
    VeiculosCadastrarAlterarDetalharComponent,
    HeaderComponent,
    FooterComponent,
    TituloPaginaComponent,
    ModalComponent,
    ModalOpcaoComponent,
    FiltroTabelaPipe,
    FiltroTabelaVeiculosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
