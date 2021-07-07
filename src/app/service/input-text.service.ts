import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InputText } from '../model/input-text';

@Injectable({
  providedIn: 'root'
})
export class InputTextService {

  apiUrl: string = `http://localhost:3000/inputText`;
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<InputText[]> {
    return this.http.get<InputText[]>(this.apiUrl);
  }

  create(inputText:InputText): Observable<InputText> {
    return this.http.post<InputText>(this.apiUrl, inputText);
  }

  update(inputText:InputText): Observable<InputText> {
    return this.http.patch<InputText>(`${this.apiUrl}/${inputText.id}`, inputText);
  }

  delete(id: number): Observable<InputText> {
    return this.http.delete<InputText>(`${this.apiUrl}/${id}`);
  }
}