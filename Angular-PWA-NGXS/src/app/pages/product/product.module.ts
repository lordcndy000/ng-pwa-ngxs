import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductRoutingModule } from './product-routing.module';
import { IgxSliderModule } from 'igniteui-angular';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductListInfoComponent } from './product-list-info/product-list-info.component';
import { ProductComponent } from './product.component';
import { ProductFormComponent } from './product-form/product-form.component';

const MODULES = [
  CommonModule,
  HttpClientModule,
  ProductRoutingModule,
  IgxSliderModule,
  ModalModule.forRoot(),
];

const COMPONENTS = [
  ProductComponent,
  ProductListComponent,
  ProductListInfoComponent,
  ProductFormComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MODULES
  ],
  entryComponents: [ProductFormComponent]
})

export class ProductModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ProductModule
    };
  }
}

