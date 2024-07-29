import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishGrowthComponent } from './fish-growth.component';

describe('FishGrowthComponent', () => {
  let component: FishGrowthComponent;
  let fixture: ComponentFixture<FishGrowthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishGrowthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FishGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
