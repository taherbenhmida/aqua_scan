import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { PopComponent } from '../pop/pop.component';



@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {
  hideoldpass=true;
  hidenewpass=true;
  hideconfirmpass=true;
  angForm!:FormGroup
  passForm!:FormGroup
  id!:any;
  grade!:any;
  img!:any;
  files!: any[];
  new_pass!:any;
  confirm_pass!:any;
  test_oldpass!:boolean
  constructor(private http: HttpClient,
              private fb:FormBuilder,
              private passfb:FormBuilder,
              private dataService:DataService,
              private matDialog : MatDialog) 
  {this.angForm = this.fb.group({
    name:['',Validators.required],
    last_name:['',Validators.required],
    email:['',Validators.required],
    sexe:['',Validators.required],
    service:['',Validators.required],
    phone:['',Validators.required],
    grade:['',Validators.required],
    adresse:['',Validators.required],
    date_de_naissance:['',Validators.required],
    state:['',Validators.required],
    city:['',Validators.required],
    })
  this.passForm = this.passfb.group({
    email:['',Validators.required],
    password:['',Validators.required],
    newpass:['',Validators.required],
    confirmpass:['',Validators.required],
    })
  }
  
  
  


  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
      (data: any) => {
        this.angForm.patchValue(data);
        this.passForm.patchValue(data);
        this.id=data.id;
        this.grade=data.grade;
        this.img=data.img;
      },
    );
  }

  update(data:any){
    if(!this.angForm.valid){
      return
    }
    this.dataService.editUser(this.id,this.angForm.value).subscribe(data=>{
      alert('updated successfuly !')
      this.grade=this.angForm.controls['grade'].value
    })
  }
  
  change_password(){
      this.http.put('http://localhost:8000/api/UpdatePassword', this.passForm.getRawValue(), {withCredentials: true})
      .subscribe((res:any) => {
        alert('changed successfuly !')
      },
    ); 
  }

  verify_oldpass(){
    if (this.passForm.invalid) {
      return;
    }
    this.http.post('http://localhost:8000/api/PasswordVerification', this.passForm.getRawValue(), {withCredentials: true})
    .subscribe((res:any) => {
      if(res.status=='true'){
        this.test_oldpass=true
        console.log('test for the old in the if :',this.test_oldpass)
        //alert('true old pass')
        if(this.verify_confirmation_pass()){
          this.change_password()
          this.passForm.reset()
          this.passForm.clearAsyncValidators()
        }
      }
      else {
        this.test_oldpass=false
        alert('false old pass')
      }
    },
    );
    console.log('test for the old in the function :',this.test_oldpass)
  }
  
  verify_confirmation_pass():boolean{
    this.new_pass=this.passForm.controls['newpass'].value
    this.confirm_pass=this.passForm.controls['confirmpass'].value
    if(this.new_pass==this.confirm_pass){
      //alert('confirmation okkkkkk !')
      return true
    }
    else {
      alert('confirmation fausse !')
      return false
    }
  }
  
  onFileChange(event){
    this.files = event.target.files;
    console.log('image',event.target.files[0].name);
    console.log('the user is ',this.id);
    this.dataService.edit_img(this.id,{"img":event.target.files[0].name}).subscribe(data=>{
      alert('image was updated successfuly !')
      console.log('image ',event.target.files[0].name)
      this.img=event.target.files[0].name
    })
  }
  openDialog() {
    const ref = this.matDialog.open(PopComponent,{
      width: '1100px',
      data: this.angForm
    })
    ref.afterClosed().subscribe((t) => {
      console.log(t)
      this.angForm.patchValue({
        grade: t, 
      });
      
    })

  }
}
