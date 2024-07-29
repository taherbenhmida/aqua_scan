import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import { DatePipe } from '@angular/common';
import { RoomService } from '../room.service';
import { ConfirmTransferDialogComponent } from '../confirm-transfer-dialog/confirm-transfer-dialog.component';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export interface UserData {
  Dispatched_Room: number;
  Dispatched_Tank: number; 
  Received_Room: number;
  Received_Tank: number;
  NB_Fish: number;
  Date: String;
}

@Component({
  selector: 'app-rendement',
  templateUrl: './rendement.component.html',
  styleUrls: ['./rendement.component.scss'],
})
export class RendementComponent implements AfterViewInit, OnInit {

  tanksByRoom: any[] = [];
  tankFromId!: number;
  tankToId!: number;
  numberOfFish!: number;
  averageWeight!: number ;

  transfers: any[] = [];
  displayedColumns: string[] = ['dispatchRoom', 'dispatchTank', 'receiveRoom', 'receiveTank', 'numberOfFish', 'averageWeight', 'dateOfTransfer'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  

  constructor(private dialog : MatDialog,private _liveAnnouncer: LiveAnnouncer,
              private datePipe: DatePipe,
              private roomService: RoomService) { }
  ngOnInit(): void {
    this.getTanksByRoom();
    this.getTransfers();
  }
  ngAfterViewInit() {  
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    console.log('MatSort and MatPaginator set:', this.sort, this.paginator);
  }

  getTanksByRoom(): void {
    this.roomService.getTanksByRoom().subscribe(data => {
      this.tanksByRoom = data;
    },
    (error) => {
      console.error('Error fetching tanks by room:', error);
      // Handle error as needed (e.g., show error message)
    }
  );
  }

  transferFish(): void {
    if (this.tankFromId && this.tankToId && this.numberOfFish && this.numberOfFish > 0 && this.averageWeight && this.averageWeight > 0) {
      this.roomService.transferFish(this.tankFromId, this.tankToId, this.numberOfFish, this.averageWeight).subscribe(
        () => {
          console.log('Fish transferred successfully!');
          this.getTanksByRoom(); // Refresh tanks after successful transfer
        },
        error => {
          console.error('Error transferring fish:', error);
        }
      );
    } else {
      console.warn('Please select tanks and enter valid values for the number of fish and average weight.');
    }
  }

  

  openConfirmDialog(): void {
    const dialogRef = this.dialog.open(ConfirmTransferDialogComponent, {
      width: '20%',
      data: { tankFromId: this.tankFromId,
              tankToId: this.tankToId,
              numberOfFish: this.numberOfFish,
              averageWeight: this.averageWeight }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        //this.transferFish();
        this.getTanksByRoom();
        this.getTransfers();
        console.log('Confirmed transfer');
      }else {
        console.log('Cancelled transfer');
        // Handle cancellation logic here if needed
      }
    });
  }

  getTransfers(): void {
    this.roomService.getTransfers().subscribe(
      data => {
        this.dataSource.data = data;
        console.log('DataSource Data:', this.dataSource.data); // Log dataSource data here
        // Manually trigger sort and pagination after data is set
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;  
      },
      error => {
        console.error('Error fetching transfers:', error);
      }
    );
  }
  
 
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const dispatchedRoom = data.tank_from.room?.name.toLowerCase() || 'N/A';
      const dispatchedTank = data.tank_from.name.toLowerCase();
      const receivedRoom = data.tank_to.room?.name.toLowerCase() || 'N/A';
      const receivedTank = data.tank_to.name.toLowerCase();
      const numberOfFish = data.number_of_fish.toString();
      const averageWeight = data.average_weight.toString();
      const dateOfTransfer = this.datePipe.transform(data.date_of_transfer, 'short')?.toLowerCase() || '';
  
      return (
        dispatchedRoom.includes(filter) ||
        dispatchedTank.includes(filter) ||
        receivedRoom.includes(filter) ||
        receivedTank.includes(filter) ||
        numberOfFish.includes(filter) ||
        averageWeight.includes(filter) ||
        dateOfTransfer.includes(filter)
      );
    };
  
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage(); // Reset paginator on filter change
    }
  }
  
  printTransferList(): void {
    const doc = new jsPDF();
    // Add the logo to the PDF
    const logoUrl = '../../assets/images/imageedit_2_9474531117.png';  // Replace with the path to your logo image
    const logoWidth = 20;  // Width of the logo in mm
    const logoHeight = 20;  // Height of the logo in mm

    // Add the logo to the PDF
    const logo2_Url = '../../assets/images/imageedit_2_9474531117_copy.png';  // Replace with the path to your logo image
    const logo2_Width = 20;  // Width of the logo in mm
    const logo2_Height = 20;  // Height of the logo in mm

    // Add the logo image to the top left corner
    doc.addImage(logoUrl, 'PNG', 50, 10, logoWidth, logoHeight); // Adjust x, y, width, height as needed
    // Add the logo 2 image to the top left corner
    doc.addImage(logo2_Url, 'PNG', 140, 10, logo2_Width, logo2_Height); // Adjust x, y, width, height as needed
     
    // Set font size and style for the title
    doc.setFontSize(22);  // Adjust the font size as needed
    doc.setFont('times', 'bold');  // Set font style and weight (times, bold in this case)

    // Center the title horizontally
    const title = 'Fish Transfer List';
    const pageWidth = doc.internal.pageSize.getWidth();
    const textWidth = doc.getTextWidth(title);
    const x = (pageWidth - textWidth) / 2;

    doc.text(title, x, 20);  // x is calculated to center the text
 
     // Add the table
    const columns = [
      { header: 'Dispatched Room', dataKey: 'dispatchRoom' },
      { header: 'Dispatched Tank', dataKey: 'dispatchTank' },
      { header: 'Received Room', dataKey: 'receiveRoom' },
      { header: 'Received Tank', dataKey: 'receiveTank' },
      { header: 'Number of Fish', dataKey: 'numberOfFish' },
      { header: 'Average Weight', dataKey: 'averageWeight' },
      { header: 'Date of Transfer', dataKey: 'dateOfTransfer' },
    ];
    const rows = this.dataSource.data.map((transfer: any) => ({
      dispatchRoom: transfer.tank_from.room?.name || 'N/A',
      dispatchTank: transfer.tank_from.name, 
      receiveRoom: transfer.tank_to.room?.name || 'N/A',
      receiveTank: transfer.tank_to.name,
      numberOfFish: transfer.number_of_fish,
      averageWeight: transfer.average_weight,
      dateOfTransfer: this.datePipe.transform(transfer.date_of_transfer, 'short'),
    }));

    (doc as any).autoTable({
      head: [columns.map(col => col.header)],
      body: rows.map(row => columns.map(col => row[col.dataKey])),
      startY: 30, // Make sure the table starts below the title
    });

    doc.save('transfer-list.pdf');
  }
 
    
}
 
  
  



