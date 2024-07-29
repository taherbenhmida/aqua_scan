import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StatisticService {
  api_tranche_age='http://localhost:8000/api/tranche_age';
  api_Par_service='http://localhost:8000/api/Par_service';
  api_Par_grade='http://localhost:8000/api/Par_grade';
  api_Par_annee='http://localhost:8000/api/Par_annee';
  constructor(private http:HttpClient) { }


  tranche_age(){
    return this.http.get<any>(this.api_tranche_age);
  }
  Par_service(){
    return this.http.get<any>(this.api_Par_service);
  }
  Par_grade(){
    return this.http.get<any>(this.api_Par_grade);
  }
  Par_annee(){
    return this.http.get<any>(this.api_Par_annee);
  }
}
