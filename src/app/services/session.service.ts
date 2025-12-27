import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PubSession, OpenSessionDTO, CloseSessionDTO, SessionReport } from '../models/session.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private apiUrl = `${environment.apiUrl}/sessions`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<PubSession[]> {
    return this.http.get<PubSession[]>(this.apiUrl);
  }

  getById(id: string): Observable<PubSession> {
    return this.http.get<PubSession>(`${this.apiUrl}/${id}`);
  }

  getActive(): Observable<PubSession> {
    return this.http.get<PubSession>(`${this.apiUrl}/active`);
  }

  open(session: OpenSessionDTO): Observable<PubSession> {
    return this.http.post<PubSession>(this.apiUrl, session);
  }

  close(id: string, closeData: CloseSessionDTO): Observable<PubSession> {
    return this.http.put<PubSession>(`${this.apiUrl}/${id}/close`, closeData);
  }

  getReport(sessionId: string): Observable<SessionReport> {
    return this.http.get<SessionReport>(`${environment.apiUrl}/reports/session/${sessionId}`);
  }

  getReportPDF(sessionId: string): Observable<Blob> {
    return this.http.get(`${environment.apiUrl}/reports/pdf/session/${sessionId}`, {
      responseType: 'blob'
    });
  }
}
