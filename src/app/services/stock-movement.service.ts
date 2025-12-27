import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { StockMovement, CreateStockMovementDTO } from '../models/stock-movement.model';

@Injectable({
  providedIn: 'root'
})
export class StockMovementService {
  private apiUrl = `${environment.apiUrl}/stock-movements`;

  constructor(private http: HttpClient) {}

  getAll(productId?: string): Observable<StockMovement[]> {
    let params = new HttpParams();
    if (productId) params = params.set('productId', productId);
    
    return this.http.get<StockMovement[]>(this.apiUrl, { params });
  }

  create(movement: CreateStockMovementDTO): Observable<StockMovement> {
    return this.http.post<StockMovement>(this.apiUrl, movement);
  }
}
