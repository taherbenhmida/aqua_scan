import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


interface mydata{
  name: string,
  email:string
}
interface isLoggedIn{
  logged:boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getSomeData(){
    return this.http.get<mydata>('http://localhost:8000/api/user', {withCredentials: true})
  }

  isLoggedIn():Observable<isLoggedIn>{
    return this.http.get<isLoggedIn>('http://localhost:8000/api/user', {withCredentials: true})
  }
}
