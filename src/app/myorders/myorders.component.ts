import { Component, OnInit } from '@angular/core';
import { ProductlistService } from '../services/productlist.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
  orders=[];
 
  constructor(private myorders: ProductlistService) { }

  ngOnInit() {
    this.orders=this.myorders.getmyorders();
    console.log(this.orders);
  }

}
