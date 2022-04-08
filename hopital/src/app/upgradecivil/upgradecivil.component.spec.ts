import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradecivilComponent } from './upgradecivil.component';

describe('UpgradecivilComponent', () => {
  let component: UpgradecivilComponent;
  let fixture: ComponentFixture<UpgradecivilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradecivilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradecivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
