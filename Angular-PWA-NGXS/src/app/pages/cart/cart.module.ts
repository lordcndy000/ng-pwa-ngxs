import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';


const MODULES = [
  CommonModule,
  CartRoutingModule
];

const COMPONENTS = [
  CartComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MODULES
  ]
})
export class CartModule { }
