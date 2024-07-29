import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarTerminalComponent } from './toolbar-terminal.component';

describe('ToolbarTerminalComponent', () => {
  let component: ToolbarTerminalComponent;
  let fixture: ComponentFixture<ToolbarTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarTerminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
