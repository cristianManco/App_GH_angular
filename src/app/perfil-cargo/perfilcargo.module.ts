import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PerfilCargoListComponent } from './perfil-cargo-list/perfil-cargo-list.component';
import { PerfilCargoFormComponent } from './perfil-cargo-form/perfil-cargo-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: PerfilCargoListComponent },
      { path: 'new', component: PerfilCargoFormComponent },
      { path: 'edit/:id', component: PerfilCargoFormComponent }
    ]),
    SharedModule
  ]
})
export class PerfilCargoModule { }