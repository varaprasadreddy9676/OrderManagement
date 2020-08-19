import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoodsReceiptNotesPageRoutingModule } from './goods-receipt-notes-routing.module';

import { GoodsReceiptNotesPage } from './goods-receipt-notes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoodsReceiptNotesPageRoutingModule
  ],
  declarations: [GoodsReceiptNotesPage]
})
export class GoodsReceiptNotesPageModule {}
