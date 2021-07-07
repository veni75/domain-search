import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tld } from '../model/tld';

@Injectable({
  providedIn: 'root'
})
export class TldService {

  apiUrl: string = `http://localhost:3000/TLD`;
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Tld[]> {
    return this.http.get<Tld[]>(this.apiUrl);
  }

  get(id: number): Observable<Tld> {
    return this.http.get<Tld>(`${this.apiUrl}/${id}`);
  }

  create(tld:Tld): Observable<Tld> {
    return this.http.post<Tld>(this.apiUrl, tld);
  }

  update(tld:Tld): Observable<Tld> {
    return this.http.patch<Tld>(`${this.apiUrl}/${tld.id}`, tld);
  }

  delete(id: number): Observable<Tld> {
    return this.http.delete<Tld>(`${this.apiUrl}/${id}`);
  }
}