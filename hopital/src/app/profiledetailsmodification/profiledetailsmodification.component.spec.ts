import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiledetailsmodificationComponent } from './profiledetailsmodification.component';

describe('ProfiledetailsmodificationComponent', () => {
  let component: ProfiledetailsmodificationComponent;
  let fixture: ComponentFixture<ProfiledetailsmodificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfiledetailsmodificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfiledetailsmodificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
