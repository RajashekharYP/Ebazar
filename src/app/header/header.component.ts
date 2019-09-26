import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductlistService } from '../services/productlist.service';
import { CartComponent } from '../cart/cart.component';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
      isLoggedIn : boolean = false;
      title: String = 'E`BAZAR';
      SearchValue: String;
      searchListArray = [];
       searchForm: FormGroup;
       qtyCartMapping = new Map(); 
constructor(private productService: ProductlistService, private authservice : AuthenticationService) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      search : new FormControl('')
    });
    this.subscribeCart();
    this.subscribeLoggedUser()
  }
  searchItem(){
    this.productService.SearchedProductList(this.searchForm.value.search);
  }
  subscribeCart(){
    this.productService.productcartSubject.subscribe(c => this.qtyCartMapping = c);
  }

  subscribeLoggedUser(){
      this.authservice.isLoggedInSubject.subscribe(status =>
         this.isLoggedIn = status)
      
  }
  logOut(){
    this.authservice.logOut();
  }

 }
