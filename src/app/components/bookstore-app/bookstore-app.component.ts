import { Component, OnInit } from '@angular/core';
import { Book } from './product-list/model/Book';
import { BookService } from './product-list/service/product-list.component.service';

@Component({
  selector: 'app-bookstore-app',
  templateUrl: './bookstore-app.component.html',
  styleUrls: ['./bookstore-app.component.css']
})
export class BookstoreAppComponent implements OnInit {

  bookService: BookService
  livros: any;
  
  filteredBooks: Book[] = [];

    _books: Book[] = [];

    _filterBy: string = '';

    constructor(bookService: BookService) {
      this.bookService = bookService;
     }
  
    ngOnInit(): void {
      this.retrieveAll()
    }

    retrieveAll(): void {
      this.livros = this.bookService.getBook().subscribe((data => {
        this.livros = data;
        console.log(this.livros)
      }))
    }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredBooks = this._books.filter((book: Book) => 
    book.name.toLocaleLowerCase()
    .indexOf(this._filterBy.toLocaleLowerCase()) > -1);
}
get filter() {
    return this._filterBy;
}

}
