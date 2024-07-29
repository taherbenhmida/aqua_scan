import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { EdituserdialogComponent } from '../edituserdialog/edituserdialog.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BreakpointObserver } from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements AfterViewInit ,OnInit{


  ELEMENT_DATA !: userelement[];
  displayedColumns: string[] = ['action','last_login','date_joined','service', 'email', 'name','logged'];
  dataSource = new MatTableDataSource<userelement>(this.ELEMENT_DATA);

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  form!: FormGroup;
  users:any;
  hide = true;
  constructor(private _liveAnnouncer: LiveAnnouncer,
              private dataservice:DataService,
              private dialog:MatDialog ,
              private formBuilder: FormBuilder,
              private http: HttpClient,
              private router: Router,
              private matsnackbar:MatSnackBar,
              ) {}
  ngOnInit(): void {
    this.fetchUsers();
    this.form = this.formBuilder.group({
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
    });
  }
  deleteUser(id:any){
    this.dataservice.delUser(id).subscribe(() =>{
      this.fetchUsers();
    })
  }
  submit(): void {
      if (!this.form.valid) {
        return
      }
        this.http.post('http://localhost:8000/api/register', this.form.getRawValue())
        .subscribe(() => this.fetchUsers());
        this.matsnackbar.open('تمت إضافة المستعمل بنجاح','',{
          duration: 3000
        });
  }
  fetchUsers(){
    this.dataservice.listUsers().subscribe((data) =>{
      this.users=data;
      this.dataSource.data=data as userelement[];
      console.log(this.users)
    })
  }
  opendialog(id:any):void{
    this.dialog.open(EdituserdialogComponent,{
      data:{id:id}
    }).afterClosed().subscribe(()=>this.fetchUsers())
  }

   /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}

export interface userelement {
  name:string;
  email:string;
  service:string;
  last_login:string;
  logged:string;
  date_joined:string;
}




