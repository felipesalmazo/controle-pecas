import { Router } from '@angular/router';
import { Veiculo } from './../../model/veiculo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiculos-listagem',
  templateUrl: './veiculos-listagem.component.html',
  styleUrls: ['./veiculos-listagem.component.css', '../../app.component.css']
})
export class VeiculosListagemComponent implements OnInit {

  listaVeiculos: Veiculo[] = [
    {placa:'eph-5056', marca:'Chevrolet', modelo:'astra', anoFabricacao:'2011', motorizacao:'2.0', pecas:[]},
    {placa:'eph-5898', marca:'Chevrolet', modelo:'astra', anoFabricacao:'2011', motorizacao:'2.0', pecas:[]},
    {placa:'eph-5056', marca:'Chevrolet', modelo:'astra', anoFabricacao:'2011', motorizacao:'2.0', pecas:[]},
    {placa:'eph-5898', marca:'Chevrolet', modelo:'astra', anoFabricacao:'2011', motorizacao:'2.0', pecas:[]},
    {placa:'eph-5056', marca:'Chevrolet', modelo:'astra', anoFabricacao:'2011', motorizacao:'2.0', pecas:[]},
    {placa:'eph-5898', marca:'Chevrolet', modelo:'astra', anoFabricacao:'2011', motorizacao:'2.0', pecas:[]},
    {placa:'eph-5056', marca:'Chevrolet', modelo:'astra', anoFabricacao:'2011', motorizacao:'2.0', pecas:[]},
    {placa:'eph-5898', marca:'Chevrolet', modelo:'astra', anoFabricacao:'2011', motorizacao:'2.0', pecas:[]},
    {placa:'eph-5056', marca:'Chevrolet', modelo:'astra', anoFabricacao:'2011', motorizacao:'2.0', pecas:[]},
    {placa:'eph-5898', marca:'Chevrolet', modelo:'astra', anoFabricacao:'2011', motorizacao:'2.0', pecas:[]}
  ]

  titulo: string = 'Veículos > Listagem';
  veiculo: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    
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
    this.router.navigate(['/inicio']);
  }

}
