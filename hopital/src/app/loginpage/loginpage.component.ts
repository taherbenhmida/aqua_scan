import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { AuthService } from 'src/security/auth.service';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  hide = true;
  coordonnees !:boolean;
  email = new FormControl('', [Validators.required, Validators.email]);
  
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authservice:AuthService,
    private service : SharedService,
  ) {
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      password: ''
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }
    this.service.pwd=this.form.getRawValue()
    this.authservice.login(this.form.getRawValue())
    console.log('get row value first !!! ')
    this.coordonnees=this.authservice.IsloggedIn()
    console.log('les coord',this.coordonnees)
  }
  
  

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'عليك إدخال البريد الإلكتروني';
    }

    return this.email.hasError('email') ? 'بريد إلكتروني غير صحيح' : '';
  }

}
