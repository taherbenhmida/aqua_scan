import { Component, OnInit,ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
 
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { interval } from 'rxjs'

export interface UserData {
  Room: number;
  Tank: number; 
  Treatment_name: String;
  Posologie: String;
  Dose: String;
  Biomasse: number;
  Quantity: number;
  Date: String;
}

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {
  displayedColumns: string[] = ['Room', 'Tank', 'Treatment name', 'Posologie', 'Dose', 'Biomasse', 'Quantity', 'Date'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort; 

  

  constructor(private service : SharedService,private fb:FormBuilder,private dataservice: DataService) {
      
    const users: UserData[] = [
      {Room: 1, Tank: 2, Treatment_name: 'azerty', Posologie: 'posologie', Dose:'2kg', Biomasse: 50, Quantity:20, Date:'02/03/2020'},
      {Room: 1, Tank: 2, Treatment_name: 'azerty', Posologie: 'posologie', Dose:'2kg', Biomasse: 50, Quantity:20, Date:'02/03/2020'},
      {Room: 1, Tank: 2, Treatment_name: 'azerty', Posologie: 'posologie', Dose:'2kg', Biomasse: 50, Quantity:20, Date:'02/03/2020'}
    
    ];
                  
              
     // Initialize the data source
    this.dataSource = new MatTableDataSource(users);
              }
    

  
  ngOnInit(): void {
   
  }



  

  

 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}
