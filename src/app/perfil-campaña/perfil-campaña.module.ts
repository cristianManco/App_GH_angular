import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PerfilCampanaListComponent } from './perfil-campaña-list/perfil-campana-list.component';
import { PerfilCampanaFormComponent } from './perfil-campaña-form/perfil-campana-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: PerfilCampanaListComponent },
      { path: 'new', component: PerfilCampanaFormComponent },
      { path: 'edit/:id', component: PerfilCampanaFormComponent }
    ]),
    SharedModule
  ]
})
export class PerfilCampanaModule { }