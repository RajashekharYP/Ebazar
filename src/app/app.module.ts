import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LandingModule} from './landing/landing.module';
import { RouterModule, Routes} from '@angular/router';
import { routes} from './app.routes';
import { AuthenticationModule } from './authentication/authentication.module';
import 'hammerjs';
import { CustomMaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ViewProductComponent } from './view-product/view-product.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ViewComponent } from './view/view.component';
import { MyordersComponent } from './myorders/myorders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FilterComponent,
    CartComponent,
    ViewComponent,
    MyordersComponent,
    ViewProductComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    FlexLayoutModule,
    LandingModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    AuthenticationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
