import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedaildialogComponent } from './medaildialog.component';

describe('MedaildialogComponent', () => {
  let component: MedaildialogComponent;
  let fixture: ComponentFixture<MedaildialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedaildialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedaildialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
