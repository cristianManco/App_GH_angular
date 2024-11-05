import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilCargoService } from '../perfil-cargo.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PerfilCargo } from '../perfil-cargo.model';

@Component({
  selector: 'app-perfil-cargo-form',
  templateUrl: './perfil-cargo-form.component.html',
  styleUrls: ['./perfil-cargo-form.component.scss']
})
export class PerfilCargoFormComponent implements OnInit {
  perfilCargoForm!: FormGroup;
  isEditMode = false;
  perfilCargoId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private perfilCargoService: PerfilCargoService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.createForm();
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.perfilCargoId = +params['id'];
        this.loadPerfilCargo();
      }
    });
  }

  createForm() {
    this.perfilCargoForm = this.fb.group({
      IdCargo: ['', Validators.required],
      IdNivel: ['', Validators.required],
      IdCargo_Reporta: ['', Validators.required],
      Estado: ['', Validators.required],
      Objetivo_del_Cargo: ['', Validators.required],
      Nivel_Academico_Min: ['', Validators.required],
      Nivel_Academico: ['', Validators.required],
      Area_de_Conocimiento: ['', Validators.required],
      Meses_de_experiencia: ['', [Validators.required, Validators.min(0)]],
      Competencias_tecnicas: ['', Validators.required],
      Funciones_del_cargo: ['', Validators.required],
      Indicadores: ['', Validators.required],
      Aprobacion: ['', Validators.required]
    });
  }

  loadPerfilCargo() {
    this.perfilCargoService.getById(this.perfilCargoId).subscribe(
      (perfilCargo: PerfilCargo) => {
        this.perfilCargoForm.patchValue(perfilCargo);
      },
      error => console.error('Error loading Perfil Cargo:', error)
    );
  }

  onSubmit() {
    if (this.perfilCargoForm.valid) {
      const perfilCargo: PerfilCargo = this.perfilCargoForm.value;
      if (this.isEditMode) {
        this.perfilCargoService.update(this.perfilCargoId, perfilCargo).subscribe(
          () => {
            this.snackBar.open('Perfil de Cargo actualizado con éxito', 'Cerrar', { duration: 3000 });
            this.router.navigate(['/perfil-cargo']);
          },
          error => {
            console.error('Error updating Perfil Cargo:', error);
            this.snackBar.open('Error al actualizar el Perfil de Cargo', 'Cerrar', { duration: 3000 });
          }
        );
      } else {
        this.perfilCargoService.create(perfilCargo).subscribe(
          () => {
            this.snackBar.open('Perfil de Cargo creado con éxito', 'Cerrar', { duration: 3000 });
            this.router.navigate(['/perfil-cargo']);
          },
          error => {
            console.error('Error creating Perfil Cargo:', error);
            this.snackBar.open('Error al crear el Perfil de Cargo', 'Cerrar', { duration: 3000 });
          }
        );
      }
    }
  }
}