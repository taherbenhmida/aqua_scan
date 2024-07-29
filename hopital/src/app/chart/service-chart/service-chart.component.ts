import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StatisticService } from 'src/statistic_service/statistic.service';

@Component({
  selector: 'app-service-chart',
  templateUrl: './service-chart.component.html',
  styleUrls: ['./service-chart.component.scss']
})
export class ServiceChartComponent implements OnInit {
  barData!:any;
  barOptions!:any;
  s1!:any;s2!:any;s3!:any;s4!:any;s5!:any;s6!:any;s7!:any;s8!:any;s9!:any
  constructor(private http:HttpClient,
              private statisticservice:StatisticService) { }

  ngOnInit(): void {
    this.statisticservice.Par_service().subscribe(data=>{
      this.s1= data.s1 ;
      this.s2= data.s2 ;      
      this.s3= data.s3 ;
      this.s4= data.s4 ;
      this.s5= data.s5 ;
      this.s6= data.s6 ;
      this.s7= data.s7 ;
      this.s8= data.s8 ;
      this.s9= data.s9 ;
      console.log('service 8 :',data.s8)
      this.barData = {
        labels: ['الأقسام'],
        datasets: [
            { 
                label: 'جراحة القلب و الشرايين',
                backgroundColor: '#2f4860',
                data: [this.s1]
            },
            {
              label: 'المسالك البولية',
              backgroundColor: 'rgb(178, 255, 214)',
              data: [this.s2]
            },
            {
                label: 'جراحة العيون',
                backgroundColor: '#AA78A6',
                data: [this.s3]
            },
            {
              label: 'الأذنين و الأنف و الحنجرة',
              backgroundColor: '#E94F37',
              data: [this.s4]
            },
            {
              label: 'الأمراض الجلدية',
              backgroundColor: '#FFFC31',
              data: [this.s5]
            },
            {
              label: 'التصوير بالأشعة',
              backgroundColor: '#18206F',
              data: [this.s6]
            },
            {
              label: 'الأمراض الجرثومية',
              backgroundColor: '#606D5D',
              data: [this.s7]
            },
            {
              label: 'الجراحة الباطنية',
              backgroundColor: '#55917F',
              data: [this.s8]
            },
            {
              label: 'الأمراض الصدرية',
              backgroundColor: '#912F56',
              data: [this.s9]
            },
            
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

        console.log('service 8 :',this.s8)
    });

  }

}
