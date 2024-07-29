import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-pop-archive',
  templateUrl: './pop-archive.component.html',
  styleUrls: ['./pop-archive.component.scss']
})
export class PopArchiveComponent implements OnInit {

  displayedColumns: string[] = ['grade', 'cin','nom','prenom','service'];
  dataSource!: MatTableDataSource<any>;
  personnelForm={ 
    "cin": null,
    "nom": null,
    "prenom": null,
    "grade": null,
    "nb_absence": null,
    "presence":null,
    "note": null,
    "remarque": null,
    "service":null,
    "annee": (new Date()).getFullYear(),
    "semestre": null,
    "chef": null,
    
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public dialogRef: MatDialogRef<PopArchiveComponent>,private service : SharedService) { }

  ngOnInit(): void {
    // console.log(this.personnelForm)
    this.refreshDepList()
  }
  passData(personnelForm) {
    this.dialogRef.close(personnelForm)
  }

  refreshDepList(){
    this.service.getArchive().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });
  }

  onRowClicked(row){
    for (let x in this.personnelForm) {
      console.log('the row is :',row)
      this.personnelForm[x]=row[x] 
    this.personnelForm.chef=row.famille
    this.personnelForm.remarque=null
    this.personnelForm.nb_absence=null
    this.personnelForm.presence=null 
    this.personnelForm.note=null
    this.personnelForm.annee=(new Date()).getFullYear()
    this.personnelForm.semestre=null
  }
    this.dialogRef.close(this.personnelForm)
   

     
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
