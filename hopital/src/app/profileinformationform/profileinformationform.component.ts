import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

import { Employee } from '../models/data.models';


@Component({
  selector: 'app-profileinformationform',
  templateUrl: './profileinformationform.component.html',
  styleUrls: ['./profileinformationform.component.scss']
})
export class ProfileinformationformComponent implements OnInit {
  
  nom!:string;
  constructor(private DataService:DataService ) {}

  employee!: Employee[];
  Notes='John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.'
  
  ngOnInit(): void {
    this.employee = this.DataService.getAllFaceSnaps();
  }
  
}
