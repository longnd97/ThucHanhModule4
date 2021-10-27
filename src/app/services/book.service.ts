import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../book/ibook';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: IBook[] = [];
  constructor(private http: HttpClient) {}
  getAll(): Observable<any> {
    return this.http.get('http://127.0.0.1:8081/books');
  }

  addBook(data: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8081/books', data);
  }
}
