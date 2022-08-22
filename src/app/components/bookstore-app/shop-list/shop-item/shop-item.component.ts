import { Component, Input, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ShopListComponent } from '../shop-list.component';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {

  faTimes = faTimes
  
  @Input()
  shopItem: any

  constructor(private shopList : ShopListComponent) { }

  ngOnInit(): void {
  }
}
