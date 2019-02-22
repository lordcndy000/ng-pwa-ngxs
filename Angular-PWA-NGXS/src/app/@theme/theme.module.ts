import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Layouts
import {
  DefaultLayoutComponent,
  DefaultHeaderComponent,
  DefaultFooterComponent
} from './layouts';

// Components
import {
  HeaderCartComponent
} from './components';

const BASE_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule
];

const COMPONENTS = [
  DefaultLayoutComponent,
  DefaultHeaderComponent,
  DefaultFooterComponent,

  HeaderCartComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    ...BASE_MODULES
  ],
  exports: [
    ...BASE_MODULES, ...COMPONENTS
  ]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ThemeModule,
    };
  }
}

