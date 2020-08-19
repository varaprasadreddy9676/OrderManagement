import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoodsReceiptNotesViewPage } from './goods-receipt-notes-view.page';

const routes: Routes = [
  {
    path: '',
    component: GoodsReceiptNotesViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoodsReceiptNotesViewPageRoutingModule {}
