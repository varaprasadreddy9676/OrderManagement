import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { MaterialModule } from './material.module';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { AuthGaurdService } from './../services/user-authentication/auth-gaurd.service';
import { StorageService } from './../services/storage/storage.service';
import { HttpService } from './../services/http/http.service';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { PurchaseOrderViewPage } from 'src/pages/purchase-order-view/purchase-order-view.page';
import { GoodsReceiptNotesPage } from 'src/pages/goods-receipt-notes/goods-receipt-notes.page';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { FCM } from '@ionic-native/fcm/ngx';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({ menuType: 'overlay' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpService,
    MaterialModule,
    PurchaseOrderViewPage,
    GoodsReceiptNotesPage,
    FCM,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    StorageService,
    AppVersion,
    AuthGaurdService,


  ],
  entryComponents: [

  ],
  bootstrap: [AppComponent]
})

export class AppModule {


}
