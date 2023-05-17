import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroPessoasFormComponent } from './cadastro-pessoas-form/cadastro-pessoas-form.component';
import { CadastroPessoasComponent } from './cadastro-pessoas/cadastro-pessoas.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroPessoasComponent,
    CadastroPessoasFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatListModule,
    MatSnackBarModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
