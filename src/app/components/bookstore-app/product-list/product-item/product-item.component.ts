import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../model/Book';
import { faCartPlus, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from 'src/app/components/shared/details-popup/details-popup.component';

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

  constructor(private dialogRef : MatDialog) { }

  openDialog() {
    this.dialogRef.open(DetailsComponent,{
      data : {
        title: this.livro.name
      }
    })
  }

  ngOnInit(): void { }

}