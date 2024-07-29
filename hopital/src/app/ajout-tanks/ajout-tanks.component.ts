import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NurseryService } from '../nursery.service';  
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-ajout-tanks',
  templateUrl: './ajout-tanks.component.html',
  styleUrls: ['./ajout-tanks.component.scss']
})
export class AjoutTanksComponent implements OnInit { 
  tankForm: FormGroup;
  rooms: any[] = [];
  tanks = new MatTableDataSource<any>();
  displayedColumns: string[] = ['name', 'room', 'type', 'number_of_fish', 'capacity', 'biomass', 'average_weight', 'actions'];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private fb: FormBuilder,
    private nurseryService: NurseryService,
    private dialogRef: MatDialogRef<AjoutTanksComponent>,
    private snackBar: MatSnackBar
  ) {
    this.tankForm = this.fb.group({
      name: ['', Validators.required],
      room: ['', Validators.required],
      type: ['', Validators.required],
      number_of_fish: ['', [Validators.required, Validators.min(0)]],
      capacity: ['', [Validators.required, Validators.min(0)]],
      biomass: ['', [Validators.required, Validators.min(0)]],
      average_weight: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    this.loadRooms();
    this.loadTanks();
  }

  loadRooms() {
    this.nurseryService.getRooms().subscribe(rooms => {
      this.rooms = rooms;
    });
  }

  loadTanks() {
    this.nurseryService.getTanksFish().subscribe(response => {
      const tanks = response.tanks;  // Extract the tanks array
      console.log(tanks);  // Log data to verify format
      this.tanks.data = tanks;
      this.tanks.sort = this.sort;
      this.tanks.paginator = this.paginator;
    });
  }
  
  

  onSubmit() {
    if (this.tankForm.valid) {
      this.nurseryService.addTank(this.tankForm.value).subscribe(response => {
        this.snackBar.open('Tank added successfully!', 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        this.dialogRef.close(response);
        this.loadTanks(); // Refresh tank list
        this.dialogRef.close({ refresh: true }); // Pass a flag to indicate data refresh
      }, error => {
        this.snackBar.open('Failed to add tank. Please try again.', 'Close', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      });
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.tanks.filter = filterValue;
  }

  deleteTank(id: number) {
    this.nurseryService.deleteTank(id).subscribe(() => {
      this.snackBar.open('Tank deleted successfully!', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      this.loadTanks(); // Refresh tank list
      this.dialogRef.close({ refresh: true }); // Pass a flag to indicate data refresh
    }, error => {
      this.snackBar.open('Failed to delete tank. Please try again.', 'Close', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    });
  }
}
