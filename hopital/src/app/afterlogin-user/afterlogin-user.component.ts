import { Component, OnInit } from '@angular/core';
interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-afterlogin',
  templateUrl: './afterlogin-user.component.html',
  styleUrls: ['./afterlogin-user.component.scss']
})
export class AfterloginUserComponent implements OnInit {

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
