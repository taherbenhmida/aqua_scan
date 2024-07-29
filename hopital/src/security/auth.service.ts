import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { DatePipe } from '@angular/common';
import {formatDate} from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService  {
  public id!:any;
  public role!:any;
  public log_date!:any;

  constructor(private http:HttpClient,
              private router: Router,
              private dataService:DataService,
              ){}

  public authenticated:any
  

  login(dataform:any){
    this.http.post('http://localhost:8000/api/login', dataform, {withCredentials: true})
    .subscribe((res:any) => {
      localStorage.setItem('token',res.jwt)
      this.get_loggeduser();
    });
  }

  logout(): void {
    this.get_unloggeduser()
    this.http.post('http://localhost:8000/api/logout', {}, {withCredentials: true})
      .subscribe(() => {
        localStorage.clear();
      });
    this.router.navigate(['/login']);
  } 

  get_loggeduser(){
    this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
      (data: any) => {
        this.id=data.id;
        this.role=data.role;
        if(this.role=='user'){this.router.navigate(['/afterloginuser/home']);}
        if(this.role=='admin'){this.router.navigate(['/afterlogin/home']);}
        if(this.role=='terminal'){this.router.navigate(['/afterloginterminal/terminal']);}
        console.log('the logged user',this.id)
        localStorage.setItem('id',this.id)
        localStorage.setItem('usertype',this.role)
        this.dataService.editlog(this.id,{"logged":"true"}).subscribe(data=>{
          alert(this.id)
          this.log_date=formatDate(new Date(), 'yyyy-MM-dd', 'en');
          this.dataService.edit_lastlog(this.id,{"last_login":this.log_date}).subscribe(data=>{
          alert('last_log was updated successfuly !')
        })
        })
      },
    );
    this.IsloggedIn()
  }
  get_unloggeduser(){
    this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
      (data: any) => {
        this.id=data.id;
        console.log('the logged user',this.id)
        this.dataService.editlog(this.id,{"logged":"false"}).subscribe(data=>{
          alert('try to set logged to false  !')
        })
      },
    );
  }
  IsloggedIn():boolean{
    if(!!localStorage.getItem('token')){
      return true
    }
    else { return false}
  }
  final():boolean{
    if(this.authenticated==true){
      return true
    }
    return false
  }
  set_true_log(){
    this.authenticated=true
    console.log('authentication' ,this.authenticated)
  }
  set_false_log(){
    this.authenticated=false
    console.log('authentication' ,this.authenticated)
  }
  getToken(){
    return localStorage.getItem('token')
  }
   
}