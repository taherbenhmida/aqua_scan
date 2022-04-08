import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogconfirmationsupComponent } from './dialogconfirmationsup.component';

describe('DialogconfirmationsupComponent', () => {
  let component: DialogconfirmationsupComponent;
  let fixture: ComponentFixture<DialogconfirmationsupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogconfirmationsupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogconfirmationsupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
