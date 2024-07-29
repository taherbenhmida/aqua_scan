import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlotService {
  private plotUrl = 'http://127.0.0.1:8000/plot/';  
  
  constructor(private http: HttpClient) {}

  getPlot(): Observable<Blob> {
    return this.http.get(this.plotUrl, { responseType: 'blob' });
  }
}
