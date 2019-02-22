import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './interceptors/http.interceptor';

import {
  ProductService, CategoryService
} from './http';

// HTTP
const HTTP_SERVICE = [
  CategoryService,
  ProductService
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ...HTTP_SERVICE,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ]
})

export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ...HTTP_SERVICE,
        { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
      ]
    };
  }
}

