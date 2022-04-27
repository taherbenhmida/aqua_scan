import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileinformationmatformComponent } from './profileinformationmatform.component';

describe('ProfileinformationmatformComponent', () => {
  let component: ProfileinformationmatformComponent;
  let fixture: ComponentFixture<ProfileinformationmatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileinformationmatformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileinformationmatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
