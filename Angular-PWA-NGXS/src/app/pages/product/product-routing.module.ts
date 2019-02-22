import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      // {
      //   path: 'home',
      //   component: ProductListComponent
      // },
      // {
      //   path: '',
      //   redirectTo: 'home',
      //   pathMatch: 'full',
      // }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
