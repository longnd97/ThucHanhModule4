import { IBook } from './../ibook';
import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-read-list',
  templateUrl: './read-list.component.html',
  styleUrls: ['./read-list.component.css'],
})
export class ReadListComponent implements OnInit {
  books: IBook[] = [];
  bookName?: string;
  constructor(private bookService: BookService) {}
  ngOnInit(): void {
    this.getAllBook();
  }
  getAllBook() {
    this.bookService.getAll().subscribe((res) => {
      this.books = res;
    });
  }
  changeReaded(id: any) {
    let book = this.books[id];
    book.read = true;
    this.bookService.updateBook(book).subscribe((res) => {
      res = book;
    });
  }

  addBook() {
    let book = {
      name: this.bookName,
      read: false,
    };

    this.bookService.addBook(book).subscribe((res) => {
      this.books.push(res);
    });
  }
}
