import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoodsReceiptNotesPage } from './goods-receipt-notes.page';

const routes: Routes = [
  {
    path: '',
    component: GoodsReceiptNotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoodsReceiptNotesPageRoutingModule {}
