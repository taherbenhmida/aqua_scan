import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {

  constructor(private authservice:AuthService){}

  canActivate(){
    let Role=localStorage.getItem('usertype');
    if(Role=='admin'){
      return true
    }
    alert('you dont have the right access');
    return false;
  }
  
}
