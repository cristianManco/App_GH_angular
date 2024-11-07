import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PerfilCargoListComponent } from '../perfil-cargo/perfil-cargo-list/perfil-cargo-list.component';
import { PerfilCampanaListComponent } from '../perfil-campaña/perfil-campaña-list/perfil-campana-list.component';

@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports: [CommonModule, ReactiveFormsModule, PerfilCargoListComponent, PerfilCampanaListComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentSection: string = 'perfilCampana';

  ngOnInit() {}

  showSection(section: string) {
    this.currentSection = section;
  }
}
