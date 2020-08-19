import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoodsReceiptNotesViewPageRoutingModule } from './goods-receipt-notes-view-routing.module';

import { GoodsReceiptNotesViewPage } from './goods-receipt-notes-view.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
 
    GoodsReceiptNotesViewPageRoutingModule
  ],
  declarations: [GoodsReceiptNotesViewPage]
})
export class GoodsReceiptNotesViewPageModule {}
