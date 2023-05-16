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

  private readonly API_BASE_URL =
    'http://localhost:8080/pessoa/paginar?registros=100&pagina=0';

  getPessoas() {
    return this.httpClient
      .get<PagePessoa>(this.API_BASE_URL)
      .pipe(map((pagePessoa) => pagePessoa.content));
  }
}
