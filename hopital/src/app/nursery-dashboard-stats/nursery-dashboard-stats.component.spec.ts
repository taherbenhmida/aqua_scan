import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseryDashboardStatsComponent } from './nursery-dashboard-stats.component';

describe('NurseryDashboardStatsComponent', () => {
  let component: NurseryDashboardStatsComponent;
  let fixture: ComponentFixture<NurseryDashboardStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseryDashboardStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseryDashboardStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
