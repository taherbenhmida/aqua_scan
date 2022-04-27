import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate ,OnInit{
  constructor(private auth:AuthService,private router:Router){}
  ngOnInit(): void {
    this.auth.IsloggedIn()
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
         boolean | import("@angular/router").UrlTree | 
          import("rxjs").Observable<boolean | import("@angular/router").UrlTree>| Promise<boolean | import("@angular/router").UrlTree> {


            var isAuthenticated = this.auth.IsloggedIn();
            if (!isAuthenticated) {
                alert('not authenticated')
                this.router.navigate(['/login']);
            }
            return isAuthenticated;
       }
  
}
