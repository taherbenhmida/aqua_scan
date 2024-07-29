import { AfterViewInit, Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { registerables } from 'chart.js';

Chart.register(...registerables);
@Component({
  selector: 'app-tanks-overview',
  templateUrl: './tanks-overview.component.html',
  styleUrls: ['./tanks-overview.component.scss']
})
export class TanksOverviewComponent implements OnInit {

  selectedTabIndex: number = 0;
  selectedtank!: string;
  tanks: string[] = ['Tank 1', 'Tank 2', 'Tank 3', 'Tank 4'];
  public chartHours: any;
  public Morbidity_chart: any;
 

  private Growth_performances_Chart: any; // Define chart variable
  private Growth_performances_Ctx: any; // Define chart context variable

  // Define data for the bar chart
  private data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10'],
    datasets: [{
      label: 'Growth performances of the Tank by percentage',
      data: [40, 56, 60, 55, 45, 60, 70, 64, 50, 58],
      backgroundColor: 'rgba(6, 186, 99, 0.6)', // Customize the color as needed
      borderColor: 'rgba(6, 186, 99, 1)',
      borderWidth: 1
    }]
  };

  // Define options for the bar chart
  private options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  public canvas : any;
  public ctx : any;
  public chartColor;
  public chartEmail;
  

  ngOnInit(): void {
    this.selectedtank = this.tanks[0]; // Pre-select the first room
    this.chartColor = "#FFFFFF";
    this.ctx = this.canvas.getContext("2d");
    this.init_Growth_performances_Chart();

  }

  ngAfterViewInit() {
    this.init_MortalityChart();
    this.init_MorbidityChart();
    this.init_Growth_performances_Chart();
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
  Selectedtabindex():void {
    this.selectedTabIndex=0;
  }
  init_Growth_performances_Chart(): void {
    const canvas = document.getElementById('Growth_performances_chart') as HTMLCanvasElement;
    if (!canvas) {
      console.error('Canvas element with id "saturation_chart" not found');
      return;
    }

    this.Growth_performances_Ctx = canvas.getContext('2d');
    if (!this.Growth_performances_Ctx) {
      console.error('Failed to get 2D context from canvas');
      return;
    }

    // Destroy existing chart if it exists
    if (this.Growth_performances_Chart) {
      this.Growth_performances_Chart.destroy();
    }

    // Create new chart instance
    this.Growth_performances_Chart = new Chart(this.Growth_performances_Ctx, {
      type: 'bar',
      data: this.data,
      options: this.options
    });
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



}
