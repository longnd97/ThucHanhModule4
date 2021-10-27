import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { IBook } from '../ibook';

@Component({
  selector: 'app-readed-list',
  templateUrl: './readed-list.component.html',
  styleUrls: ['./readed-list.component.css'],
})
export class ReadedListComponent implements OnInit {
  constructor(private bookService: BookService) {}
  books: IBook[] = [];
  book?: IBook;
  ngOnInit(): void {
    this.getAllBook();
  }
  getAllBook() {
    this.bookService.getAll().subscribe((res) => {
      this.books = res;
    });
  }
  changeRead(id: any) {
    let book = this.books[id];
    this.bookService.updateBook(book).subscribe((res) => {
      book.read = false;
    });
  }
}
