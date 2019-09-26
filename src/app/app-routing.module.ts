import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { CartComponent } from './cart/cart.component';
import { ViewComponent } from './view/view.component';
import { MyordersComponent } from './myorders/myorders.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'viewproducts', component: ViewProductComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'cart', component: CartComponent },
  { path: 'view/id', component: ViewComponent },
  { path: 'cart/id', component: CartComponent },
  { path: 'myorders', component: MyordersComponent },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [

  ]
})
export class AppRoutingModule { }
