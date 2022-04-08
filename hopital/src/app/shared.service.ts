import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly header = new HttpHeaders({ 'Content-Type': 'application/json' })
  readonly APIUrl = "http://127.0.0.1:8000";
  constructor(private http:HttpClient) { }
  // private messageSource = new BehaviorSubject<any> ({"nom":null,
  // "prenom":null});
  // currentMessage = this.messageSource.asObservable(); 
  message={"nom":null,
           "prenom":null};


  getPersonnel():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/personnel/');
  }
  addPersonne(personnel:any) : Observable<any> {
    return this.http.post(this.APIUrl + '/personnel/',JSON.stringify(personnel),{
      headers : this.header
    });
  }
  // changeMessage(message : any) {
  //   this.messageSource.next(message)
  // }

}
