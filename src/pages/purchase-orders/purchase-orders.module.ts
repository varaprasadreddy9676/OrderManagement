import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchaseOrdersPageRoutingModule } from './purchase-orders-routing.module';

import { PurchaseOrdersPage } from './purchase-orders.page';

import { MaterialModule } from 'src/app/material.module';
import { customerFilterPipe } from './customerFilter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchaseOrdersPageRoutingModule,
    MaterialModule,
  ],
  declarations: [PurchaseOrdersPage, customerFilterPipe]
})
export class PurchaseOrdersPageModule { }
