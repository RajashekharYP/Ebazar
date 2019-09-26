import { Component, OnInit } from '@angular/core';
import { ProductlistService } from '../services/productlist.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
    item;
  constructor(private productservice : ProductlistService) { }

  ngOnInit() {
    this.item= this.productservice.getProductToView();
  }
  addcart(value) {
    // console.log(value);
     this.productservice.addcart(value);
   }
}
