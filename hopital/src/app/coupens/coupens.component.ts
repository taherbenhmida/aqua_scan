import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MedaildialogComponent } from '../medaildialog/medaildialog.component';
import { Router} from '@angular/router'
@Component({
  selector: 'app-coupens',
  templateUrl: './coupens.component.html',
  styleUrls: ['./coupens.component.scss']
})

export class CoupensComponent implements OnInit {

  constructor(public dialog: MatDialog ,private router:Router) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(MedaildialogComponent,
      {
        height: '50%',
        width: '20%',
        
      });}
  
}
