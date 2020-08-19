import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchaseOrderViewPage } from './purchase-order-view.page';

const routes: Routes = [
  {
    path: '',
    component: PurchaseOrderViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseOrderViewPageRoutingModule {}
