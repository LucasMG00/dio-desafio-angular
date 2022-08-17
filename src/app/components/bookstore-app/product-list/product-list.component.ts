import { Component, OnInit } from '@angular/core';
import { faSearch, faShoppingCart, faTimes, faCog } from '@fortawesome/free-solid-svg-icons';
import { BookService } from './service/product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  faShoppingCart = faShoppingCart
  faTimes = faTimes
  faSearch = faSearch
  faCog = faCog
  
  bookService: BookService
  livros: any = [];

  constructor(bookService: BookService) {
    this.bookService = bookService;
   }

  ngOnInit(): void {
    this.bookService.getBook().subscribe((data => {
      this.livros = data;
      this.produtoArray = this.livros
      this.arrays = this.livros
      console.log(this.livros)
    }))
  //this.getProduct()
  }

  produtoArray:any = []
  arrays:any = []
  //getProduct(){
  //  this.produtoArray = this.livros
  //  this.arrays = this.livros
  //}

  tempArray:any = []
  novoArray:any = []
  onChange(event:any){
    if(event.target.checked){
      this.tempArray = this.arrays.filter((e:any)=> e.category == event.target.value)
      this.produtoArray = []
      this.novoArray.push(this.tempArray)
      for(let i=0; i< this.novoArray.length; i++){
        var firstArray = this.novoArray[i]
        for(let i=0; i<firstArray.length; i++){
          var obj = firstArray[i]
          this.produtoArray.push(obj)
        }
      }
      
    }else{
      this.tempArray = this.produtoArray.filter((e:any)=> e.category != event.target.value)
      this.novoArray = []
      this.produtoArray = []
      this.novoArray.push(this.tempArray)
      for(let i=0; i< this.novoArray.length; i++){
        var firstArray = this.novoArray[i]
        for(let i=0; i<firstArray.length; i++){
          var obj = firstArray[i]
          this.produtoArray.push(obj)
        }
    }
    if(this.produtoArray.length < 1){
      this.produtoArray = this.livros
    }
  }
}

// Para testes sem API, marcar "livros: any;" e o código dentro de "ngOnInit" como comentários
// Desmarcar a função getProduct() para que funcione corretamente sem a API
//  livros: Array<any> =
//  [{"id":"1","name":"Blood and Water","price":"150","rating":"4","category":"Terror","img":"img1"},{"id":"2","name":"Elemental Mage","price":"60","rating":"4.5","category":"Aventura","img":"img2"},{"id":"3","name":"Escaping Demons","price":"50","rating":"3.5","category":"A\u00e7\u00e3o","img":"img3"},{"id":"4","name":"KINDERS","price":"12","rating":"3","category":"Mist\u00e9rio","img":"img4"},{"id":"5","name":"Predators & Prey","price":"35","rating":"5","category":"Romance","img":"img5"},{"id":"6","name":"Morgana","price":"20","rating":"4.5","category":"Com\u00e9dia","img":"img6"},{"id":"7","name":"Eye of the Fox","price":"55","rating":"4.5","category":"Com\u00e9dia","img":"img7"},{"id":"8","name":"Paint It Black","price":"115","rating":"3","category":"Aventura","img":"img8"},{"id":"9","name":"Trouble in Law","price":"99","rating":"4","category":"Terror","img":"img9"}]


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
