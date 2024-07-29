import { Component, OnInit } from '@angular/core';
interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-afterlogin-terminal',
  templateUrl: './afterlogin-terminal.component.html',
  styleUrls: ['./afterlogin-terminal.component.scss']
})
export class AfterloginTerminalComponent implements OnInit {

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