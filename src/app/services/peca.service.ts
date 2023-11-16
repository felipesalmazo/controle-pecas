import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Peca } from '../model/peca';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PecaService {
  private URL = 'http://localhost:3000/pecas/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  
  peca!: Peca;

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Peca[]> {
    return this.httpClient.get<Peca[]>(`${this.URL}`, this.httpOptions);
  }

  getPecaById(id: number): Observable<Peca> {
    return this.httpClient.get<Peca>(`${this.URL  + 'buscar/'}${id}`, this.httpOptions);
  }

  getPecaByVeiculo(veiculoId: number): Observable<Peca[]> {
    return this.httpClient.get<Peca[]>(`${this.URL + 'veiculo/'}${veiculoId}`, this.httpOptions);
  }

  savePeca(valor: Peca):Observable<Peca> {
    return this.httpClient.post<Peca>(`${this.URL}`,JSON.stringify(valor), this.httpOptions);
  }

  editPeca(valor: Peca):Observable<Peca> {
    return this.httpClient.put<Peca>(`${this.URL}${valor.id}`,JSON.stringify(valor), this.httpOptions);
  }

  deletePeca(id: number): Observable<Peca> {
    return this.httpClient.delete<Peca>(`${this.URL}${id}`, this.httpOptions);
  }
}
