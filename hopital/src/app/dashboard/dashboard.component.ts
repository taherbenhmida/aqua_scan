import { Component, OnInit,Input ,ViewChild,AfterViewInit } from '@angular/core';
import { DataService } from '../services/data.service';

import { Employee } from '../models/data.models';
import { State } from '../models/data.models';

import { DialogconfirmationsupComponent } from '../dialogconfirmationsup/dialogconfirmationsup.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DxDataGridComponent } from 'devextreme-angular';

import {HttpClient} from '@angular/common/http';
import {Emitters} from '../emitters/emitters'
import { AuthService } from 'src/security/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid!: DxDataGridComponent;

  message = '';

  constructor(
    private DataService:DataService,
    private dialog:MatDialog ,
    private router: Router,
    private http: HttpClient,
    private authservice: AuthService) {}

  employee!: Employee[];
  states!:State[];
  disabled!:boolean;
  test!:number
  nom='hi';

  
  ngOnInit(): void {
    this.employee = this.DataService.getAllFaceSnaps();
    this.states = this.DataService.getStates(); 
    this.disabled=true;

    this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
      (res: any) => {
        this.message = `Hi ${res.name} de service ${res.service}`;
        Emitters.authEmitter.emit(true);
      },
      err => {
        this.message = 'You are not logged in';
        Emitters.authEmitter.emit(false);
      }
    );
    //this.authservice.IsloggedIn()
    
  }
  ngAfterViewInit():void {
    this.donnernom();
    this.nom='taher'
  }

  donnernom() {
    this.dataGrid.instance.getSelectedRowsData().then((rowData) => {
      for (let i = 0; i < rowData.length; i++) {
        this.nom='taher'
      }
      
    });
    
  }

  opendialog(id:any):void{
    this.dialog.open(DialogconfirmationsupComponent,{
      data:{name:id}
    })
  }
  details(id:any):void{
    this.router.navigateByUrl('/details')
  }
  
  
}
