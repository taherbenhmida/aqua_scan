import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileinformationformComponent } from './profileinformationform.component';

describe('ProfileinformationformComponent', () => {
  let component: ProfileinformationformComponent;
  let fixture: ComponentFixture<ProfileinformationformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileinformationformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileinformationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
