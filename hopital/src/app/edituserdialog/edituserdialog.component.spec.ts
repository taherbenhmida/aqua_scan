import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituserdialogComponent } from './edituserdialog.component';

describe('EdituserdialogComponent', () => {
  let component: EdituserdialogComponent;
  let fixture: ComponentFixture<EdituserdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdituserdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdituserdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
