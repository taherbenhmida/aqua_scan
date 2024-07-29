import { Component, Input, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { SharedService } from '../shared.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-personnel-situation',
  templateUrl: './personnel-situation.component.html',
  styleUrls: ['./personnel-situation.component.scss']
})
export class PersonnelSituationComponent implements OnInit {
  displayedColumns: string[] = ['adresse', 'nom','prenom','grade'];
  dataSource!: MatTableDataSource<any>;
  a="sqddsdq"
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  select!:boolean
  mission_Form!:FormGroup
  punition_Form!:FormGroup
  constructor(private service : SharedService,
              private snackBar: MatSnackBar, 
              private http: HttpClient,
              private fb:FormBuilder,
              private passfb:FormBuilder,
              private dataService:DataService,
              private matDialog : MatDialog,
              public datepipe: DatePipe,) 

  {this.mission_Form = this.fb.group({
    cin:[''],
    nom:[''],
    prenom:[''],
    grade:[''],
    type_mission:['',Validators.required],
    date_debut:['',Validators.required],
    date_fin:['',Validators.required],
    remarque:['',Validators.required],
    })
  this.punition_Form = this.passfb.group({
    cin:[''],
    nom:[''],
    prenom:[''],
    grade:[''],
    type_punition:['',Validators.required],
    date:['',Validators.required],
    nbre_jour:['',Validators.required],
    remarque:['',Validators.required],
    })
  }
  serv!:any;
  addPersonelSub!: Subscription
  personnelForm = {
    "adresse": null,
    "telephone": null,
    "telephone2": null,
    "obsrv": null,
    "passp1": null,
    "passp2": null,
    "prenom": null,
    "nom": null,
    "grade": null,
    "nbr_enfant": null,
    "pointure": null,
    "poids": null,
    "taille": null,
    "cin":null,
    // "matricule":null,
  }
  ngOnInit(): void {
    this.select=true
    // console.log(this.personnelForm)
    this.get_role()
   
    this.service.login(this.service.pwd).subscribe((data:any)=>{
      console.log("hhhhhhhhhh",this.service.pwd)
      this.get_role()
    })
  }

  
  refreshDepList(){
    this.service.getPersonnelByService(this.service.serv).subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    }); 
  }

 
  test(){
    console.log(this.serv)
  }
  get_role(){ 
     this.service.get_loggeduser().subscribe((res:any) => {
       console.log('test logged user ')
      console.log(res)
      this.service.serv = res.service
       console.log(this.service.serv)
       this.refreshDepList()
       })
  }

  onRowClicked(row){
    this.select=false
    this.service.personnelList=row
    for (let x in this.personnelForm) {
      this.personnelForm[x]=row[x] }

     
  }

  onSubmit() {
    
    for (let x in (this.personnelForm))
    {this.service.personnelList[x]=this.personnelForm[x]}
    
   

    this.addPersonelSub = this.service.updatePersonne(this.service.personnelList).subscribe((res) => {
      console.log(res)
      console.log(this.service.personnelList)
      this.refreshDepList();
      this.snackBar.open('',res,{duration:3000,verticalPosition:'top',horizontalPosition:'right',panelClass: 'notif-success'})
    })
    

    
  }
  
 
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  confirm_mission(data:any){
    if(!this.mission_Form.valid){
      return
    }
    //this.mission_Form.controls['grade'].valueChanges!=this.personnelForm.grade
    console.log('try to add mission !')
    this.mission_Form.patchValue({
      cin:this.personnelForm.cin,
      prenom:this.personnelForm.prenom,
      nom:this.personnelForm.nom,
      grade:this.personnelForm.grade,
      date_debut:this.datepipe.transform(this.mission_Form.controls['date_debut'].value, 'yyyy-MM-dd'),
      date_fin:this.datepipe.transform(this.mission_Form.controls['date_fin'].value, 'yyyy-MM-dd'),
    });
  
    console.log('les données enregisrtées :',this.mission_Form)
    this.dataService.add_mission(this.mission_Form.getRawValue()).subscribe(data=>{
      alert('added successfuly !')
      
    })
  }

  confirm_punition(data:any){
    if (!this.punition_Form.valid){
      return
    }
    //this.mission_Form.controls['grade'].valueChanges!=this.personnelForm.grade

    this.punition_Form.patchValue({
      cin:Number(this.personnelForm.cin),
      prenom:this.personnelForm.prenom,
      nom:this.personnelForm.nom,
      grade:this.personnelForm.grade,
      date:this.datepipe.transform(this.punition_Form.controls['date'].value, 'yyyy-MM-dd'),
      nbre_jour:Number(this.punition_Form.controls['nbre_jour'].value)
    });
    console.log('les données enregisrtées :',this.mission_Form)
    this.dataService.add_punition(this.punition_Form.getRawValue()).subscribe(data=>{
      alert('added successfuly !')
      
    })
  }
}
