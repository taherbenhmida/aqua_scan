import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';
import { Employee } from '../models/data.models';
import { SharedService } from '../shared.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PopComponent } from '../pop/pop.component';
@Component({
  selector: 'app-profileinformationform',
  templateUrl: './profileinformationform.component.html',
  styleUrls: ['./profileinformationform.component.scss']
})

export class ProfileinformationformComponent implements OnInit {
  files!: any[];
  image!:any;
  constructor(private service : SharedService ,private datePipe: DatePipe,private matDialog : MatDialog) {}
  addPersonelSub!: Subscription
  personnelForm = {
    prenom : null,
    nom: null,
    iu: null,
    date_naissance: null,
    lieu_naiss: null,
    grade: null,
    cin:null,
    dtecin: null,
    prenomf: null,
    nomf: null,
    img:"personnel.jpg"
  }
  
  ngOnInit(): void {
    this.personnelForm.img="personnel.jpg"
  }
  
  ngOnDestroy(): void {
    this.addPersonelSub.unsubscribe
  }

  chargerPersonnerList(){
    this.service.personnelList.prenom = this.personnelForm.prenom
    this.service.personnelList.nom = this.personnelForm.nom
    this.service.personnelList.iu = this.personnelForm.iu
    this.service.personnelList.date_naissance= this.datePipe.transform(this.personnelForm.date_naissance,"yyyy-MM-dd")
    this.service.personnelList.grade = this.personnelForm.grade

    this.service.personnelList.cin = this.personnelForm.cin
    this.service.personnelList.prenomf = this.personnelForm.prenomf
    this.service.personnelList.dtecin = this.datePipe.transform(this.personnelForm.dtecin,"yyyy-MM-dd")
    this.service.personnelList.nomf = this.personnelForm.nomf
    this.service.personnelList.lieu_naiss = this.personnelForm.lieu_naiss
    
    console.log('limage est :',this.image)
    console.log(this.service.personnelList)

    
 
    

    
  }
  a(){
    this.service.test.cin=this.personnelForm.cin
    
    this.addPersonelSub = this.service.getOnePersonnel(this.service.test).subscribe((res) => {
      
      alert( '                   هذا رقم ب ت و الموظف :'+'\n'+res.prenom + " " +res.nom + " ")
    
      },(err) => {alert("هذا الموظف غير مسجل       ")})
  }
  openDialog() {
    const ref = this.matDialog.open(PopComponent,{
      width: '1100px',
      data: this.personnelForm
    })
    ref.afterClosed().subscribe((t) => {
      console.log(t)
      this.personnelForm.grade=t
      this.service.personnelList.grade = this.personnelForm.grade
    })
  }
  onFileSelected(event){
    this.files = event.target.files;
    this.personnelForm.img=event.target.files[0].name
    this.service.personnelList.img=this.personnelForm.img
  }

}
