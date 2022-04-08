import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormmilitaireComponent } from './formmilitaire.component';

describe('FormmilitaireComponent', () => {
  let component: FormmilitaireComponent;
  let fixture: ComponentFixture<FormmilitaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormmilitaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormmilitaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
