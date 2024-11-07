import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PerfilCampanaService } from '../perfil-campaña.service';

@Component({
  selector: 'app-perfil-campana',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './perfil-campana-list.component.html',
  styleUrls: ['./perfil-campana-list.component.css']
})
export class PerfilCampanaListComponent implements OnInit {
  perfilCampanas: any[] = [];
  selectedCampana: any = null;
  campanaForm: FormGroup;
  isDialogOpen = false;

  constructor(private campanaService: PerfilCampanaService, private fb: FormBuilder) {
    this.campanaForm = this.fb.group({
      ID: [''],
      IDCentroCosto: [''],
      IDPerfilCargo: [''],
      IDPerfilEquipo: [''],
      Salario: [''],
      Bonificacion: [''],
      Control_Aprobacion: [''],
      Estado: [''],
      Dias_de_capacitacion: [''],
      Otro_Aplicativo: [''],
      Riesgo: [''],
      Requiere_Formacion: [''],
      Creado: [''],
      CreadoPor: [''],
      Modificado: [''],
      ModificadoPor: ['']
    });
  }

  ngOnInit(): void {
    this.loadPerfilCampanas();
  }

  loadPerfilCampanas() {
    this.campanaService.getPerfilCampanas().subscribe(
      (data: any[]) => {
        this.perfilCampanas = data;
      },
      (error: any) => {
        console.error('Error al cargar las campañas', error);
      }
    );
  }

  openDialog(campana: any = null) {
    this.selectedCampana = campana;
    this.campanaForm.reset();
    if (campana) {
      this.campanaForm.patchValue(campana);
    }
    this.isDialogOpen = true;
  }

  closeDialog() {
    this.isDialogOpen = false;
  }

  saveCampana() {
    if (this.selectedCampana) {
      // Actualizar nuevo perfil campaña
      this.campanaService.updatePerfilCampana(this.selectedCampana.ID, this.campanaForm.value).subscribe(
        () => {
          this.loadPerfilCampanas();
          this.closeDialog();
        },
        (error: any) => {
          console.error('Error al actualizar la campaña', error);
        }
      );
    } else {
      // Crear nuevo perfil campaña
      this.campanaService.createPerfilCampana(this.campanaForm.value).subscribe(
        () => {
          this.loadPerfilCampanas();
          this.closeDialog();
        },
        (error: any) => {
          console.error('Error al crear la campaña', error);
        }
      );
    }
  }

  deleteCampana(id: number) {
    this.campanaService.deletePerfilCampana(id).subscribe(
      () => {
        this.loadPerfilCampanas();
      },
      (error: any) => {
        console.error('Error al eliminar la campaña', error);
      }
    );
  }
}
