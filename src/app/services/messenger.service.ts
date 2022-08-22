import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject<Book>()

  constructor() { }

  sendMsg(product: any){
    this.subject.next(product)
  }

  getMsg() {
    return this.subject.asObservable()
  }

}
