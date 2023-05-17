import { switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { PagePessoa, Pessoa } from '../models/Pessoa';
import { HttpClient } from '@angular/common/http';
import { tap, forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadastroPessoasService {
  constructor(private httpClient: HttpClient) {}

  private readonly API_BASE_URL = 'http://localhost:8080/pessoa';

  buscar() {
    return this.httpClient
      .get<PagePessoa>(this.API_BASE_URL + '/paginar?registros=100&pagina=0')
      .pipe(map((pagePessoa) => pagePessoa.content));
  }

  criar(pessoa: Pessoa) {
    return this.httpClient.post<Pessoa>(this.API_BASE_URL, pessoa);
  }

  salvar(id: number, pessoa: Pessoa) {
    return this.httpClient.put<Pessoa>(`${this.API_BASE_URL}/${id}`, pessoa);
  }

  excluir(id: number) {
    return this.httpClient.delete(`${this.API_BASE_URL}/${id}`);
  }

  buscarPorId(id: number) {
    return this.httpClient.get<Pessoa>(`${this.API_BASE_URL}/${id}`);
  }
}
