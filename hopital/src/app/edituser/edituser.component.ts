import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {
  id:any;
  angForm!:FormGroup
  constructor(
    private fb:FormBuilder,
    private dataService:DataService,
    private route:Router,
    private activatedRoute:ActivatedRoute
  ) {
    this.angForm = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      service:['',Validators.required],
    })
   }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramId=>{
      this.id = paramId.get('id');
      console.log(this.id);
      this.dataService.getSingleuser(this.id).subscribe(data=>{
        this.angForm.patchValue(data);
      })
    })
  }
  postdata(data:any){
    this.dataService.editUser(this.id,this.angForm.value).subscribe(data=>{
      alert('updated successfuly !')
    })
  }
}
