import { Component, OnInit } from '@angular/core';
interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-afterlogin',
  templateUrl: './afterlogin.component.html',
  styleUrls: ['./afterlogin.component.scss']
})
export class AfterloginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isSideNavCollapsed=false;
  screenWidth=0;
  onToggleSideNav(data: SideNavToggle):void{
    this.screenWidth=data.screenWidth;
    this.isSideNavCollapsed=data.collapsed;
  }
}
