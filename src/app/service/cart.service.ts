import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  
  apiUrl: string = `http://localhost:3000/cart`;
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.apiUrl);
  }

  get(id:number): Observable<Cart> {
    return this.http.get<Cart>(`${this.apiUrl}/${id}`);
  }

  create(cart:Cart): Observable<Cart> {
    return this.http.post<Cart>(this.apiUrl, cart);
  }

  update(cart:Cart): Observable<Cart> {
    return this.http.patch<Cart>(`${this.apiUrl}/${cart.id}`, cart);
  }

  delete(id: number): Observable<Cart> {
    return this.http.delete<Cart>(`${this.apiUrl}/${id}`);
  }
}