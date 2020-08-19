import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseOrdersPage } from '../purchase-orders/purchase-orders.page';
import { HttpService } from 'src/services/http/http.service';
import { NavController, Platform } from '@ionic/angular';


@Component({
  selector: 'app-purchase-order-view',
  templateUrl: './purchase-order-view.page.html',
  styleUrls: ['./purchase-order-view.page.scss'],
})
export class PurchaseOrderViewPage implements OnInit {
  purchaseOrder: any = [];
  items: any = [];
  expbutton: any;
  isShow = false;


  constructor(private route: ActivatedRoute, private router: Router, private httpService: HttpService, private platform: Platform) {
    this.items = this.items.map(item => ({
      ...item,
      showMore: false
    }));
    console.log('mapped: ' + this.items);

   }
   ionViewWillEnter() {

    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');

      this.router.navigate(['purchase-orders']);

    });
  }

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    const id = this.route.snapshot.params['id'];
    // this.purchaseOrders.getPOid(id);
    console.log(id);
    this.getPOId(id);
    this.expbutton = 'Show more';
  }
  async getPOId(id) {
    const url = '/supplier/purchaseOrder/' + id;
    await this.httpService.get(url)
      .then((purchaseOrders) => {
        if (purchaseOrders) {
          this.purchaseOrder = purchaseOrders[0];
          this.items = purchaseOrders[0].items;
          // console.log(this.purchaseOrder);
        }
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }
  fulfill(poId: any) {
    this.router.navigate(['/fulfill-order', poId]);
  }



}
