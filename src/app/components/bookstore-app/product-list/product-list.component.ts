import { Component, OnInit } from '@angular/core';
import { faSearch, faCog } from '@fortawesome/free-solid-svg-icons';
import { BookService } from '../../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  faSearch = faSearch
  faCog = faCog

  bookService: BookService
  produtoArray: any = []
  arrays: any = []

  livros: any = [];   //*Marcar como comentário para testes sem API

  //*Remover marcação de comentário para testes sem API
  //livros: Array<any> =
  //[{"id":"1","name":"Blood and Water","price":"150","rating":"4","category":"Terror","img":"img1","details":"Jay precisava de tantas coisas. Ele precisava que Maia estivesse bem. Ele precisava de uma cura para os dois. Ele precisava que o mundo de alguma forma come\u00e7asse a fazer sentido novamente. Acima de tudo, ele precisava de algu\u00e9m para lhe dizer por que essas coisas terr\u00edveis estavam acontecendo com ele. dele. Jay Harris, de dezessete anos, vive em uma Londres atingida por um v\u00edrus mortal. Seus pais est\u00e3o mortos, junto com metade do mundo. Quando a irm\u00e3 de Jay, Maia, adoece, ele deve encontrar uma cura antes de perd\u00ea-la tamb\u00e9m. Mas sem o conhecimento de Maia, Jay tamb\u00e9m est\u00e1 doente... e ele est\u00e1 ficando sem tempo para salvar os dois."},{"id":"2","name":"Elemental Mage","price":"60","rating":"4.5","category":"Aventura","img":"img2","details":"Em uma sociedade onde os quatro elementos da natureza - ar, terra, fogo, ar - vivem pacificamente, Ember e Wade acabam se conhecendo. A faiscante jovem (fogo) e o garoto tranquilo (\u00e1gua) est\u00e3o prestes a descobrir algo elementar: o quanto eles realmente t\u00eam em comum."},{"id":"3","name":"Escaping Demons","price":"50","rating":"3.5","category":"A\u00e7\u00e3o","img":"img3","details":"Inspirado em fatos reais... esta \u00e9 a hist\u00f3ria de 'Jack'. Jack tem um s\u00e9rio v\u00edcio em drogas e \u00e1lcool. Os cigarros s\u00e3o apenas par para o curso. Seus v\u00edcios, e a maneira ego\u00edsta com que os aceita, o levaram a perder um bom emprego atr\u00e1s de um bom emprego. Uma oportunidade de melhorar surge na ilha de St. Croix. Mas assim que Jack chega, ele est\u00e1 de volta \u00e0s corridas! Usando o dinheiro que lhe resta de seu emprego anterior, e com alguns dias ainda para fazer o check-in em seu novo emprego, Jack decide provar as mercadorias desprez\u00edveis de St. Croix. Uma longa lista de percal\u00e7os leva a outra encruzilhada em sua vida. O furac\u00e3o Hugo far\u00e1 com que ele fique parado para decidir qual caminho seguir em sua encruzilhada, um caminho que levar\u00e1 \u00e0 sobriedade pela f\u00e9 ou... \u00e0 derrota pela morte."},{"id":"4","name":"KINDERS","price":"12","rating":"3","category":"Mist\u00e9rio","img":"img4","details":"No ano de 2117, pessoas com habilidades anormais foram identificadas. Essas anomalias foram rotuladas de Kinders, uma nova subesp\u00e9cie de humanos, e tratadas como cidad\u00e3os de terceira classe. Agora, quase tr\u00eas d\u00e9cadas depois, o conflito entre Normals e Kinders fica mais forte. Resist\u00eancias Kinder est\u00e3o saindo do esconderijo para lutar contra sua opress\u00e3o, e os confrontos entre eles e o Departamento de Detec\u00e7\u00e3o de Kinder, uma ag\u00eancia global encarregada de encontrar e eliminar Kinders, est\u00e3o se tornando mais sangrentos a cada dia. Simon, um Kinder telecin\u00e9tico que vive em Moscou, R\u00fassia, viveu uma vida relativamente tranquila, dadas suas circunst\u00e2ncias. Tendo vindo de uma boa quantidade de riqueza, seus pais normais o matricularam no Programa de Prote\u00e7\u00e3o do KDD em tenra idade. Em troca de sua permiss\u00e3o para viver, seus pais pagam ao KDD uma quantia em dinheiro todos os meses. Mas com a vis\u00e3o do p\u00fablico sobre os Kinders mudando, o KDD aboliu o programa. O \u00fanico amigo de Simond, o homem encarregado de prend\u00ea-lo e execut\u00e1-lo, arrisca tudo para avis\u00e1-lo e conta sobre um lugar secreto escondido nas profundezas das montanhas de Altai; um lugar de ref\u00fagio para pessoas como ele. Com pouca escolha, Simond deixa para tr\u00e1s tudo o que j\u00e1 conheceu e viaja sozinho para o acampamento. L\u00e1, pela primeira vez, ele come\u00e7a a sentir que pertence a algum lugar. No entanto, as coisas no acampamento n\u00e3o s\u00e3o t\u00e3o perfeitas quanto parecem. Com fantasmas de seu passado o assombrando e eventos no acampamento tomando um rumo preocupante, Simond come\u00e7a a se perguntar se algum lugar ser\u00e1 realmente seguro."},{"id":"5","name":"Predators & Prey","price":"35","rating":"5","category":"Romance","img":"img5","details":"Quem \u00e9 o predador e quem \u00e9 a presa? Poesia iluminadora e obras de arte v\u00edvidas capturam as maneiras inspiradoras pelas quais as criaturas usam seus recursos para se manterem vivas.\nQuem ganha, o inseto assassino ou a aranha? O morcego ou o sapo? A formiga ou a abelha? O vaga-lume macho. . . ou a f\u00eamea? A batalha pela sobreviv\u00eancia entre predador e presa \u00e0s vezes \u00e9 uma luta, \u00e0s vezes uma dan\u00e7a, e muitas vezes envolve espionagem, mentira ou at\u00e9 mesmo dizer a verdade para seguir em frente. A bi\u00f3loga e autora de estreia Susannah Buhrman-Deever explora esses confrontos em poemas e explica\u00e7\u00f5es em prosa que oferecem os dois lados da hist\u00f3ria. Com belas e realistas ilustra\u00e7\u00f5es carregadas de drama, Bert Kitchen captura os momentos de tirar o f\u00f4lego quando o predador encontra a presa. Os leitores que desejam saber mais sobre a arte da sobreviv\u00eancia encontrar\u00e3o uma extensa lista de refer\u00eancias no final."},{"id":"6","name":"Morgana","price":"20","rating":"4.5","category":"Com\u00e9dia","img":"img6","details":"Morgana era uma garota extremamente inocente em sua adolesc\u00eancia. Ela conhecera o amor plat\u00f4nico e sempre buscara estar com algu\u00e9m, pelo menos em suas emo\u00e7\u00f5es. Ao mesmo tempo em que procurava o amor, Morgana era, tamb\u00e9m, muito sonhadora, desejava ser independente, realizada profissionalmente e amada."},{"id":"7","name":"Eye of the Fox","price":"55","rating":"4.5","category":"Com\u00e9dia","img":"img7","details":"A cada mil\u00eanio, uma era termina e outra amanhece... e quem tiver o Pergaminho das Mil Ora\u00e7\u00f5es tem o poder de chamar o grande Drag\u00e3o Kami do mar e pedir qualquer desejo. O tempo est\u00e1 pr\u00f3ximo... e as pe\u00e7as que faltam do pergaminho ser\u00e3o procuradas por toda a terra de Iwagoto. O detentor da primeira pe\u00e7a \u00e9 uma camponesa humilde e desconhecida com um segredo perigoso."},{"id":"8","name":"Paint It Black","price":"115","rating":"3","category":"Aventura","img":"img8","details":"Josie inicia uma busca para tentar entender a morte do namorado e acaba se aproximando da m\u00e3e de Michael, a pianista Meredith (Janet McTeer), que responsabiliza Josie pela tormenta que o filho vivia. As duas mulheres se colocam em um relacionamento complicado, que reflete desconfian\u00e7a e necessidade m\u00fatua."},{"id":"9","name":"Trouble in Law","price":"99","rating":"4","category":"Terror","img":"img9","details":"Liya Thakkar \u00e9 uma engenheira bioqu\u00edmica de sucesso, entusiasta de comida para viagem e felizmente solteira. No momento em que ela percebe que o \u00faltimo jantar de seus pais \u00e9 uma arma\u00e7\u00e3o com o homem com quem eles querem que ela se case, ela sai pela porta dos fundos em um piscar de olhos. Imagine sua surpresa quando o mesmo cara aparece em seu escrit\u00f3rio uma semana depois - o novo advogado contratado para salvar sua empresa em dificuldades. O que n\u00e3o \u00e9 surpreendente: ele tamb\u00e9m n\u00e3o est\u00e1 muito feliz em v\u00ea-la depois daquele fiasco humilhante."}]

  getProduct(){
    this.produtoArray = this.livros
    this.arrays = this.livros
  }

  constructor(bookService: BookService) {
    this.bookService = bookService;
  }

  ngOnInit(): void {

    //*Marcar função como comentário para testes sem API
    this.bookService.getBook().subscribe((data => {
      this.livros = data;
      this.produtoArray = this.livros
      this.arrays = this.livros
      console.log(this.livros)
    }))

    //*Remover marcação de comentário para testes sem API
    //this.getProduct()
  }

  tempArray: any = []
  novoArray: any = []
  onChange(event: any) {
    if (event.target.checked) {
      this.tempArray = this.arrays.filter((e: any) => e.category == event.target.value)
      this.produtoArray = []
      this.novoArray.push(this.tempArray)
      for (let i = 0; i < this.novoArray.length; i++) {
        var firstArray = this.novoArray[i]
        for (let i = 0; i < firstArray.length; i++) {
          var obj = firstArray[i]
          this.produtoArray.push(obj)
        }
      }

    } else {
      this.tempArray = this.produtoArray.filter((e: any) => e.category != event.target.value)
      this.novoArray = []
      this.produtoArray = []
      this.novoArray.push(this.tempArray)
      for (let i = 0; i < this.novoArray.length; i++) {
        var firstArray = this.novoArray[i]
        for (let i = 0; i < firstArray.length; i++) {
          var obj = firstArray[i]
          this.produtoArray.push(obj)
        }
      }
      if (this.produtoArray.length < 1) {
        this.produtoArray = this.livros
      }
    }
  }

  checkboxCategory: any = [
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
