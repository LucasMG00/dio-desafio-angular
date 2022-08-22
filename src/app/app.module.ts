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
import { StarComponent } from './components/shared/stars/stars.component';
import { DetailsComponent } from './components/shared/popup/details-popup/details-popup.component';

import { HttpClientModule } from '@angular/common/http';
import { BookService } from './services/product.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShopListComponent } from './components/bookstore-app/shop-list/shop-list.component';
import { ShopItemComponent } from './components/bookstore-app/shop-list/shop-item/shop-item.component';
import { ToastsComponent } from './components/shared/toasts/toasts.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BookstoreAppComponent,
    ProductListComponent,
    ProductItemComponent,
    StarComponent,
    DetailsComponent,
    ShopListComponent,
    ShopItemComponent,
    ToastsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
