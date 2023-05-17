import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { cpfValidator } from '../formValidatos/cpfValidator';
import { CadastroPessoasService } from './../services/cadastro-pessoas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Contato } from '../models/Contato';
import { Pessoa } from '../models/Pessoa';

@Component({
  selector: 'app-cadastro-pessoas-form',
  templateUrl: './cadastro-pessoas-form.component.html',
  styleUrls: ['./cadastro-pessoas-form.component.scss'],
})
export class CadastroPessoasFormComponent {
  form: FormGroup = this.formBuilder.group({
    nome: new FormControl(null, Validators.required),
    cpf: new FormControl(null, [Validators.required, cpfValidator]),
    dataNascimento: new FormControl(null, Validators.required),
    contatos: new FormArray([this.criarContatoFormGroup()]),
  });

  acao: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cadastroPessoasService: CadastroPessoasService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((result) => {
      if (result['id']) {
        this.carregar(result['id']);
        this.acao = result['id'];
      }
    });
  }

  carregar(id: number) {
    this.cadastroPessoasService.buscarPorId(id).subscribe((result) => {
      this.form = this.criarFormGroup(result);
    });
  }

  criarFormGroup(pessoa: Pessoa) {
    return this.formBuilder.group({
      nome: new FormControl(pessoa.nome, Validators.required),
      cpf: new FormControl(pessoa.cpf, [Validators.required, cpfValidator]),
      dataNascimento: new FormControl(
        pessoa.dataNascimento,
        Validators.required
      ),
      contatos: this.criarContatoFormArray(pessoa.contatos),
    });
  }

  criarContatoFormArray(contatos: Contato[]) {
    return new FormArray(
      contatos.map((contato) => {
        return this.formBuilder.group({
          nome: new FormControl(contato.nome, Validators.required),
          email: new FormControl(contato.email, [
            Validators.required,
            Validators.email,
          ]),
          telefone: new FormControl(contato.telefone, Validators.required),
        });
      })
    );
  }

  criarContatoFormGroup() {
    return this.formBuilder.group({
      nome: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      telefone: new FormControl(null, Validators.required),
    });
  }

  onVoltar() {
    this.router.navigate(['']);
  }

  onSalvar() {
    if (this.acao === 0) {
      this.cadastroPessoasService.criar(this.form.value).subscribe(
        (result) => this.onSucesso(),
        (error) => this.onError(error)
      );
    } else {
      this.cadastroPessoasService.salvar(this.acao, this.form.value).subscribe(
        (result) => this.onSucesso(),
        (error) => this.onError(error)
      );
    }
  }

  onSucesso() {
    this.snackBar.open('Pessoa cadastrada com sucesso!', '', {
      duration: 2000,
    });
    this.onVoltar();
  }

  onError(error: any) {
    this.snackBar.open('Erro ao cadastrar pessoa', '', {
      duration: 2000,
    });
  }

  onAdicionarContato() {
    this.getContatos().push(this.criarContatoFormGroup());
  }

  getContatos() {
    return (this.form.get('contatos') as FormArray).controls;
  }
}
