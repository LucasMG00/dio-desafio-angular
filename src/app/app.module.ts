import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { BookstoreAppComponent } from './components/bookstore-app/bookstore-app.component';
import { ProductListComponent } from './components/bookstore-app/product-list/product-list.component';
import { ProductItemComponent } from './components/bookstore-app/product-list/product-item/product-item.component';

import { HttpClientModule } from '@angular/common/http';
import { BookService } from './components/bookstore-app/product-list/service/product-list.component.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarComponent } from './components/shared/stars/stars.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BookstoreAppComponent,
    ProductListComponent,
    ProductItemComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
