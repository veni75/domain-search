import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Domain } from '../model/domain';

@Injectable({
  providedIn: 'root'
})
export class DomainService {

  //apiUrl: string = `http://localhost:3000/domain`;
  apiUrl: string = `https://sys.wwh.server.komjit.eu/check-availability?requested_domain=kiskutya&tld=hu&fbclid=IwAR0lweyK46F_sdPhNm47bPhMf8aEiFVA3BzYHBCP9gW28J4aQ04aqnXH7Jc`;
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Domain[]> {
    return this.http.get<Domain[]>(this.apiUrl);
  }

  get(id:number): Observable<Domain> {
    return this.http.get<Domain>(`${this.apiUrl}/${id}`);
  }

  create(domain:Domain): Observable<Domain> {
    return this.http.post<Domain>(this.apiUrl, domain);
  }

  update(domain:Domain): Observable<Domain> {
    return this.http.patch<Domain>(`${this.apiUrl}/${domain.id}`, domain);
  }

  delete(id: number): Observable<Domain> {
    return this.http.delete<Domain>(`${this.apiUrl}/${id}`);
  }
}