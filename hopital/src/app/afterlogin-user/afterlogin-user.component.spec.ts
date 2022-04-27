import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterloginUserComponent } from './afterlogin-user.component';

describe('AfterloginUserComponent', () => {
  let component: AfterloginUserComponent;
  let fixture: ComponentFixture<AfterloginUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterloginUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterloginUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
