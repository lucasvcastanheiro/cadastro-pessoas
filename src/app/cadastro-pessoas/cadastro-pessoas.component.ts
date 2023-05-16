import { Component } from '@angular/core';
import { Pessoa } from '../models/Pessoa';
import { CadastroPessoasService } from '../services/cadastro-pessoas.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro-pessoas',
  templateUrl: './cadastro-pessoas.component.html',
  styleUrls: ['./cadastro-pessoas.component.scss'],
})
export class CadastroPessoasComponent {
  displayedColumns: string[] = [
    'id',
    'nome',
    'cpf',
    'dataNascimento',
    // 'contatos',
  ];
  pessoas: Observable<Pessoa[]>;

  constructor(private cadastroPessoasService: CadastroPessoasService) {
    this.pessoas = cadastroPessoasService.getPessoas();
  }
}
