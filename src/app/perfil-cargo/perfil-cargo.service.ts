import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CargoService {
  private apiUrl = 'http://localhost:3002/api';

  constructor(private http: HttpClient) {}

  getCargos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/campaign/all`).pipe(
      catchError(this.handleError)
    );
  }

  createCargo(cargo: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/campaign/new`, cargo).pipe(
      catchError(this.handleError)
    );
  }

  updateCargo(id: number, cargo: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/campaign/update/${id}`, cargo).pipe(
      catchError(this.handleError)
    );
  }

  deleteCargo(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/campaign/delete/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('Error en la API', error);
    return throwError(error);
  }
}
