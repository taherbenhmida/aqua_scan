import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationMilitaireComponent } from './qualification-militaire.component';

describe('QualificationMilitaireComponent', () => {
  let component: QualificationMilitaireComponent;
  let fixture: ComponentFixture<QualificationMilitaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificationMilitaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualificationMilitaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
