import { Component, OnInit } from '@angular/core';
import { ProductlistService } from '../services/productlist.service';
import { product } from '../products';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  products: product[];

  constructor(private productService: ProductlistService) { }

  ngOnInit() {
    this.getproductlist();
  }
  getproductlist(): void {
    this.productService.productSubject.subscribe((p: product[]) => this.products = p);
    this.productService.getproductlist();
  }

  addcart(value) {
   // console.log(value);
    this.productService.addcart(value);
  }
  removeItem(data) {
    this.productService.removeItem(data);
  }
  viewProduct(data){
    //console.log("data");
    //console.log(data);
    this.productService.setviewProduct(data);
  }
}
