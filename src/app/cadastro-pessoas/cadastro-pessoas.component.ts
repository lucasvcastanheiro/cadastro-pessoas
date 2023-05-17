import { Component } from '@angular/core';
import { PagePessoa, Pessoa } from '../models/Pessoa';
import { CadastroPessoasService } from '../services/cadastro-pessoas.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { tap, forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-cadastro-pessoas',
  templateUrl: './cadastro-pessoas.component.html',
  styleUrls: ['./cadastro-pessoas.component.scss'],
})
export class CadastroPessoasComponent {
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'dataNascimento', 'acoes'];
  pessoasPage: Observable<PagePessoa>;
  pessoas: Observable<Pessoa[]>;
  registros = 10;
  pagina = 0;
  totalRegistros = 0;

  constructor(
    private cadastroPessoasService: CadastroPessoasService,
    private router: Router
  ) {
    this.pessoasPage = cadastroPessoasService.buscar(
      this.registros,
      this.pagina
    );
    this.pessoas = this.pessoasPage.pipe(
      map((pessoasPage) => {
        this.totalRegistros = pessoasPage.totalElements;
        return pessoasPage.content;
      })
    );
  }

  onCriar() {
    this.router.navigate(['novo']);
  }

  onExcluir(id: number) {
    this.cadastroPessoasService.excluir(id).subscribe(console.log);
  }

  onEditar(id: number) {
    this.router.navigate(['editar', id]);
  }

  handlePageEvent(e: PageEvent) {
    this.registros = e.pageSize;
    this.pagina = e.pageIndex;

    console.log(this.registros);
    console.log(this.pagina);

    this.pessoasPage = this.cadastroPessoasService.buscar(
      this.registros,
      this.pagina
    );
    this.pessoas = this.pessoasPage.pipe(
      map((pessoasPage) => {
        return pessoasPage.content;
      })
    );
  }
}
