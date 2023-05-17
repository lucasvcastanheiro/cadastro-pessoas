import { Component } from '@angular/core';
import { Pessoa } from '../models/Pessoa';
import { CadastroPessoasService } from '../services/cadastro-pessoas.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-pessoas',
  templateUrl: './cadastro-pessoas.component.html',
  styleUrls: ['./cadastro-pessoas.component.scss'],
})
export class CadastroPessoasComponent {
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'dataNascimento', 'acoes'];
  pessoas: Observable<Pessoa[]>;

  constructor(
    private cadastroPessoasService: CadastroPessoasService,
    private router: Router
  ) {
    this.pessoas = cadastroPessoasService.buscar();
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
}
