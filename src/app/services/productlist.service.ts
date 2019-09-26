import { Injectable } from '@angular/core';
import { Observable, of, Subject, } from 'rxjs';
import { productlist } from '../mock-products';
import { product } from '../products';
import { order } from '../orders';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {
  constructor() { }
  productSubject = new Subject<product[]>();
  productcartSubject = new Subject<Map<product,number>>();
  myordersSubject = new Subject<order[] >();
  // filterData: product[];
   productToView: product
  orders : order[]=[];
  qtyCartMapping = new Map();

  getproductlist() {

    this.productSubject.next(productlist);
  }

  SearchedProductList(SearchValue) {
    let filteredData = [];
    filteredData = productlist.filter(data => data.name.toLowerCase( ) === SearchValue.toLowerCase( ));
    this.productSubject.next(filteredData);
  }

  categoryChanges(value) {
    let tempList = [];
    tempList = productlist.filter(p => p.price <= value.minValue);
    
    if(value.checkbox1 == false && value.checkbox2 == false && value.checkbox3 == false && value.checkbox4 == false ){
      tempList = tempList;
    }
    if( value.checkbox1 !== false) {
      tempList = tempList.filter(p => p.rating >= '1')
    }
    else if( value.checkbox2 !== false ) {
      tempList = tempList.filter(p => p.rating >= '2')
    }
    else if( value.checkbox3 !== false ) {
      tempList = tempList.filter(p => p.rating >= '3')
    }
    else if( value.checkbox4 !== false ) {
      tempList = tempList.filter(p => p.rating >= '4')
    }
   if (value.categorySearch !== '') {
      tempList = tempList.filter(p => p.category === value.categorySearch);
    }
    if (value.categorySearch !== '') {
      tempList = tempList.filter(p => p.category === value.categorySearch);
    }
   
    this.productSubject.next(tempList);
  }

  addcart(value: any) {
    this.qtyCartMapping.set(value,1);
    // console.log("in service"+value);
    //this.cart.push(value);
    // console.log(this.cart);
    this.productcartSubject.next(this.qtyCartMapping);
  }

  getCart() {
    this.productcartSubject.next(this.qtyCartMapping);
    return this.qtyCartMapping;
  }

  removeItem(data) {
    this.qtyCartMapping.delete(data);
    // this.cart = this.cart.filter(d => d !== data);
   this.productcartSubject.next(this.qtyCartMapping);
  }

  calTotal(qty: number, data: object){
    this.qtyCartMapping.set(data,qty);
    //console.log("calTotal");
    this.productcartSubject.next(this.qtyCartMapping);    
  }
  checkout(data ){
     //let value = data;
    // let dateFormat = require('dateformat');
    // let curentDate = new Date();
    // // dateFormat(curentDate, "dddd, mmmm dS, yyyy, h:MM:ss TT"); // output will be like Thursday, May 10th, 2018, 7:11:21 AM
    // let date = dateFormat(curentDate, "dd, mm, yyyy, h:MM:ss TT");
      let curentDate = new Date();
      this.orders.push( new order(curentDate,data));
     
    //this.orders.push(data);
  }
  getmyorders(){
    //console.log(this.orders);
    return this.orders
  }
  setviewProduct(data){  
    this.productToView = data;
  }
  getProductToView(){
    return this.productToView;
  }

}
