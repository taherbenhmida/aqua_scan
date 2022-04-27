import { Component, OnInit,ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { ProfileinformationformComponent } from '../profileinformationform/profileinformationform.component';
import { form2 } from '../form2/form2.component';
import { formcivil } from '../formcivil/formcivil.component';
import { formmilitaire } from '../formmilitaire/formmilitaire.component';
import { autreform } from '../autreform/autreform.component';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  displayedColumns: string[] = ['nom', 'prenom', 'cin', 'matricule'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(ProfileinformationformComponent) child;
  @ViewChild(form2) child1;
  @ViewChild(formcivil) child2;
  @ViewChild(formmilitaire) child3;
  @ViewChild(autreform) child4;

  constructor(private service : SharedService ) { }
  
  addPersonelSub!: Subscription
  PersonnelList: any=[]
  mes:any=[]
  

  ngOnInit(): void {
    this.refreshDepList();
  }
  
  
  ngOnDestroy(): void {
    this.addPersonelSub.unsubscribe
  }
  onSubmit() {
    for (let x in (this.child.personnelForm))
    {this.service.personnelList[x]=this.child.personnelForm[x]}
    
    for (let x in (this.child1.personnelForm )){
      this.service.personnelList[x]=this.child1.personnelForm[x]
    }
    for (let x in (this.child2.personnelForm )){
      this.service.personnelList[x]=this.child2.personnelForm[x]
    }
    for (let x in (this.child3.personnelForm )){
      this.service.personnelList[x]=this.child3.personnelForm[x]
    }
    for (let x in (this.child4.personnelForm )){
      this.service.personnelList[x]=this.child4.personnelForm[x]
    }


    
    

    this.addPersonelSub = this.service.deletePersonne(this.service.personnelList).subscribe((res) => {
      console.log(res)
      console.log(this.service.personnelList)
    this.service.addArchive(this.service.personnelList).subscribe((res) => {
        console.log(res)
        console.log(this.service.personnelList)
        this.refreshDepList();
        
     
        })

    alert('deleted successfully')
    
    
  
      
    },(err) => {alert("error")}) 

     

     
    
  

  }
  refreshDepList(){
    this.service.getPersonnel().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });
  }


  onRowClicked(row){
    for (let x in this.child.personnelForm) {
      this.child.personnelForm[x]=row[x] }
    for (let x in this.child1.personnelForm) {
      this.child1.personnelForm[x]=row[x] }
    for (let x in this.child2.personnelForm) {
      this.child2.personnelForm[x]=row[x] }
    for (let x in this.child3.personnelForm) {
      this.child3.personnelForm[x]=row[x] }
    for (let x in this.child4.personnelForm) {
      this.child4.personnelForm[x]=row[x] }

     
  }

  reset(){
   
    for (let x in this.child.personnelForm) {
      this.child.personnelForm[x]=null }
    for (let x in this.child1.personnelForm) {
      this.child1.personnelForm[x]=null }
    for (let x in this.child2.personnelForm) {
      this.child2.personnelForm[x]=null }
    for (let x in this.child3.personnelForm) {
      this.child3.personnelForm[x]=null }
    for (let x in this.child4.personnelForm) {
      this.child4.personnelForm[x]=null }
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 

}
