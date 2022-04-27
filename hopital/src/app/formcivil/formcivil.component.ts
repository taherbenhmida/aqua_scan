import {
  NgModule, Component, ViewChild, enableProdMode, AfterViewInit,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxFormComponent } from 'devextreme-angular';
import { SharedService } from '../shared.service';


if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'formcivil',
  // providers: [Service],
  templateUrl: './formcivil.component.html',
  styleUrls: ['./formcivil.component.scss'],
})

export class formcivil implements AfterViewInit {
  @ViewChild(DxFormComponent, { static: false }) myform!: DxFormComponent;
  personnelForm = {
    "prenom_pere": null,
    "prenom_mere": null,
    "situation_familiale": null,
    "etatcivil": null,
    "taille": null,
    "poids": null,
    "sexe": null,
    "pointure": null,
    "gpsanguin": null,
    "prenom_partenaire": null,
    "prenom_grandpere": null,
    "nbr_enfant": null,
  }
  etat = ["متزوج","أعزب","مطلق","أرمل"]
  sexe = ["ذكر","أنثى"]
  grp_s = ["A+","A-","B+","B-","O+","O-","AB+","AB-"]



  constructor(private service : SharedService) {
 
  }

  ngAfterViewInit() {
    this.myform.instance.validate();
    
  }
  chargerPersonnerList(){
    this.service.personnelList.prenom_pere = this.personnelForm.prenom_pere
    this.service.personnelList.prenom_mere = this.personnelForm.prenom_mere
    this.service.personnelList.situation_familiale = this.personnelForm.situation_familiale
    this.service.personnelList.etatcivil = this.personnelForm.etatcivil
    this.service.personnelList.taille = this.personnelForm.taille
    this.service.personnelList.poids = this.personnelForm.poids
    this.service.personnelList.sexe = this.personnelForm.sexe
    this.service.personnelList.pointure = this.personnelForm.pointure
    this.service.personnelList.gpsanguin = this.personnelForm.gpsanguin
    this.service.personnelList.prenom_partenaire = this.personnelForm.prenom_partenaire
    this.service.personnelList.prenom_grandpere = this.personnelForm.prenom_grandpere
    this.service.personnelList.nbr_enfant = this.personnelForm.nbr_enfant
   
  }
}


