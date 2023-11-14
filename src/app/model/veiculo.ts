import { Peca } from "./peca";

export class Veiculo {
  placa: string;
  marca: string;
  modelo: string;
  anoFabricacao: string;
  motorizacao: string;
  pecas?: Peca[]

  constructor(placa: string, marca: string, modelo: string, anoFabricacao: string, motorizacao: string, pecas: Peca[]){
    this.placa = placa;
    this.marca = marca;
    this.modelo = modelo;
    this.anoFabricacao = anoFabricacao;
    this.motorizacao = motorizacao;
  }
}