import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/http/http.service';
import { UtilityService } from 'src/services/utility/utility.service';
import { StorageService } from 'src/services/storage/storage.service';
import { MenuController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  supplierDetails: any = [];
  pendingpurchaseOrders: any;
  status: any;
  grn: any;

  constructor(
    private router: Router,
    private httpService: HttpService,
    private utilityService: UtilityService,
    private storageService: StorageService,
    private menuCtrl: MenuController,
    public loadingController: LoadingController,

  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  ngOnInit() {
   // this.getSupplierdetails();
   this.getPPO();
  // this.getGRNCount();
  }
 getPPO() {
    // this.status = 'PROCESSED';
    this.status = 'PENDING';
    const url = '/supplier/purchaseOrders/' + this.status;
    this.httpService.get(url)
      .then((purchaseOrders) => {
        if (purchaseOrders.length > 0) {
          this.pendingpurchaseOrders = purchaseOrders.length;
          console.log('Saved Pending Purchase Orders ', this.pendingpurchaseOrders);
        }
      })

      .catch((error) => {
        console.log('Error', error);
      });
  }

  getPO(){
    this.router.navigate(['purchase-orders']);
    }
    getGRN(){
      this.router.navigate(['goods-receipt-notes']);
    }


}
