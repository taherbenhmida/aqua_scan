import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcivilComponent } from './formcivil.component';

describe('FormcivilComponent', () => {
  let component: FormcivilComponent;
  let fixture: ComponentFixture<FormcivilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcivilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
