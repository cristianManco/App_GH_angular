import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menuItems = [
    { label: 'DASHBOARD', icon: 'dashboard', route: '/dashboard' },
    { label: 'PERFIL_CARGO', icon: 'work', route: '/perfil-cargo' },
    { label: 'PERFIL_CAMPANA', icon: 'campaign', route: '/perfil-campana' }
  ];
}