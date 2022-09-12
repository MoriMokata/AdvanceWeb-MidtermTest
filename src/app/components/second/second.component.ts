import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  productForm = new FormGroup({
    ptype: new FormControl('',[Validators.required]),
    pid: new FormControl('',[Validators.required]),
    pname: new FormControl('',[Validators.required]),
    pdetail: new FormControl('',[Validators.required]),
    pquantity: new FormControl('',[Validators.required,Validators.min(1),Validators.max(50)]),
    pprice: new FormControl('',[Validators.required,Validators.min(1),Validators.max(100000)]),
  });

  productType: string[] = ['CPU','RAM','HDD','Mainboard'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  get check(){
    return this.productForm.controls;
  }

  addProduct(){
    //this.productForm.push(this.productService.products)
  }

}
