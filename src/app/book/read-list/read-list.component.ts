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
  formAddBook?: formGroup;
  constructor(private fb: FormBuilder, private bookService: BookService) {}
  books: IBook[] = [];
  private router: any;
  book?: IBook = {};
  read = true;
  ngOnInit(): void {
    this.getAllBook();
    this.formAddBook = this.fb.group({
      name: [''],
      read: true,
    });
  }
  getAllBook() {
    this.bookService.getAll().subscribe((res) => {
      this.books = res;
    });
  }
  addBook() {
    let data = this.formAddBook?.value;
    this.bookService.addBook(data).subscribe((res) => {
      this.router.navigate(['list']).then();
    });
  }
  changeReaded() {
    this.read = false;
  }
}
