import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { SharedService } from '../shared.service';
import { FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar'; 


@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.scss']
})
export class PresenceComponent implements OnInit {
  displayedColumns: string[] = ['actions','prenom','nom','grade'];
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
   
  

  presence_list={
    'cin':null,
    'nom':null,
    'prenom':null,
    'grade':null,
    'situation':null,
    'date':null
  }
  test:any

 
  constructor(private service : SharedService,
    private dataservice :DataService,
    public datepipe: DatePipe,
    private snackBar: MatSnackBar) { }

    
    

  

  
  
  ngOnInit(): void {
    this.date = new FormControl(this.convert_date(this.date));
    this.serializedDate = new FormControl(new Date().toISOString());
    
    this.service.getPersonnelByService(this.service.serv).subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });
    this.refreshDepList()
  }


  refreshDepList(){
    this.service.getPersonnelByService(this.service.serv).subscribe(data=>{
      let i=0
      this.test=Array()
      for (let x of data){
        this.presence_list.cin=x.cin,
        this.presence_list.nom=x.nom,
        this.presence_list.prenom=x.prenom,
        this.presence_list.grade=x.grade,
        this.presence_list.situation=x.situation,
        this.presence_list.date=this.date.value,
        console.log('this time is :',this.date.value)
        this.test[i]=this.presence_list,
        i++
        this.presence_list={
          'cin':null,
          'nom':null,
          'prenom':null,
          'grade':null,
          'situation':null,
          'date':null
        }
      }

      this.dataSource= new MatTableDataSource(this.test);
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

    this.refreshDepList()
    for (let i in this.test) {
      this.dataservice.add_presence(this.test[i]).subscribe(res=>{
        this.snackBar.open('',res,{duration:9000,verticalPosition:'top',horizontalPosition:'right',panelClass: 'notif-success'}) 
      })
      // alert('تم تحيين الحضور بنجاح')
    }
    
    console.log('the newwwwwwww data',this.test)
    console.log('the date is ',this.presence_list.date)

  }
  
}

