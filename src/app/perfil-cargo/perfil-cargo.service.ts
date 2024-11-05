import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PerfilCargo } from './perfil-cargo.model';

@Injectable({
  providedIn: 'root'
})
export class PerfilCargoService {
  private apiUrl = `${environment.apiUrl}/perfil-cargo/perfil`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<PerfilCargo[]> {
    return this.http.get<PerfilCargo[]>(`${this.apiUrl}/all`);
  }

  getById(id: number): Observable<PerfilCargo> {
    return this.http.get<PerfilCargo>(`${this.apiUrl}/${id}`);
  }

  create(perfilCargo: PerfilCargo): Observable<PerfilCargo> {
    return this.http.post<PerfilCargo>(`${this.apiUrl}/new`, perfilCargo);
  }

  update(id: number, perfilCargo: PerfilCargo): Observable<PerfilCargo> {
    return this.http.put<PerfilCargo>(`${this.apiUrl}/update/${id}`, perfilCargo);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}
