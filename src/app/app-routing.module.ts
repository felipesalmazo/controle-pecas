import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { VeiculosListagemComponent } from './veiculos/veiculos-listagem/veiculos-listagem.component';
import { PecasListagemComponent } from './pecas/pecas-listagem/pecas-listagem.component';

const routes: Routes = [
  {path: 'inicio', component: PaginaPrincipalComponent},
  {path: 'veiculos-listagem', component: VeiculosListagemComponent},
  {path: 'pecas-listagem', component: PecasListagemComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
