import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as PerfilCargoActions from '../perfilCargo.actions'
import * as fromPerfilCargo from '../perfilCargo.selector';
import { PerfilCargo } from '../perfil-cargo.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-perfil-cargo-list',
  templateUrl: './perfil-cargo-list.component.html',
  styleUrls: ['./perfil-cargo-list.component.scss'],

  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    TranslateModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  standalone:true,
  
})
export class PerfilCargoListComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'IdCargo', 'Estado', 'Nivel_Academico', 'Meses_de_experiencia', 'actions'];
  dataSource!: MatTableDataSource<PerfilCargo>;
  perfilesCargo$: Observable<PerfilCargo[]>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private store: Store) {
    this.perfilesCargo$ = this.store.select(fromPerfilCargo.selectAllPerfilesCargo);
  }

  ngOnInit() {
    this.store.dispatch(PerfilCargoActions.loadPerfilesCargo());
    this.perfilesCargo$.subscribe(perfiles => {
      this.dataSource = new MatTableDataSource(perfiles);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onDelete(id: number) {
    this.store.dispatch(PerfilCargoActions.deletePerfilCargo({ id }));
  }
}