import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-edituserdialog',
  templateUrl: './edituserdialog.component.html',
  styleUrls: ['./edituserdialog.component.scss']
})
export class EdituserdialogComponent implements OnInit {

  id:any;
  angForm!:FormGroup
  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private fb:FormBuilder,
    private dataService:DataService,
    private route:Router,
    private activatedRoute:ActivatedRoute
  ) {
    this.angForm = this.fb.group({
      name: ['',Validators.required],
      last_name: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      service: ['',Validators.required],
      role: ['',Validators.required],
      sexe: ['',Validators.required],
      phone: ['',Validators.required],
      date_de_naissance: ['',Validators.required],
      state: ['',Validators.required],
      city: ['',Validators.required],
      adresse: ['',Validators.required],
    })
   }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramId=>{
      this.id = this.data.id;
      console.log(this.id);
      this.dataService.getSingleuser(this.id).subscribe(data=>{
        this.angForm.patchValue(data);
      })
    })
  }
  postdata(data:any){
    if (this.angForm.valid){
      this.dataService.editUser(this.id,this.angForm.value).subscribe(data=>{
        alert("updatedsuccessfuly");
      })
    }
  }
}
export interface userelement {
  name:string;
  email:string;
  service:string;
}
