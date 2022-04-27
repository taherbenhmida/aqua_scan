import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { AuthService } from 'src/security/auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authservice:AuthService,
  ) {
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  submit(): void {
    this.authservice.login(this.form.getRawValue())
  }

  

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'عليك إدخال البريد الإلكتروني';
    }

    return this.email.hasError('email') ? 'بريد إلكتروني غير صحيح' : '';
  }

}
