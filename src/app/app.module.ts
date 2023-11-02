import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PecasListagemComponent } from './pecas/pecas-listagem/pecas-listagem.component';
import { VeiculosListagemComponent } from './veiculos/veiculos-listagem/veiculos-listagem.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PecasCadastrarAlterarDetalharComponent } from './pecas/pecas-cadastrar-alterar-detalhar/pecas-cadastrar-alterar-detalhar.component';
import { VeiculosCadastrarAlterarDetalharComponent } from './veiculos/veiculos-cadastrar-alterar-detalhar/veiculos-cadastrar-alterar-detalhar.component';

@NgModule({
  declarations: [
    AppComponent,
    PecasListagemComponent,
    VeiculosListagemComponent,
    PaginaPrincipalComponent,
    PecasCadastrarAlterarDetalharComponent,
    VeiculosCadastrarAlterarDetalharComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
