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

  addBook(book: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8081/books', book);
  }

  updateBook(book: any): Observable<IBook> {
    return this.http.put<IBook>('http://127.0.0.1:8081/books', book);
  }
}
