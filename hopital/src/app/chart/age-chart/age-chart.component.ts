import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { StatisticService } from 'src/statistic_service/statistic.service';

@Component({
  selector: 'app-age-chart',
  templateUrl: './age-chart.component.html',
  styleUrls: ['./age-chart.component.scss']
})
export class AgeChartComponent implements OnInit {
  data: any;
  chartOptions: any;
  tranche1:any;
  tranche2:any;
  tranche3:any;

  constructor(private http:HttpClient,
              private statisticservice:StatisticService) { }

  ngOnInit(): void {
    this.statisticservice.tranche_age().subscribe(data=>{
      this.tranche1=data.tranche1;
      this.tranche2=data.tranche2;
      this.tranche3=data.tranche3;
      this.data = {
        labels: ['بين 20 و 30','بين 30 و 40','من 40 فما فوق'],
        datasets: [
            {
                data: [this.tranche1, this.tranche2, this.tranche3],
                backgroundColor: [
                    "#547AA5",
                    "#AF2BBF",
                    "#B0DB43"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }
        ]
    };
    });
    
    
  
  }

}
