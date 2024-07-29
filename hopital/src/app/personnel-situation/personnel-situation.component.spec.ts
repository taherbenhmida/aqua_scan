import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelSituationComponent } from './personnel-situation.component';

describe('PersonnelSituationComponent', () => {
  let component: PersonnelSituationComponent;
  let fixture: ComponentFixture<PersonnelSituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnelSituationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
