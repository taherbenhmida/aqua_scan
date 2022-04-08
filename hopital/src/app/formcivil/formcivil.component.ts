import {
  NgModule, Component, ViewChild, enableProdMode, AfterViewInit,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxFormComponent } from 'devextreme-angular';

import { Employee, Service } from './form2.service';


if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'formcivil',
  providers: [Service],
  templateUrl: './formcivil.component.html',
  styleUrls: ['./formcivil.component.scss'],
})

export class formcivil implements AfterViewInit {
  @ViewChild(DxFormComponent, { static: false }) myform!: DxFormComponent;
  

  employee: Employee;

  positions: string[];

  rules: Object;

  // newname!:any;

  constructor(service: Service) {
    this.employee = service.getEmployee();
    this.positions = service.getPositions();
    this.rules = { X: /[02-9]/ };
    
  }

  ngAfterViewInit() {
    this.myform.instance.validate();
    
  }
  // acceptdata(variable:any){
  //   this.newname=variable;
    
  // }
}


