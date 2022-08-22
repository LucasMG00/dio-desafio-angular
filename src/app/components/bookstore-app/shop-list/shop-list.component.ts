import { Component, Injectable, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Book } from 'src/app/models/Book';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class ShopListComponent implements OnInit {

  faShoppingCart = faShoppingCart

  shopItems: Array<any> = []

  shopTotal = 0

  constructor(public msg: MessengerService) { }

  ngOnInit() {
    this.msg.getMsg().subscribe((item: Book) => {
      this.addShopItem(item)
    })
  }

  addShopItem(item : Book){

    let itemExists: boolean = false

    for(let i in this.shopItems){
      if(this.shopItems[i].itemId === item.id){
        this.shopItems[i].qty++
        itemExists = true
        break;
      }
    }

    if(!itemExists){
      this.shopItems.push({
        itemId: item.id,
        itemName: item.name,
        itemPrice: item.price,
        itemImg: item.img,
        qty: 1
      })
    }
    
    this.shopTotal = 0
    this.shopItems.forEach(item => {
      this.shopTotal += item.qty * item.itemPrice
    })
  }

  removeAll() {
    this.shopItems.length = 0
  }
}
