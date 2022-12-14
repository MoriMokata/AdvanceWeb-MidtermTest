import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor(
      private productsService: ProductService,
      private cartService: CartService
  ) {
    
  }

  getAllProduct(){
    return this.productsService.getAllProduct();
  } 

  addToCart(p_id: number){
    this.cartService.add(p_id);
  }

  ngOnInit(): void {
  }

}
