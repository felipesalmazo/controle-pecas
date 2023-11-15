import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroTabelaVeiculos'
})
export class FiltroTabelaVeiculosPipe implements PipeTransform {

  transform(value: Array<any>, filtro: string): any {
    if (filtro) {
        filtro = filtro.toUpperCase().replace('-', '');
        
        return value.filter(a =>
            a.placa.toUpperCase().indexOf(filtro) >= 0
        );
    } else {
        return value;
    }
}

}
