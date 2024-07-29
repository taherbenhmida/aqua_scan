import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopArchiveComponent } from './pop-archive.component';

describe('PopArchiveComponent', () => {
  let component: PopArchiveComponent;
  let fixture: ComponentFixture<PopArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopArchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
