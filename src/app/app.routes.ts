import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { FilterComponent } from './filter/filter.component';

export const routes: Routes = [{
  path: 'home',
  pathMatch: 'full',
  component: HomeComponent
},
{
  path: 'login',
  pathMatch: 'full',
  component: LoginComponent
},
{
  path: 'register',
  pathMatch: 'full',
  component: RegistrationComponent
},
{
  path: 'viewproducts',
  pathMatch: 'full',
  component: ViewProductComponent
},
{
  path: 'filter',
  pathMatch: 'full',
  component: FilterComponent
},
];
