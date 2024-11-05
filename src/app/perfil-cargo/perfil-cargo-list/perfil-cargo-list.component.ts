import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PerfilCargo } from '../perfil-cargo.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PerfilCargoService } from '../perfil-cargo.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-perfil-cargo-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './perfil-cargo-list.component.html',
  styleUrls: ['./perfil-cargo-list.component.scss']
})
export class PerfilCargoListComponent implements OnInit {
  perfilesCargo$: Observable<PerfilCargo[]>;
  filteredPerfilesCargo: PerfilCargo[] = [];
  displayedColumns: string[] = ['ID', 'IdCargo', 'Estado', 'Nivel_Academico', 'Meses_de_experiencia', 'actions'];
  currentPage = 1;
  pageSize = 10;
  totalPages = 0;

  constructor(private perfilCargoService: PerfilCargoService) {
    this.perfilesCargo$ = this.perfilCargoService.getAll();
  }

  ngOnInit() {
    this.perfilesCargo$.subscribe(perfiles => {
      this.filteredPerfilesCargo = perfiles;
      this.totalPages = Math.ceil(this.filteredPerfilesCargo.length / this.pageSize);
      this.updatePaginator();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.perfilesCargo$ = this.perfilCargoService.getAll().pipe(
      map(perfiles => perfiles.filter(item => 
        item.IdCargo.toString().toLowerCase().includes(filterValue) || 
        item.Estado.toLowerCase().includes(filterValue) || 
        item.Nivel_Academico.toLowerCase().includes(filterValue) || 
        item.Meses_de_experiencia.toString().toLowerCase().includes(filterValue)
      ))
    );
    this.perfilesCargo$.subscribe(perfiles => {
      this.filteredPerfilesCargo = perfiles;
      this.totalPages = Math.ceil(this.filteredPerfilesCargo.length / this.pageSize);
      this.updatePaginator();
    });
  }

  sortData(sortField: string) {
    this.filteredPerfilesCargo.sort((a, b) => {
      const fieldA = a[sortField as keyof PerfilCargo];
      const fieldB = b[sortField as keyof PerfilCargo];
      if (fieldA < fieldB) {
        return -1;
      } else if (fieldA > fieldB) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  onEdit(id: number) {
    // Lógica para editar
  }

  onDelete(id: number) {
    this.perfilCargoService.delete(id).subscribe(() => {
      this.ngOnInit();
    });
  }

  updatePaginator() {
    this.filteredPerfilesCargo = this.filteredPerfilesCargo.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginator();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginator();
    }
  }
}
