import { Peca } from "./peca";

export class Veiculo {
  placa: string ='';
  marca: string='';
  modelo: string='';
  anoFabricacao: string='';
  motorizacao: string='';
  pecas?: Peca[]

}