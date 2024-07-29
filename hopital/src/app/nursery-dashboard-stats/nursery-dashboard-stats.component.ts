import { Component, OnInit, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { registerables } from 'chart.js';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ChartOptions, ChartType } from 'chart.js';
import { ChartAxisXOptions } from 'canvasjs';
import { ChartAxisX } from 'canvasjs';
import { ChartArea } from 'chart.js';
import { AjoutTanksComponent } from '../ajout-tanks/ajout-tanks.component';
import { AjoutRoomsComponent } from '../ajout-rooms/ajout-rooms.component';
import { NurseryService } from '../nursery.service';

import { FishManagmentComponent } from '../fish-managment/fish-managment.component';
Chart.register(...registerables);


@Component({
  selector: 'app-nursery-dashboard-stats',
  templateUrl: './nursery-dashboard-stats.component.html',
  styleUrls: ['./nursery-dashboard-stats.component.scss']
})
export class NurseryDashboardStatsComponent implements OnInit, AfterViewInit {
  numRooms: number | undefined;
  numTanks: number | undefined;
  numFish: number | undefined;
  seabassCount!: number;
  seabreamCount!: number;
  seabass_percentage!: number;
  seabream_percentage!: number;

  constructor(public dialog: MatDialog, private nurseryService: NurseryService) {}
  openDialog_Room() {
    const dialogRef = this.dialog.open(AjoutRoomsComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.refresh) {
        this.loadNurseryStatistics(); // Refresh statistics if the dialog indicated data should be refreshed
        this.loadTanksFish();
      }
    });
  }
  openDialog_Tank() {
    const dialogRef = this.dialog.open(AjoutTanksComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.refresh) {
        this.loadNurseryStatistics(); // Refresh statistics if the dialog indicated data should be refreshed
        this.loadTanksFish();
      }
    });
  }
  openDialog_Fish() {
    const dialogRef = this.dialog.open(FishManagmentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  public canvas : any;
  public ctx : any;
  public chartColor;
  public chartEmail;
  public chartHours;
  public Morbidity_chart;

    ngOnInit(){
      this.loadNurseryStatistics();
      this.loadTanksFish();
      this.chartColor = "#FFFFFF";
      this.ctx = this.canvas.getContext("2d");
      
    }

    ngAfterViewInit() {
      // Initialize the chart only after the view has been initialized
      this.loadTanksFish();
      this.init_MortalityChart();
      this.init_speedChart();
      this.init_emailChart();
    }
    
    loadNurseryStatistics() {
      this.nurseryService.getNurseryStatistics().subscribe(
        data => {
          console.log('Nursery Statistics:', data);  // Log the response to check its structure
          this.numRooms = data.num_rooms;
          this.numTanks = data.num_tanks;
          this.numFish = data.num_fish;
        },
        error => {
          console.error('Error fetching nursery statistics:', error);
        }
      );
    }

    loadTanksFish() {
      this.nurseryService.getTanksFish().subscribe(data => {
        console.log('Fetched Data:', data);
        this.seabassCount = data.seabass_count;
        this.seabreamCount = data.seabream_count;
        this.seabass_percentage = data.seabass_percentage;
        this.seabream_percentage = data.seabream_percentage;
    
        // Wait for the next event cycle to ensure data is set
        setTimeout(() => {
          this.init_emailChart(); // Initialize chart after data is set
        }, 0);
      });
    }
    
    

    onTabChange(event: any) {
      if (event.index === 0) { // Ensure the Mortality chart is re-initialized when the first tab is active
        setTimeout(() => {
          this.init_MortalityChart();
        }, 0);
      } else if (event.index === 1) { // Ensure the Morbidity chart is re-initialized when the second tab is active
        setTimeout(() => {
          this.init_MorbidityChart();
        }, 0);
      }
    }

    init_MortalityChart() {
      this.canvas = document.getElementById("chartHours");
      if (this.canvas) {
        this.ctx = this.canvas.getContext("2d");
        
        // Destroy the chart if it already exists to prevent duplicate initialization
        if (this.chartHours) {
          this.chartHours.destroy();
        }
    
        this.chartHours = new Chart(this.ctx, {
          type: 'line',
          data: {
            labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13", "Day 14", "Day 15"],
            datasets: [
              {
                label: "Mortality number",
                borderColor: "#f17e5d",
                backgroundColor: 'rgba(240, 67, 116, 0.4)',
                tension: 0.4,
                fill: true,
                borderWidth: 3,
                pointRadius: 8,
                pointHoverRadius: 4,
                pointBorderWidth: 0,
                data: [380, 350, 365, 360, 370, 385, 390, 384, 408, 390, 340, 350, 400, 390, 380],
              },
            ]
          },
          options: {
            plugins: {
              legend: {
                display: true
              },
              tooltip: {
                enabled: true
              }
            },
            scales: {
              y: {
                beginAtZero: false,
                grid: {
                  drawOnChartArea: true, // Ensure grid lines are drawn in the chart area
                  drawBorder: true, // Ensure border line is drawn
                  color: 'rgba(0,0,0,0.1)', // Color of the grid lines
                  borderDash: [], // Solid lines
                  lineWidth: 1 // Width of the grid lines
                },
                ticks: {
                  color: "#9f9f9f"
                }
              },
              x: {
                grid: {
                  drawOnChartArea: true, // Ensure grid lines are drawn in the chart area
                  drawBorder: true, // Ensure border line is drawn
                  color: 'rgba(0,0,0,0.1)', // Color of the grid lines
                  borderDash: [], // Solid lines
                  lineWidth: 1 // Width of the grid lines
                },
                ticks: {
                  padding: 20,
                  color: "#9f9f9f"
                }
              }
            },
          }
        });
      }
    }
    
    init_MorbidityChart() {
      this.canvas = document.getElementById("Morbidity_chart");
      if (this.canvas) {
        this.ctx = this.canvas.getContext("2d");
        
        // Destroy the chart if it already exists to prevent duplicate initialization
        if (this.Morbidity_chart) {
          this.Morbidity_chart.destroy();
        }
  
        this.Morbidity_chart = new Chart(this.ctx, {
          type: 'line',
          data: {
            labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13", "Day 14", "Day 15"],
            datasets: [
              {
                label: "Morbidity number",
                borderColor: "#f17e5d",
                backgroundColor: 'rgba(238, 97, 35, 0.4)',
                tension: 0.4,
                fill: true,
                borderWidth: 3,
                pointRadius: 8,
                pointHoverRadius: 4,
                pointBorderWidth: 0,
                data: [ 50, 70, 40, 50, 90, 90, 80, 80, 50, 65, 60, 70, 85, 90, 84],
              },
            ]
          },
          options: {
            plugins: {
              legend: {
                display: true
              },
              tooltip: {
                enabled: true
              }
            },
            scales: {
              y: {
                beginAtZero: false,
                grid: {
                  drawOnChartArea: true, // Ensure grid lines are drawn in the chart area
                  drawBorder: true, // Ensure border line is drawn
                  color: 'rgba(0,0,0,0.1)', // Color of the grid lines
                  borderDash: [], // Solid lines
                  lineWidth: 1 // Width of the grid lines
                },
                ticks: {
                  color: "#9f9f9f"
                }
              },
              x: {
                grid: {
                  drawOnChartArea: true, // Ensure grid lines are drawn in the chart area
                  drawBorder: true, // Ensure border line is drawn
                  color: 'rgba(0,0,0,0.1)', // Color of the grid lines
                  borderDash: [], // Solid lines
                  lineWidth: 1 // Width of the grid lines
                },
                ticks: {
                  padding: 20,
                  color: "#9f9f9f"
                }
              }
            },
          }
        });
      }
    }

    init_speedChart() {
      var speedCanvas = document.getElementById("speedChart") as HTMLCanvasElement;
    
      var dataFirst = {
        label: 'Food type 1',
        data: [6, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
        fill: false,
        borderColor: '#fbc658',
        backgroundColor: 'transparent',
        pointBorderColor: '#fbc658',
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      };
    
      var dataSecond = {
        label: 'Food type 2',
        data: [7, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
        fill: false,
        borderColor: '#51CACF',
        backgroundColor: 'transparent',
        pointBorderColor: '#51CACF',
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8
      };
    
      var speedData = {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12"],
        datasets: [dataFirst, dataSecond]
      };
    
      var chartOptions: ChartOptions<'line'> = {
        plugins: {
          legend: {
            display: true,
            position: 'top' // Ensure this value is correct and matches Chart.js allowed values
          },
          tooltip: {
            enabled: true
          }
        },
        scales: {
          y: {
            grid: {
              color: 'rgba(0,0,0,0.1)'
            },
            ticks: {
              color: '#9f9f9f'
            }
          },
          x: {
            grid: {
              color: 'rgba(0,0,0,0.1)'
            },
            ticks: {
              color: '#9f9f9f'
            }
          }
        }
      };
    
      var lineChart = new Chart(speedCanvas, {
        type: 'line',
        data: speedData,
        options: chartOptions
      });
    }

    init_emailChart() {
      console.log('Initializing chart with data:', [this.seabass_percentage, this.seabream_percentage]);
    
      this.canvas = document.getElementById("chartEmail") as HTMLCanvasElement;
      if (!this.canvas) {
        console.error('Canvas element not found');
        return;
      }
    
      this.ctx = this.canvas.getContext("2d");
      if (!this.ctx) {
        console.error('Context not found');
        return;
      }
    
      if (this.chartEmail) {
        this.chartEmail.destroy(); // Destroy existing chart if it exists
      }
    
      // Initialize the chart with updated values
      this.chartEmail = new Chart(this.ctx, {
        type: 'pie',
        data: {
          labels: ['Seabass', 'Seabream'],
          datasets: [{
            label: "Fish Species",
            backgroundColor: ['#4acccd', '#fcc468'],
            hoverBackgroundColor: ['#3ca9b6', '#e3a93c'],
            borderWidth: 0,
            data: [this.seabass_percentage, this.seabream_percentage] // Use pre-calculated percentages
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'top'
            },
            tooltip: {
              enabled: true // Enable tooltips for debugging
            },
            datalabels: {
              color: '#746258',
              formatter: (value: number) => {
                return value + '%'; // Directly format percentage value
              },
              font: {
                weight: 'bold',
                size: 25
              },
              padding: 5
            }
          }
        },
        plugins: [ChartDataLabels]
      });
    }
    
}

