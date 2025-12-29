import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product, CreateProductDTO, UpdateProductDTO } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) {}

  getAll(filters?: {
    search?: string;
    category?: string;
    lowStock?: boolean;
  }): Observable<Product[]> {
    let params = new HttpParams();
    if (filters?.search) params = params.set('busca', filters.search);
    if (filters?.category) params = params.set('categoria', filters.category);
    if (filters?.lowStock) params = params.set('estoqueBaixo', 'true');

    console.log(`Chamando api com URL: ${this.apiUrl} e parâmetros: ${params.toString()}`);

    return this.http.get<Product[]>(this.apiUrl, { params });
  }

  getById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  create(product: CreateProductDTO): Observable<Product> {
    console.log('Criando produto:', product);
    return this.http.post<Product>(this.apiUrl, product);
  }

  update(id: string, product: UpdateProductDTO): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
