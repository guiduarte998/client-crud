import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiURL = "http://localhost:3000/clients";
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public http: HttpClient) { }

  getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiURL);
  }

  getById(id: string): Observable<Client> {
    return this.http.get<Client>(`${this.apiURL}/${id}`);
  }

  create(data: any): Observable<Client> {
    return this.http.post(this.apiURL, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.apiURL}/${id}`, JSON.stringify(data))
  }
}
