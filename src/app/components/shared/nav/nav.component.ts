import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  faShoppingCart = faShoppingCart
  faTimes = faTimes

  constructor() { }

  ngOnInit(): void {
  }

  checkboxCategory:any = [
    {
      id: 1,
      type: "checkbox",
      category: "Ação"
    },
    {
      id: 2,
      type: "checkbox",
      category: "Aventura"
    },
    {
      id: 3,
      type: "checkbox",
      category: "Terror"
    },
    {
      id: 4,
      type: "checkbox",
      category: "Romance"
    },
    {
      id: 5,
      type: "checkbox",
      category: "Comédia"
    },
    {
      id: 6,
      type: "checkbox",
      category: "Mistério"
    }
  ]

}
