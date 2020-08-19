import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchaseOrderViewPageRoutingModule } from './purchase-order-view-routing.module';

import { PurchaseOrderViewPage } from './purchase-order-view.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchaseOrderViewPageRoutingModule
  ],
  declarations: [PurchaseOrderViewPage]
})
export class PurchaseOrderViewPageModule {}
