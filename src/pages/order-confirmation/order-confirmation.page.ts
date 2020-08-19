import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/services/storage/storage.service';
import { ModalController, AlertController } from '@ionic/angular';
import { HttpService } from 'src/services/http/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from 'src/services/utility/utility.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.page.html',
  styleUrls: ['./order-confirmation.page.scss'],
})
export class OrderConfirmationPage implements OnInit {
  purchaseOrder: any = [];

  constructor(
    public storage: StorageService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router,
    private utilityService: UtilityService,
    )
    { }

  ngOnInit() {
    this.purchaseOrder = this.storage.get('storedPO');
    // for (let i of this.purchaseOrder.items) {
    //   if (i.purchaseQuantity > i.fullfillvalue){
    //     // tslint:disable-next-line:no-shadowed-variable
    //     i = i.map(item => ({
    //       ...item,
    //      isRed: true
    //     }));
    //   }
    // }
    console.log(this.purchaseOrder);
  }
  async checkout() {
    // Perfom PayPal or Stripe checkout process
   // tslint:disable-next-line:prefer-const
    let alert = await this.alertCtrl.create({
      header: 'Confirm Order',
      message: `Are you sure want to finalize on the
                Order ${this.purchaseOrder.documentNumber} of ${this.purchaseOrder.items.length}
                with Total Net Amount Rs. ${this.purchaseOrder.totaltotalNetAmount}`
                ,
                buttons: [
                  {
                      text: 'No',
                      handler: () => {
                        this.storage.remove('storedPO');
                        this.modalCtrl.dismiss();
                      }
                  },
                  {
                      text: 'Yes',
                      handler: () => {
                         this.sendPO();
                      }
                  }
              ]
    });
    alert.present().then(() => {
    });
  }

  async sendPO(){
    if (this.purchaseOrder == null){
      this.utilityService.presentAlert('Error', 'Please save before proceeding');
    }
    else{
    const payload = JSON.stringify(this.purchaseOrder);
    const url = '/ops/goodsReceiptNotes';
   // this.router.navigate([`orderconfirmation`]);
    await this.httpService.post(url, payload)
      .then((success) => {
        if (success) {
          console.log('Success.........' + success);
          this.storage.remove('storedPO');
          this.router.navigate([`goods-receipt-notes/${this.purchaseOrder._id}`]);
        }
      })
      .catch((error) => {
        console.log(error);
        this.utilityService.presentAlert('Error', error.message);
      });
    }
  }
  close() {
    this.storage.remove('storedPO');
    this.router.navigate([`/fulfill-order/${this.purchaseOrder._id}`]);
  }

}
