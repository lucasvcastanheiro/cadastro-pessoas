import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPessoasComponent } from './cadastro-pessoas/cadastro-pessoas.component';
import { CadastroPessoasFormComponent } from './cadastro-pessoas-form/cadastro-pessoas-form.component';

const routes: Routes = [
  { path: '', component: CadastroPessoasComponent },
  { path: 'novo', component: CadastroPessoasFormComponent },
  { path: 'editar/:id', component: CadastroPessoasFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
