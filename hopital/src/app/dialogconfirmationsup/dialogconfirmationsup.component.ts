import { Component, OnInit ,Inject} from '@angular/core';
import { inject } from '@angular/core/testing';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialogconfirmationsup',
  templateUrl: './dialogconfirmationsup.component.html',
  styleUrls: ['./dialogconfirmationsup.component.scss']
})
export class DialogconfirmationsupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

}
