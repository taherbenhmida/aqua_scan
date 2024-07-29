import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutRoomsComponent } from './ajout-rooms.component';

describe('AjoutRoomsComponent', () => {
  let component: AjoutRoomsComponent;
  let fixture: ComponentFixture<AjoutRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutRoomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
