import { Component, OnInit,ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { RouterLinkWithHref } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'; 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['actions','telephone','date_entr_hopi','iu','matricule','cin','nom', 'prenom'];
  dataSource!: MatTableDataSource<any>;
  a=""
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private service : SharedService ,private snackBar: MatSnackBar) { }
  
  addPersonelSub!: Subscription
  

 

  ngOnInit(): void {
    this.refreshDepList();
  }
  
  
  ngOnDestroy(): void {
    this.addPersonelSub.unsubscribe
  }
  onSubmit(row) {
   
     this.onRowClicked(row)
    this.addPersonelSub = this.service.addPersonne(this.service.personnelList).subscribe((res) => {
      console.log(res)
      console.log(this.service.personnelList)
    })
   
    this.addPersonelSub = this.service.deleteArchive(this.service.personnelList).subscribe((res) => {
      console.log(res)
      console.log(this.service.personnelList)
      this.snackBar.open('',res,{duration:3000,verticalPosition:'top',horizontalPosition:'right',panelClass: 'notif-success'})

      this.refreshDepList2()
      
    })
    
    
   
  }

  refreshDepList2(){
    this.service.getArchive().subscribe(data=>{
     this.dataSource= new MatTableDataSource(data);
     this.dataSource.filter=this.a
    
    

    });
  }

  refreshDepList(){
    this.service.getArchive().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });
  }


  onRowClicked(row){
    for (let x in row ) {
      this.service.personnelList[x]=row[x] ; 
      row.d}
    
     
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 

 
}
