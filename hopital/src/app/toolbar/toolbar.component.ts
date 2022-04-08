import { Component,Input,Output, OnInit,EventEmitter,HostListener } from '@angular/core';

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
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
  
}
