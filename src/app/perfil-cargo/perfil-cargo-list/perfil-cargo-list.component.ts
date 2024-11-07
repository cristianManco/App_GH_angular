import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CargoService } from '../perfil-cargo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cargo',
  standalone:true,
  imports: [CommonModule, ReactiveFormsModule, ],  
  templateUrl: './perfil-cargo-list.component.html',
  styleUrls: ['./perfil-cargo-list.component.css']
})
export class PerfilCargoListComponent implements OnInit {
  cargos: any[] = [];
  selectedCargo: any = null;
  cargoForm: FormGroup;
  isDialogOpen = false;

  constructor(private cargoService: CargoService, private fb: FormBuilder) {
    this.cargoForm = this.fb.group({
      ID: [''],
      IdCargo: [''],
      IdNivel: [''],
      IdCargo_Reporta: [''],
      Estado: [''],
      Objetivo_del_Cargo: [''],
      Nivel_Academico_Min: [''],
      Nivel_Academico: [''],
      Area_de_Conocimiento: [''],
      Meses_de_experiencia: [''],
      Competencias_tecnicas: [''],
      Funciones_del_cargo: [''],
      Indicadores: [''],
      Aprobacion: ['']
    });
  }

  ngOnInit(): void {
    this.loadCargos();
  }

  loadCargos() {
    this.cargoService.getCargos().subscribe(
      (data: any[]) => {
        this.cargos = data;
      },
      (error: any) => {
        console.error('Error al cargar los cargos', error);
      }
    );
  }

  openDialog(cargo: any = null) {
    this.selectedCargo = cargo;
    this.cargoForm.reset();
    if (cargo) {
      this.cargoForm.patchValue(cargo);
    }
    this.isDialogOpen = true;
  }

  closeDialog() {
    this.isDialogOpen = false;
  }

  saveCargo() {
    if (this.selectedCargo) {
      // Actualizar cargo
      this.cargoService.updateCargo(this.selectedCargo.ID, this.cargoForm.value).subscribe(
        () => {
          this.loadCargos();
          this.closeDialog();
        },
        (error: any) => {
          console.error('Error al actualizar el cargo', error);
        }
      );
    } else {
      // Crear nuevo cargo
      this.cargoService.createCargo(this.cargoForm.value).subscribe(
        () => {
          this.loadCargos();
          this.closeDialog();
        },
        (error: any) => {
          console.error('Error al crear el cargo', error);
        }
      );
    }
  }

  deleteCargo(id: number) {
    this.cargoService.deleteCargo(id).subscribe(
      () => {
        this.loadCargos();
      },
      (error: any) => {
        console.error('Error al eliminar el cargo', error);
      }
    );
  }
}
