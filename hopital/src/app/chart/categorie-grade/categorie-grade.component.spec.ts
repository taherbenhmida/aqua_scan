import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieGradeComponent } from './categorie-grade.component';

describe('CategorieGradeComponent', () => {
  let component: CategorieGradeComponent;
  let fixture: ComponentFixture<CategorieGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
