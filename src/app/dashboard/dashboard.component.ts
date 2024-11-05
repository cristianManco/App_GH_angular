import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{ 'DASHBOARD.TITLE' | translate }}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>{{ 'DASHBOARD.WELCOME_MESSAGE' | translate }}</p>
        <!-- Add more dashboard content here -->
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    mat-card {
      max-width: 800px;
      margin: 20px auto;
    }
  `]
})
export class DashboardComponent { }