import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NurseryService {
  private statisticsUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getNurseryStatistics(): Observable<any> {
    return this.http.get<any[]>(`${this.statisticsUrl}/nursery-statistics/`);
  }
  getTanksFish(): Observable<any> {
    return this.http.get<any[]>(`${this.statisticsUrl}/tanks-fish/`);
  }
  getRooms(): Observable<any> {
    return this.http.get<any[]>(`${this.statisticsUrl}/get_rooms/`);
  }
  addTank(tank: any): Observable<any> {
    return this.http.post<any>(`${this.statisticsUrl}/add_tanks/`, tank);
  }
  deleteTank(id: number): Observable<any> {
    return this.http.delete<any>(`${this.statisticsUrl}/tanks/${id}/`);
  }
  addRoom(room: any): Observable<any> {
    return this.http.post<any>(`${this.statisticsUrl}/add_room/`, room);
  }
  deleteRoom(id: number): Observable<any> {
    return this.http.delete<any>(`${this.statisticsUrl}/delete_room/${id}/`);
  }
  getRoomsDetails(): Observable<any> {
    return this.http.get<any[]>(`${this.statisticsUrl}/rooms/`);
  }
}
