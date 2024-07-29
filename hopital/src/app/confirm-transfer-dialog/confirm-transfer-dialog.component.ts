// confirm-transfer-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RoomService } from '../room.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-confirm-transfer-dialog',
  templateUrl: './confirm-transfer-dialog.component.html',
  styleUrls: ['./confirm-transfer-dialog.component.scss']
})
export class ConfirmTransferDialogComponent {
  errorMessage!: string;

  constructor(
    public dialogRef: MatDialogRef<ConfirmTransferDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private roomService: RoomService
  ) {}

  onConfirm(): void {
    if (this.data.tankFromId === this.data.tankToId) {
      this.errorMessage = 'Source and destination tanks cannot be the same.';
      return; // Exit the method without proceeding
    }

    // Fetch tank types and verify
    this.roomService.getTankType(this.data.tankFromId).subscribe(
      tankFromType => {
        this.roomService.getTankType(this.data.tankToId).subscribe(
          tankToType => {
            // Check if tank types match
            if (tankFromType !== tankToType) {
              this.errorMessage = 'Source and destination tanks must have the same type.';
              return; // Exit the method without proceeding
            }

            // Proceed with fish transfer
            this.roomService.transferFish(this.data.tankFromId, this.data.tankToId, this.data.numberOfFish, this.data.averageWeight)
              .pipe(
                catchError(error => {
                  console.error('Error transferring fish:', error);
                  this.errorMessage = this.getErrorMessage(error);
                  return of(null); // Return observable to prevent error propagation
                })
              )
              .subscribe(result => {
                if (result) {
                  console.log('Fish transferred successfully!');
                  this.roomService.showSuccessSnackbar('Fish transferred successfully!');
                  this.dialogRef.close(true);
                }
              });
          },
          error => {
            console.error('Error fetching destination tank type:', error);
            this.errorMessage = 'Error fetching destination tank type.';
          }
        );
      },
      error => {
        console.error('Error fetching source tank type:', error);
        this.errorMessage = 'Error fetching source tank type.';
      }
    );
  }

  private getErrorMessage(error: any): string {
    if (error && error.error) {
      const errorResponse = error.error;
      if (errorResponse.error) {
        return errorResponse.error;
      } else if (errorResponse.message) {
        return errorResponse.message;
      }
    }
    return 'An unknown error occurred.';
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
