import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { FulfillOrderPageRoutingModule } from './fulfill-order-routing.module';

import { FulfillOrderPage } from './fulfill-order.page';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FulfillOrderPageRoutingModule,
    // FontAwesomeModule,
    MaterialModule,

  ],
  declarations: [FulfillOrderPage]
})
export class FulfillOrderPageModule {}
