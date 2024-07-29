import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterloginTerminalComponent } from './afterlogin-terminal.component';

describe('AfterloginTerminalComponent', () => {
  let component: AfterloginTerminalComponent;
  let fixture: ComponentFixture<AfterloginTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterloginTerminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterloginTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
