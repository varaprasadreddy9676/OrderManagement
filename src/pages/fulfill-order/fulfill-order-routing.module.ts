import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FulfillOrderPage } from './fulfill-order.page';

const routes: Routes = [
  {
    path: '',
    component: FulfillOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FulfillOrderPageRoutingModule {}
