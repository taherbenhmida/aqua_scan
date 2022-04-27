import { Component,Input,Output, OnInit,EventEmitter,HostListener } from '@angular/core';
import {Emitters} from '../emitters/emitters';
import {HttpClient} from '@angular/common/http';
import { LoaderService } from '../loader/loader.service';
import { AuthService } from 'src/security/auth.service';

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'toolbarUser',
  templateUrl: './toolbar-user.component.html',
  styleUrls: ['./toolbar-user.component.scss']
})
export class ToolbarUserComponent implements OnInit{
  @Output() onToggleSideNav:EventEmitter<SideNavToggle>=new EventEmitter();
  collapsed=false;
  screenWidth=0;
  
  getBodyClass(): String {
    let styleClass='';
    if (this.collapsed && this.screenWidth > 768){
      styleClass='body-trimmed';
    }else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth>0){
      styleClass='body-md-screen'
    }
    return styleClass;
  }
  authenticated = false;

  constructor(private http: HttpClient,
              public loaderservice: LoaderService,
              private authservice: AuthService) {}

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );
  }

  logout(): void {
    this.authservice.logout();
  }
  
}
