import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Sale, CreateSaleDTO } from '../models/sale.model';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  private apiUrl = `${environment.apiUrl}/sales`;

  constructor(private http: HttpClient) {}

  getAll(sessionId?: string): Observable<Sale[]> {
    let params = new HttpParams();
    if (sessionId) params = params.set('sessionId', sessionId);
    
    return this.http.get<Sale[]>(this.apiUrl, { params });
  }

  getById(id: string): Observable<Sale> {
    return this.http.get<Sale>(`${this.apiUrl}/${id}`);
  }

  create(sale: CreateSaleDTO): Observable<Sale> {
    return this.http.post<Sale>(this.apiUrl, sale);
  }
}
