import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css', '../app.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToListagemVeiculos() {
    this.router.navigate(['/veiculos/listagem'])
  }

  goToListagemPecas() {
    this.router.navigate(['/pecas/listagem'])
  }
}
