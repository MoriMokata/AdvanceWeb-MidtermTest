import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ProductService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
