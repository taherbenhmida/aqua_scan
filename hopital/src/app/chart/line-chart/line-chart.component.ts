import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StatisticService } from 'src/statistic_service/statistic.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  lineData!:any;
  lineOptions!:any;
  constructor(private http:HttpClient,
            private statisticservice:StatisticService) { }

  ngOnInit(): void {
    this.statisticservice.Par_annee().subscribe(data=>{
        this.lineData = {
            labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
            datasets: [
                {
                    label: 'حسب سنة المغادرة',
                    data: [data.as1, data.as2, data.as3, data.as4, data.as5, data.as6 , data.as7, data.as8, data.as9, data.as10],
                    fill: false,
                    backgroundColor: '#E54F6D',
                    borderColor: '#E54F6D',
                    tension: .4,
                },
                {
                    label: 'حسب سنة الإنتداب',
                    data: [data.ae1, data.ae2, data.ae3, data.ae4, data.ae5, data.ae6 , data.ae7, data.ae8, data.ae9, data.ae10],
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
    });
 
  }

}
