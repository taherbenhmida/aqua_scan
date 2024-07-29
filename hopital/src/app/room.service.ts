import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';  // Import map operator from RxJS


@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl = 'http://localhost:8000/api'; // No trailing slash

  constructor(private http: HttpClient,  private snackBar: MatSnackBar) {}

  getTanksByRoom(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/tanks_by_room/`);
  }

  // Method to transfer fish between tanks
  transferFish(tankFromId: number, tankToId: number, numberOfFish: number, averageWeight: number): Observable<any> {
    const transferData = {
      tankFromId: tankFromId,
      tankToId: tankToId,
      numberOfFish: numberOfFish,
      averageWeight: averageWeight
    };
    return this.http.post<any>(`${this.apiUrl}/transferFish/`, transferData);
  }

  // Method to fetch tank type by ID
  getTankType(tankId: number): Observable<string> {
    return this.http.get<any>(`${this.apiUrl}/tank/${tankId}`).pipe(
      map(response => response.type)
    );
  }

  // Method to show success snackbar
  showSuccessSnackbar(message: string): void {
    this.snackBar.open(message, 'OK', {
      duration: 3000,  // Snackbar duration in milliseconds
      horizontalPosition: 'center',  // Position horizontally center
      verticalPosition: 'top'  // Position vertically at the top
    });
  }

  //fetching transfers
  getTransfers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/get_transfers/`);
  }
  
  
}
