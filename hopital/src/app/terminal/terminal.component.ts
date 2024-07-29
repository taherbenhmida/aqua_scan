import { Component, Input, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { SharedService } from '../shared.service';
import { MatSnackBar } from '@angular/material/snack-bar'; 

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {
  displayedColumns: string[] = ['adresse', 'nom','prenom','grade'];
  dataSource!: MatTableDataSource<any>;
  a="sqddsdq"
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service : SharedService,private snackBar: MatSnackBar ) { }
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
}

