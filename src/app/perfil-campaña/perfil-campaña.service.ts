import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PerfilCampanaService {
  private apiUrl = 'http://localhost:3002/api';

  constructor(private http: HttpClient) {}

  getPerfilCampanas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/campaign/all`).pipe(
      catchError(this.handleError)
    );
  }

  createPerfilCampana(campana: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/campaign/new`, campana).pipe(
      catchError(this.handleError)
    );
  }

  updatePerfilCampana(id: number, campana: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/campaign/update/${id}`, campana).pipe(
      catchError(this.handleError)
    );
  }

  deletePerfilCampana(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/campaign/delete/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('Error en la API', error);
    return throwError(error);
  }
}
