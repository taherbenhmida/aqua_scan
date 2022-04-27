import { Component, OnInit } from '@angular/core';


interface categorie {
    value: string;
    viewValue: string;
  }
@Component({
  selector: 'charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})

export class charts {

    data: any;
    lineData:any;
    lineOptions:any;
    chartOptions: any;
    barData:any;
    barOptions:any;
    officier_data!:any;
    sous_off_data:any;
    troup_data:any;
    doughnut_data:any;

    chartType:any;
    chartDatasets:any;
    chartLabels:any;
    chartColors:any;

    selected = 'officier_data';
    categories: categorie[] = [
        {value: 'officier_data', viewValue: 'ضباط'},
        {value: 'sous_off_data', viewValue: 'ضباط صف'},
        {value: 'troup_data', viewValue: 'رجال جيش'},
      ];
    constructor() {}
    ngOnInit() {
        
        this.data = {
            labels: ['بين 20 و 30','بين 30 و 40','من 40 فما فوق'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }
            ]
        };
        
        
        this.officier_data = {
            labels: ['ضباط أعوان','ضباط سامون','ضباط قادة'],
            datasets: [
                {
                    data: [300, 300, 7],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }
            ]
        };
        this.sous_off_data = {
            labels: ['sous_officier ','بين 30 و 40','من 40 فما فوق'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }
            ]
        };
        this.troup_data = {
            labels: [' troup ','بين 30 و 40','من 40 فما فوق'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }
            ]
        };
        this.lineData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor: '#2f4860',
                    borderColor: '#2f4860',
                    tension: .4,
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    backgroundColor: '#00bb7e',
                    borderColor: '#00bb7e',
                    tension: .4
                }
            ]
        };
        this.lineOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color:  '#ebedef',
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color:  '#ebedef',
                    }
                },
            }
        };
        this.barData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#2f4860',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#00bb7e',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
        this.barOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color:  '#ebedef',
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color:  '#ebedef',
                    }
                },
            }
        };
        

        
        this.doughnut_data=this.officier_data
    }
    onCategorieChange($event){
        if(this.selected=='officier_data'){this.doughnut_data=this.officier_data}
        if(this.selected=='sous_off_data'){this.doughnut_data=this.sous_off_data}
        if(this.selected=='troup_data'){this.doughnut_data=this.troup_data}
    } 
}
