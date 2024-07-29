import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NurseryService } from '../nursery.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-ajout-rooms',
  templateUrl: './ajout-rooms.component.html',
  styleUrls: ['./ajout-rooms.component.scss']
})
export class AjoutRoomsComponent implements OnInit {
  roomForm: FormGroup;
  rooms: MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns: string[] = ['name', 'consommation', 'actions'];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private fb: FormBuilder,
    private nurseryService: NurseryService,
    private dialogRef: MatDialogRef<AjoutRoomsComponent>,
    private snackBar: MatSnackBar
  ) {
    this.roomForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadRooms();
  }

  loadRooms() {
    this.nurseryService.getRooms().subscribe(rooms => {
      this.rooms.data = rooms;
      this.rooms.sort = this.sort;
      this.rooms.paginator = this.paginator;
    });
  }

  onSubmit() {
    if (this.roomForm.valid) {
      this.nurseryService.addRoom(this.roomForm.value).subscribe(response => {
        this.snackBar.open('Room added successfully!', 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        this.dialogRef.close(response);
        this.loadRooms(); // Refresh room list
        this.dialogRef.close({ refresh: true }); // Pass a flag to indicate data refresh
      }, error => {
        this.snackBar.open('Failed to add room. Please try again.', 'Close', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      });
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.rooms.filter = filterValue;
  }

  deleteRoom(id: number) {
    this.nurseryService.deleteRoom(id).subscribe(() => {
      this.snackBar.open('Room deleted successfully!', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      this.loadRooms(); // Refresh room list
      this.dialogRef.close({ refresh: true }); // Pass a flag to indicate data refresh
    }, error => {
      this.snackBar.open('Failed to delete room. Please try again.', 'Close', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    });
  }
}
