import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  barChart: any;

  ngOnInit() {
    this.initializeChart();
  }

  initializeChart() {
    this.barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['Label1', 'Label2', 'Label3', 'Label4', 'Label5'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [10, 20, 30, 40, 50],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          },
          {
            label: 'Dataset 2',
            data: [15, 25, 35, 45, 55],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
