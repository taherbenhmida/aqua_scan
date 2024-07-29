import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule, Validators, FormBuilder} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import { RoomsOverviewComponent } from '../rooms-overview/rooms-overview.component'; 
import { TanksOverviewComponent } from '../tanks-overview/tanks-overview.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
})
export class HomeComponent implements OnInit {

  @ViewChild(RoomsOverviewComponent) roomsOverviewComponent!: RoomsOverviewComponent;
  @ViewChild(TanksOverviewComponent) tanksOverviewComponent!: TanksOverviewComponent;

  // Method to call the chart initialization in RoomsOverviewComponent
  callInitSaturationChart(): void {
    if (this.roomsOverviewComponent) {
      this.roomsOverviewComponent.initSaturationChart();
    } else {
      console.error('RoomsOverviewComponent not found or not initialized.');
    }
  }

  tabs = [
    { label: 'Tab 1', form: this.fb.group({ name: ['', Validators.required] }) },
    { label: 'Tab 2', form: this.fb.group({ name: ['', Validators.required] }) }
  ];
  newTabIndex = 3; // Initialize with the next available index
  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
      (res: any) => {
         console.log(res.role)
         localStorage.setItem('usertype',`${res.role}`)
      },
    );

  }

  onTabChange(event: any) {
    if (this.roomsOverviewComponent) {
      this.roomsOverviewComponent.initSaturationChart();
      this.roomsOverviewComponent.init_MorbidityChart();
      this.roomsOverviewComponent.init_MortalityChart();
      this.roomsOverviewComponent.Selectedtabindex();

      this.tanksOverviewComponent.init_Growth_performances_Chart();
    } else {
      console.error('RoomsOverviewComponent not found or not initialized.');
    }
  }
  

}
