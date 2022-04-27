import {
  NgModule, Component, ViewChild, enableProdMode, AfterViewInit,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  DxSelectBoxModule,
  DxTextAreaModule,
  DxFormModule,
  DxFormComponent,
} from 'devextreme-angular';
import { DatePipe } from '@angular/common';
import { SharedService } from '../shared.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'form2',
  // providers: [Service],
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss'],
})

export class form2 implements AfterViewInit {
  @ViewChild(DxFormComponent, { static: false }) myform!: DxFormComponent;

  // employee: Employee;

  // positions: string[];

  // rules: Object;
  personnelForm = {
    "adresse": null,
    "telephone": null,
    "telephone2": null,
    "obsrv": null,
    "passp1": null,
    "passp2": null,
    "niv_intel": null,
    "qualification": null,
    "date_diplome": null,
    "date_specialite": null,
  }
 

  constructor(private service : SharedService ,private datePipe: DatePipe) {
 
  }

  ngAfterViewInit() {
    this.myform.instance.validate();
  }
  chargerPersonnerList(){
    this.service.personnelList.adresse= this.personnelForm.adresse
    this.service.personnelList.telephone= this.personnelForm.telephone
    this.service.personnelList.telephone2= this.personnelForm.telephone2
    this.service.personnelList.obsrv= this.personnelForm.obsrv
    this.service.personnelList.passp1= this.personnelForm.passp1
    this.service.personnelList.passp2= this.personnelForm.passp2
    this.service.personnelList.niv_intel= this.personnelForm.niv_intel
    this.service.personnelList.qualification= this.personnelForm.qualification
    this.service.personnelList.date_diplome= this.datePipe.transform(this.personnelForm.date_diplome,"yyyy-MM-dd")
    this.service.personnelList.date_specialite= this.datePipe.transform(this.personnelForm.date_specialite,"yyyy-MM-dd")
  }
}


