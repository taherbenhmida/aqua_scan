import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { SharedService } from '../shared.service';
import { FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-historique-presence',
  templateUrl: './historique-presence.component.html',
  styleUrls: ['./historique-presence.component.scss']
})
export class HistoriquePresenceComponent implements OnInit {

  displayedColumns: string[] = ['date','situation','prenom','nom','grade'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  convert_date(date:any):any{
    date=new Date();
    date =this.datepipe.transform(date, 'yyyy-MM-dd');
    return date
   }
   
  time:any

  

  constructor(private service : SharedService,
              private dataservice :DataService,
              public datepipe: DatePipe) { }
  
  ngOnInit(): void {
    this.date = new FormControl(this.convert_date(this.date));
    this.serializedDate = new FormControl(new Date().toISOString());
    
    this.service.getPersonnel().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });
    this.refreshDepList()
  }


  refreshDepList(){
    this.dataservice.get_presence().subscribe(data=>{
      
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

  addEvent(){

    

  }
  
}

