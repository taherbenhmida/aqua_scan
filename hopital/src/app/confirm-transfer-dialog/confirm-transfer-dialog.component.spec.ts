import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmTransferDialogComponent } from './confirm-transfer-dialog.component';

describe('ConfirmTransferDialogComponent', () => {
  let component: ConfirmTransferDialogComponent;
  let fixture: ComponentFixture<ConfirmTransferDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmTransferDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmTransferDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
