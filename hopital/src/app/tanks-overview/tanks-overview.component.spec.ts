import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanksOverviewComponent } from './tanks-overview.component';

describe('TanksOverviewComponent', () => {
  let component: TanksOverviewComponent;
  let fixture: ComponentFixture<TanksOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TanksOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TanksOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
