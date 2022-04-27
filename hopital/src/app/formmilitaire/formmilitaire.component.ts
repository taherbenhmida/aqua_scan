import {
  NgModule, Component, ViewChild, enableProdMode, AfterViewInit,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ArmeComponent } from '../arme/arme.component';
import { QualificationMilitaireComponent } from '../qualification-militaire/qualification-militaire.component';
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
  selector: 'formmilitaire',
  templateUrl: './formmilitaire.component.html',
  styleUrls: ['./formmilitaire.component.scss'],
})

export class formmilitaire implements AfterViewInit {
  @ViewChild(DxFormComponent, { static: false }) myform!: DxFormComponent;
  
  personnelForm= {
    "matricule":null, 
    "date_nomination": null,
    "date_deb_contrat": null,
    "date_fin_contrat": null,
    "cim": null,
    "dtefincim": null,
    "armee": null,
    "arme": null,
    "groupe": null,
    "origine_recrutement": null,
    "qualification_militaire": null,
    "date_qualif_militaire": null
  }
  
  groupe=["الفرقة 1","الفرقة 2","الفرقة 3"]

  constructor(private service : SharedService ,private datePipe: DatePipe,private matDialog : MatDialog) {
  }

  ngAfterViewInit() {
    this.myform.instance.validate();
  }
  chargerPersonnerList(){
    this.service.personnelList.matricule= this.personnelForm.matricule
    this.service.personnelList.date_nomination = this.datePipe.transform(this.personnelForm.date_nomination,"yyyy-MM-dd")
    this.service.personnelList.date_deb_contrat= this.datePipe.transform(this.personnelForm.date_deb_contrat,"yyyy-MM-dd")
    this.service.personnelList.date_fin_contrat= this.datePipe.transform(this.personnelForm.date_fin_contrat,"yyyy-MM-dd")
    this.service.personnelList.cim= this.personnelForm.cim
    this.service.personnelList.dtefincim= this.datePipe.transform(this.personnelForm.dtefincim,"yyyy-MM-dd")
    this.service.personnelList.armee= this.personnelForm.armee
    this.service.personnelList.arme= this.personnelForm.arme
    this.service.personnelList.groupe= this.personnelForm.groupe
    this.service.personnelList.origine_recrutement= this.personnelForm.origine_recrutement
    this.service.personnelList.qualification_militaire= this.personnelForm.qualification_militaire
    this.service.personnelList.date_qualif_militaire= this.datePipe.transform(this.personnelForm.date_qualif_militaire,"yyyy-MM-dd")

    
  }

  openDialog() {
    const ref = this.matDialog.open(ArmeComponent,{
      width: '1100px',
      data: this.personnelForm
    })
    ref.afterClosed().subscribe((t) => {
      console.log(t)
      this.personnelForm.arme=t
      this.service.personnelList.arme = this.personnelForm.arme
    })
   
   
  }
  openDialog1() {
    const ref = this.matDialog.open(QualificationMilitaireComponent,{
      width: '1100px',
      data: this.personnelForm
    })
    ref.afterClosed().subscribe((t) => {
      console.log(t)
      this.personnelForm.qualification_militaire=t
      this.service.personnelList.qualification_militaire  = this.personnelForm.qualification_militaire
    })
   
   
  }
}


