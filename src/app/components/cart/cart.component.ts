import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    private productService:ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  getAllProduct(){
    return this.productService.getAllProduct();
  } 
  getSumPrice(){
    return this.cartService.getsumPrice();
  }
}
