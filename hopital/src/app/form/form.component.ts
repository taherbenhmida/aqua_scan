import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

import { Employee } from '../models/data.models';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private DataService:DataService ) {}

  employee!: Employee[];
  
  ngOnInit(): void {
    this.employee = this.DataService.getAllFaceSnaps();
    
  }

}
