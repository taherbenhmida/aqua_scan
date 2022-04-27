import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-arme',
  templateUrl: './arme.component.html',
  styleUrls: ['./arme.component.scss']
})
export class ArmeComponent implements OnInit {
  displayedColumns: string[] = ['code_arme', 'libelle_arme'];
  dataSource!: MatTableDataSource<any>; 

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public dialogRef: MatDialogRef<ArmeComponent>,private service : SharedService) { }

  ngOnInit(): void {
    // console.log(this.personnelForm)
    this.refreshDepList()
  }
  passData(t:string) {
    this.dialogRef.close(t)
  }

  refreshDepList(){
    this.service.getArme().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

