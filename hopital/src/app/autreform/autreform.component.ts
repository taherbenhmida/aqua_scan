import {
  NgModule, Component, ViewChild, enableProdMode, AfterViewInit,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DatePipe } from '@angular/common';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BureauComponent } from '../bureau/bureau.component';
import { SpecialiteComponent } from '../specialite/specialite.component';
import { ServiceComponent } from '../service/service.component';
import { FonctionComponent } from '../fonction/fonction.component';
import { SituationComponent } from '../situation/situation.component';
import {
  DxSelectBoxModule,
  DxTextAreaModule,
  DxFormModule,
  DxFormComponent,
} from 'devextreme-angular';

import { SharedService } from '../shared.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'autreform',
  templateUrl: './autreform.component.html',
  styleUrls: ['./autreform.component.scss'],
})

export class autreform implements AfterViewInit {
  @ViewChild(DxFormComponent, { static: false }) myform!: DxFormComponent;
  personnelForm = {
    "matr_corps": null,
    "specialite": null,
    "date_entr_hopi": null,
    "date_entr_serv": null,
    "base": null,
    "unite": null,
    "position":null,
    "service": null,
    "etat": null,
    "fonction": null,
    "office": null,
    "situation": null,
    "date_fonction": null,
  }

  base = ["المستشفى العسكري الأصلي للتعليم بتونس"]
  


  constructor(private service : SharedService ,private datePipe: DatePipe ,private matDialog : MatDialog) {

  }

  ngAfterViewInit() {
    this.myform.instance.validate();
  }
  chargerPersonnerList(){
    this.service.personnelList.matr_corps = this.personnelForm.matr_corps
    this.service.personnelList.specialite = this.personnelForm.specialite
    this.service.personnelList.date_entr_hopi = this.datePipe.transform(this.personnelForm.date_entr_hopi,"yyyy-MM-dd")
    this.service.personnelList.date_entr_serv= this.datePipe.transform(this.personnelForm.date_entr_serv,"yyyy-MM-dd")
    this.service.personnelList.base = this.personnelForm.base
    this.service.personnelList.unite = this.personnelForm.unite
    this.service.personnelList.position = this.personnelForm.position
    this.service.personnelList.service = this.personnelForm.service
    this.service.personnelList.etat = this.personnelForm.etat
    this.service.personnelList.fonction = this.personnelForm.fonction
    this.service.personnelList.office = this.personnelForm.office
    this.service.personnelList.situation = this.personnelForm.situation
    this.service.personnelList.date_fonction = this.datePipe.transform(this.personnelForm.date_fonction,"yyyy-MM-dd")

    
  }
  openDialog() {
    const ref = this.matDialog.open(BureauComponent,{
      width: '1100px',
      data: this.personnelForm
    })
    ref.afterClosed().subscribe((t) => {
      this.personnelForm.office=t
      this.service.personnelList.office  = this.personnelForm.office
    })
   
   
  }
  openDialog1() {
    const ref = this.matDialog.open(SpecialiteComponent,{
      width: '1100px',
      data: this.personnelForm
    })
    ref.afterClosed().subscribe((t) => {
      this.personnelForm.specialite=t
      this.service.personnelList.specialite  = this.personnelForm.specialite
    })
   
   
  }
  openDialog2() {
    const ref = this.matDialog.open(ServiceComponent,{
      width: '1100px',
      data: this.personnelForm
    })
    ref.afterClosed().subscribe((t) => {
      this.personnelForm.service=t
      this.service.personnelList.service  = this.personnelForm.service
    })
   
   
  }
  openDialog3() {
    const ref = this.matDialog.open(FonctionComponent,{
      width: '1100px',
      data: this.personnelForm
    })
    ref.afterClosed().subscribe((t) => {
      this.personnelForm.fonction=t
      this.service.personnelList.fonction  = this.personnelForm.fonction
    })
   
   
  }
  openDialog4() {
    const ref = this.matDialog.open(SituationComponent,{
      width: '1100px',
      data: this.personnelForm
    })
    ref.afterClosed().subscribe((t) => {
      this.personnelForm.situation=t
      this.service.personnelList.situation  = this.personnelForm.situation
    })
   
   
  }

}


