import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishManagmentComponent } from './fish-managment.component';

describe('FishManagmentComponent', () => {
  let component: FishManagmentComponent;
  let fixture: ComponentFixture<FishManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FishManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
