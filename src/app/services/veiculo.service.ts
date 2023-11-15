import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veiculo } from '../model/veiculo';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  private URL = 'http://localhost:3000/veiculos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  veiculo!: Veiculo;


  constructor(private httpClient: HttpClient) { }

  public async getVeiculoById(id: number): Promise<Veiculo> {
    var resultado = this.httpClient.get<Veiculo>(`${this.URL + '/buscar/'}${id}`, this.httpOptions);
    return await lastValueFrom(resultado);
  }

  public async getAllVeiculos(): Promise<Veiculo[]> {
    var resultado = this.httpClient.get<Veiculo[]>(`${this.URL}`, this.httpOptions);
    return await lastValueFrom(resultado);
  }

  getAllObservable(): Observable<Veiculo[]> {
    return this.httpClient.get<Veiculo[]>(`${this.URL}`, this.httpOptions);
  }

  public async saveVeiculo(veiculo: Veiculo): Promise<Veiculo> {
    var resultado = this.httpClient.post<Veiculo>(this.URL, JSON.stringify(veiculo), this.httpOptions);
    return await lastValueFrom(resultado);
  }

}
