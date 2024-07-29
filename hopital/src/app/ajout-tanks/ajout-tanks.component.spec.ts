import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutTanksComponent } from './ajout-tanks.component';

describe('AjoutTanksComponent', () => {
  let component: AjoutTanksComponent;
  let fixture: ComponentFixture<AjoutTanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutTanksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutTanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
