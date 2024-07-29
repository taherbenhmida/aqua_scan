import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StatisticService } from 'src/statistic_service/statistic.service';


interface categorie {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-categorie-grade',
  templateUrl: './categorie-grade.component.html',
  styleUrls: ['./categorie-grade.component.scss']
})

export class CategorieGradeComponent implements OnInit {
    
    chartOptions: any;
    
    officier_data!:any;
    sous_off_data:any;
    troup_data:any;
    doughnut_data:any;

    grade!:any;
    g1!:any;

    selected = 'officier_data';
    categories: categorie[] = [
        {value: 'officier_data', viewValue: 'ضباط'},
        {value: 'sous_off_data', viewValue: 'ضباط صف'},
        {value: 'troup_data', viewValue: 'رجال جيش'},
      ];
    constructor(private http:HttpClient,
                private statisticservice:StatisticService) { }

    ngOnInit(): void {
        this.statisticservice.Par_grade().subscribe(data=>{
            this.grade=data
            this.troup_data = {
                labels: ['جندي أول ',' رقيب',' رقيب أول'],
                datasets: [
                    {
                        data: [data.g1, data.g2, data.g3],
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
                labels: ['عريف ','عريف أول','وكيل','وكيل أول','وكيل أعلى'],
                datasets: [
                    {
                        data: [data.g4, data.g5, data.g6,data.g7,data.g8],
                        backgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#12EAEA",
                            "#B0DB43"
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#12EAEA",
                            "#B0DB43"
                        ]
                    }
                ]
            };
            this.officier_data = {
                labels: ['ملازم','ملازم أول','نقيب','رائد','مقدم','عقيد','عميد','أمير لواء','فريق','فريق أول'],
                datasets: [
                    {
                        data: [data.g9, data.g10, data.g11,data.g12, data.g13, data.g14,data.g15, data.g16, data.g17,data.g18],
                        backgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#12EAEA",
                            "#B0DB43",
                            "#8332AC",
                            "#6D4C3D",
                            "#F5B0CB",
                            "#52AA8A",
                            "#E8985E"
                        ],
                        hoverBackgroundColor: [
                          "#FF6384",
                          "#36A2EB",
                          "#FFCE56",
                          "#12EAEA",
                          "#B0DB43",
                          "#8332AC",
                          "#6D4C3D",
                          "#F5B0CB",
                          "#52AA8A",
                          "#E8985E"
                        ]
                    }
                ]
            };  
            this.doughnut_data=this.officier_data  
      });
  }
 

  onCategorieChange($event){
    if(this.selected=='officier_data'){this.doughnut_data=this.officier_data}
    if(this.selected=='sous_off_data'){this.doughnut_data=this.sous_off_data}
    if(this.selected=='troup_data'){this.doughnut_data=this.troup_data}
  }
}
