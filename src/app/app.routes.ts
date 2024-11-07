import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilCargoListComponent } from './perfil-cargo/perfil-cargo-list/perfil-cargo-list.component';
import { PerfilCampanaListComponent } from './perfil-campaña/perfil-campaña-list/perfil-campana-list.component';
import { LoginComponent } from './auth/login/login.component';


export const routes: Route[] = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'perfil-campana', component: PerfilCampanaListComponent },
  { path: 'perfil-cargo', component: PerfilCargoListComponent },
  { path: 'requisiciones', component: LoginComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' }
];
