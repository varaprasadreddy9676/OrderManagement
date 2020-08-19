import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/services/http/http.service';
import { PurchaseOrdersPage } from '../purchase-orders/purchase-orders.page';
import { MatDialog } from '@angular/material/dialog';
import { UtilityService } from 'src/services/utility/utility.service';
import { AlertController, ModalController } from '@ionic/angular';
import { StorageService } from 'src/services/storage/storage.service';
import moment from 'moment';

@Component({
  selector: 'app-fulfill-order',
  templateUrl: './fulfill-order.page.html',
  styleUrls: ['./fulfill-order.page.scss'],
})
export class FulfillOrderPage implements OnInit {
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
  customPickerOptions: any;
  @ViewChild('cart', { static: false, read: ElementRef }) fab: ElementRef;
  @ViewChild('content', { static: false }) private content: any;
  @ViewChild('batchNumber', { static: false }) private batchNumber: any;
  @ViewChild('invoiceNumber', { static: false }) private invoiceNumberf: any;
  purchaseOrder: any = [];
  storedPO; any = [];
  items: any = [];
  isShow = true;
  invoiceDate: Date = new Date();
  // tslint:disable-next-line:ban-types
  invoiceNumber: String;
  checked: boolean;
  selectAll: boolean;
  totalNetAmount: any;
  currentDate: Date = new Date();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService,
    public dialog: MatDialog,
    private utilityService: UtilityService,
    public alertController: AlertController,
    public storage: StorageService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
  ) {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: () => console.log('Clicked Save!')
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    };
  }

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    const id = this.route.snapshot.params['id'];
    // this.purchaseOrders.getPOid(id);
    console.log(id);
    this.getPOId(id);
    this.storedPO = this.storage.get('storedPO');
  }


  addNew(gi, i) {
    if (!(gi.fullfillvalue)) {
      this.utilityService.presentAlert(`Missing Quantity`, 'Please enter Fulfill quantity value.');
      return;
    }
    if ((gi.purchaseQuantity + gi.freeQuantity) === gi.fullfillvalue) {
      this.utilityService.presentAlert(`Already Fulfilled`, 'Please change Fulfill quantity.');
      return;
    }
    if ((gi.purchaseQuantity + gi.freeQuantity) < gi.fullfillvalue) {
      this.utilityService.presentAlert(`Invalid Quantity`, 'Fulfill value must not be greater than PurchaseQuantity.');
      return;
    }
    this.purchaseOrder.items.splice(i + 1, 0, {
      itemCode: gi.itemCode,
      itemName: gi.itemName,
      purchaseQuantity: gi.purchaseQuantity - gi.fullfillvalue,
      purchaseUOM: gi.purchaseUOM,
      freeQuantity: gi.freeQuantity,
      // purchaseUOM: gi.purchaseUOM,
      fullfillvalue: gi.purchaseQuantity - gi.fullfillvalue,
      conversionFactor: gi.conversionFactor,
      rate: gi.rate,
      taxPercentage: gi.taxPercentage,
      taxAmount: ((gi.fullfillvalue * gi.rate) * gi.taxPercentage / 100).toFixed(2),
      netAmount: ((gi.fullfillvalue * gi.rate) + (gi.fullfillvalue * gi.rate) * gi.taxPercentage / 100).toFixed(2),
    });
  }
  trackByFn(index: any, item: any) {
    return index;
  }
  getGstAmount = (item) => {
    if (!item.fullfillvalue) {
      return 0.00;
    } else {
      return ((item.fullfillvalue * item.rate) * item.taxPercentage / 100).toFixed(2);
    }
  }


  getNet = (item) => {
    if (!item.fullfillvalue) {
      return 0.00;
    } else {
      return ((item.fullfillvalue * item.rate) + (item.fullfillvalue * item.rate) * item.taxPercentage / 100).toFixed(2);
    }
  }

  addAll = (total, item) => {

    if (!isNaN(item.netAmount)) {
      item.netAmount = parseFloat(item.netAmount);
    }
    if (!isNaN(total)) {
      total = parseFloat(total);
    }
    return total + item.netAmount;
  }

  addAllTax = (total, item) => {
    if (!isNaN(item.taxAmount)) {
      item.taxAmount = parseFloat(item.taxAmount);
    }
    if (!isNaN(total)) {
      total = parseFloat(total);
    }
    return total + item.taxAmount;
  }

  totalNet = () => {
    this.purchaseOrder.totalNetAmount = this.purchaseOrder.items.reduce(this.addAll, 0);
    this.totalNetAmount = this.purchaseOrder.items.reduce(this.addAll, 0);
  }
  totalTax = () => {
    this.purchaseOrder.totalTaxAmount = this.purchaseOrder.items.reduce(this.addAllTax, 0);
  }
  allRun = (gi) => {
    if ((gi.purchaseQuantity + gi.freeQuantity) < gi.fullfillvalue) {
      this.utilityService.presentAlert(`Invalid Quantity`, 'Fulfill value must not be greater than PurchaseQuantity.');
      return;
    }
    console.log('inside all run');
    this.purchaseOrder.items = this.purchaseOrder.items.map(i => {
      return {
        ...i,
        taxAmount: this.getGstAmount(i),
        netAmount: this.getNet(i)
      };
    });
    this.totalNet();
    this.totalTax();

  }
  validateinvoiceDate() {
    if (!(this.invoiceDate) || (this.invoiceDate > this.currentDate)) {
      this.utilityService.presentAlert('Invalid Invoice Date', 'Invoice date cannot be future date.');
      return;
    }
  }

  async getPOId(id) {
    const url = '/supplier/purchaseOrder/' + id;
    await this.httpService.get(url)
      .then((purchaseOrders) => {
        if (purchaseOrders) {
          this.purchaseOrder = purchaseOrders[0];
          this.purchaseOrder.items = this.purchaseOrder.items.map(item => ({
            ...item,
            // tslint:disable-next-line:max-line-length
            fullfillvalue: (item.fullfillvalue && item.fullfillvalue !== '') ? item.fullfillvalue : item.purchaseQuantity + item.freeQuantity
          }));
          // this.items = purchaseOrders[0].items;
          // console.log(this.purchaseOrder);
        }
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }

  async save() {

    console.log('saved' + JSON.stringify(this.purchaseOrder));
    if (!(this.invoiceNumber)) {
      this.utilityService.presentAlert('Missing Invoice Number', 'Enter Invoice Number');
      // this.invoiceNumberf.nativeElement.focus();
      return;
    }
    if (!(this.invoiceDate) || (this.invoiceDate > this.currentDate)) {
      this.utilityService.presentAlert('Invalid Invoice Date', 'Invoice date cannot be future date or empty.');
      return;
    }
    for (let i = 0; i < (this.purchaseOrder.items).length; i++) {
      console.log(moment(this.purchaseOrder.items[i].expiryDate).format('YYYY-MM-DD'));
      if (this.purchaseOrder.items[i].expiryDate) {
        // if ((this.purchaseOrder.items[i].expiryDate) <= (this.currentDate)){
        //   this.utilityService.presentAlert('Invalid Expiry Date', 'Expiry date cannot be past date.');
        //   return;
        // }
        this.purchaseOrder.items[i].expiryDate = moment(this.purchaseOrder.items[i].expiryDate).format('DD/MM/YYYY');
      }
      if (!(this.purchaseOrder.items[i].fullfillvalue)) {
        this.utilityService.presentAlert(`Missing Quantity`, 'Please enter Fulfill quantity value.');
        return;
      }
      // tslint:disable-next-line:max-line-length
      if ((this.purchaseOrder.items[i].purchaseQuantity) + (this.purchaseOrder.items[i].freeQuantity) < (this.purchaseOrder.items[i].fullfillvalue)) {
        this.utilityService.presentAlert('Invalid Quantity', 'Fulfill value must not be greater than PurchaseQuantity.');
        return;
      }

      if (!(this.purchaseOrder.items[i].batchNumber) && (this.purchaseOrder.items[i].fullfillvalue)) {

        this.utilityService.presentAlert('Missing batch number', 'Please fill all the batch numbers.');
        this.purchaseOrder.items[i].batchNumber.nativeElement.focus();
        return;
      }
    }
    this.purchaseOrder.poNumber = this.purchaseOrder.documentNumber;

    this.purchaseOrder.status = 'NEW';
    this.purchaseOrder.itemsMappedToGrid = true;
    this.purchaseOrder.invoiceDate = this.utilityService.dateFormat(this.invoiceDate);
    this.purchaseOrder.invoiceNumber = this.invoiceNumber;

    // for (let i = 0; i < (this.purchaseOrder.items).length; i++) {
    //   this.purchaseOrder.items[i].purchaseQuantity = this.purchaseOrder.items[i].fullfillvalue;
    // }

    this.storage.set('storedPO', this.purchaseOrder, true);
    this.utilityService.presentToast('Input has been saved', 1000);

  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: 'Please save data before proceeding',
      buttons: [{
        text: 'Ok.',
        handler: () => {
          this.save();
          this.modalCtrl.dismiss();
        }
      }],
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }
  async openCart() {
    // tslint:disable-next-line:prefer-const
    let purchaseOrder = this.storage.get('storedPO');
    if (purchaseOrder == null) {
      this.presentAlert();
    }
    else {
      this.router.navigate([`order-confirmation`]);
    }
    // this.animateCSS('bounceOutLeft', true);
    // const modal = await this.modalCtrl.create({
    //   component: OrderconfirmationPage,
    // });
    // modal.onWillDismiss().then(() => {
    //   this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft');
    //   this.animateCSS('bounceInLeft');
    // });
    // modal.present();
  }

  animateCSS(animationName, keepAnimated = false) {
    const node = this.fab.nativeElement;
    node.classList.add('animated', animationName);

    // https://github.com/daneden/animate.css
    function handleAnimationEnd() {
      if (!keepAnimated) {
        node.classList.remove('animated', animationName);
      }
      node.removeEventListener('animationend', handleAnimationEnd);
    }
    node.addEventListener('animationend', handleAnimationEnd);
  }
}
