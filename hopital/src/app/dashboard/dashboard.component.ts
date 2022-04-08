import { Component, OnInit,Input ,ViewChild,AfterViewInit } from '@angular/core';
// import { DataService } from '../services/data.service';

// import { Employee } from '../models/data.models';
// import { State } from '../models/data.models';
import { SharedService } from '../shared.service';
import { DialogconfirmationsupComponent } from '../dialogconfirmationsup/dialogconfirmationsup.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid!: DxDataGridComponent;

  constructor(private service : SharedService ,private dialog:MatDialog ,private router: Router) {}
  PersonnelList: any=[]
  // employee!: Employee[];
  // states!:State[];
  disabled!:boolean; 
  // test!:number
  // nom='hi';

  
  ngOnInit(): void {
    // this.employee = this.DataService.getAllFaceSnaps();
    // this.states = this.DataService.getStates(); 
    this.disabled=true;
    this.refreshDepList(); 
    
  }
  refreshDepList(){
    this.service.getPersonnel().subscribe(data=>{
      console.log(data);
      this.PersonnelList=data;
      console.log(this.service.message)
    });
  }
  // ngAfterViewInit():void {
  //   this.donnernom();
  //   this.nom='taher'
  // }

  // donnernom() {
  //   this.dataGrid.instance.getSelectedRowsData().then((rowData) => {
  //     for (let i = 0; i < rowData.length; i++) {
  //       this.nom='taher'
  //     }
      
  //   });
    
  // }

  opendialog(id:any):void{
    this.dialog.open(DialogconfirmationsupComponent,{
      // data:{name:id}
    })
  }
  details(id:any):void{
    this.router.navigateByUrl('/details')
  }
  
  
}
