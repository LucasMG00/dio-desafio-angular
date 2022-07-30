import { Component, OnInit } from '@angular/core';
import { BookService } from './service/product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  bookService: BookService
  livros: any;

  constructor(bookService: BookService) {
    this.bookService = bookService;
   }

  ngOnInit(): void {
    this.bookService.getBook().subscribe((data => {
      this.livros = data;
      console.log(this.livros)
    }))
  }

}
