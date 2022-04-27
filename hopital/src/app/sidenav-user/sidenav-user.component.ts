import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Output ,EventEmitter, Host, HostListener} from '@angular/core';
import {faPeopleGroup} from '@fortawesome/free-solid-svg-icons'

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
  
}
@Component({
  selector: 'sidenav-user',
  templateUrl: './sidenav-user.component.html',
  styleUrls: ['./sidenav-user.component.scss'],
  
})
export class SidenavUserComponent implements OnInit {
  iconpersongroup=faPeopleGroup;
  @Output() onToggleSideNav:EventEmitter<SideNavToggle>=new EventEmitter();
  collapsed=false;
  screenWidth=0;

  
  showsubemployee!:boolean;
  showsubusually!:boolean;
  showsubarchive!:boolean;
  showsubsettings!:boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768){
      this.collapsed=false;
      this.onToggleSideNav.emit({collapsed:this.collapsed , screenWidth:this.screenWidth});
    }
  }
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    
  }
  toggleCollapse():void{
    this.collapsed= !this.collapsed;
    this.onToggleSideNav.emit({collapsed:this.collapsed , screenWidth:this.screenWidth});
  }

  closeSidenav():void{
    this.collapsed=false;
    this.onToggleSideNav.emit({collapsed:this.collapsed , screenWidth:this.screenWidth});
  }

  showemployee(){
    this.showsubemployee=!this.showsubemployee;
  }
  showusualywork(){
    this.showsubusually=!this.showsubusually;
  }
  showarchive(){
    this.showsubarchive=!this.showsubarchive;
  }
  showsettings(){
    this.showsubsettings=!this.showsubsettings;
  }
}
