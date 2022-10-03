import { vacina } from './../model/vacina';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacinasService {
  private readonly API = 'http://localhost:8080/vacina'; //endpoint do servidor (backend)

  constructor(private httpClient: HttpClient) { }

  listarTodas(): Observable<vacina[]>{
    return this.httpClient.get<vacina[]>(this.API);
  }

  salvar(vacina: vacina): Observable<vacina>{
    return this.httpClient.post<vacina>(this.API, vacina);
  }
}
