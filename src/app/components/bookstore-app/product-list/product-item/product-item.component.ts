import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../model/Book';
import { faCartPlus, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { BookstoreAppComponent } from '../../bookstore-app.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

faCartPlus = faCartPlus
faInfoCircle = faInfoCircle


  @Input()
  livro!: Book;

  constructor(public bookStoreComp: BookstoreAppComponent) { }

  ngOnInit(): void {
  }

}
