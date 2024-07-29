import { Component, OnInit, ViewChild, ViewEncapsulation  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NurseryService } from '../nursery.service';


@Component({
  selector: 'app-fish-managment',
  templateUrl: './fish-managment.component.html',
  styleUrls: ['./fish-managment.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class FishManagmentComponent implements OnInit {
  displayedColumns: string[] = ['name', 'room_name', 'type', 'number_of_fish'];
  dataSource!: MatTableDataSource<any>;
  seabassCount: number = 0;
  seabreamCount: number = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private nurseryService: NurseryService) {
    this.dataSource = new MatTableDataSource<any>([]);  // Initialize dataSource here
  }

  ngOnInit() {
    this.loadTanksFish();
  }
  loadTanksFish() {
    this.nurseryService.getTanksFish().subscribe(data => {
      this.dataSource.data = data.tanks;
      this.seabassCount = data.seabass_count;
      this.seabreamCount = data.seabream_count;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
