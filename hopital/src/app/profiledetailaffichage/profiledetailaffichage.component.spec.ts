import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiledetailaffichageComponent } from './profiledetailaffichage.component';

describe('ProfiledetailaffichageComponent', () => {
  let component: ProfiledetailaffichageComponent;
  let fixture: ComponentFixture<ProfiledetailaffichageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfiledetailaffichageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfiledetailaffichageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
