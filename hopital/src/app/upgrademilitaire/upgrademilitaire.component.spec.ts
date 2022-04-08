import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgrademilitaireComponent } from './upgrademilitaire.component';

describe('UpgrademilitaireComponent', () => {
  let component: UpgrademilitaireComponent;
  let fixture: ComponentFixture<UpgrademilitaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgrademilitaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgrademilitaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
