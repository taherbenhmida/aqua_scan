import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishHealthComponent } from './fish-health.component';

describe('FishHealthComponent', () => {
  let component: FishHealthComponent;
  let fixture: ComponentFixture<FishHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishHealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FishHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
