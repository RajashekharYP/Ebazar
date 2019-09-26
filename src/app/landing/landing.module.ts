import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { LandingComponent } from './landing/landing.component';
import { CustomMaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  declarations: [ItemComponent, ItemListComponent, LandingComponent]
})
export class LandingModule { }
