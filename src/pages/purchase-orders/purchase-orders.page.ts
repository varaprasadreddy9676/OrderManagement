import { Component, OnInit, NgModule} from '@angular/core';
import { HttpService } from 'src/services/http/http.service';
import { Router } from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';
import { StorageService } from 'src/services/storage/storage.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-purchase-orders',
  templateUrl: './purchase-orders.page.html',
  styleUrls: ['./purchase-orders.page.scss'],
})
export class PurchaseOrdersPage implements OnInit {
  pendingpurchaseOrders: any = [];
  totalNetAmountPending: any;
  totalNetAmountProcessed: any;
  processedpurchaseOrders: any = [];
  customerNames: any = [];
  customerList: any = [];
  customerNamesProcessed: any = [];
  customerListProcessed: any = [];
  selectedProcessed: any = [];
  selected: any = [];
  status: string;
  activeTab = 0;
  noPendingOrders = false;
  noProcessedOrders = false;
  event = 'Show';
  searchTerm: string;
  searchTermProcessed: string;
  filterItems: any = [];
  filterItemsProcessed: any = [];
  compareWith: any;
  filteredItems: any = [];
  uniqueItems: any = [];
  supplierCode: any;
  supplierDetails: any;
  uniqueItemsProcessed: any = [];
  date: any;
  dateCount = 0;
  countPrice = 0;
  constructor(private httpService: HttpService, private router: Router,
              private storageService: StorageService, public modalCtrl: ModalController) {
    this.pendingpurchaseOrders = this.pendingpurchaseOrders.map(item => ({
      ...item,
      showMore: false
    }));
    this.processedpurchaseOrders = this.processedpurchaseOrders.map(item => ({
      ...item,
      showMore: false
    }));
  }

  compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  async ngOnInit() {
    await this.getPO();
    await this.getProcessedPO();
    this.supplierDetails = this.storageService.get('supplier');
    this.supplierCode = this.supplierDetails.code;
    console.log('SupplierCode: ' + this.supplierCode);
    this.customerList.push(...this.uniqueItems);
    this.customerListProcessed.push(...this.uniqueItemsProcessed);
    console.log('uniqqq ' + this.customerList);
    console.log('uniqqqProcessed ' + this.customerListProcessed);
  }
  tabClick(tab) {
    this.activeTab = tab.index;
    console.log('active tab', tab.index);
  }
  onChangedSort(event: Event) {
    console.log(this.selected);
    this.sortByCustomer();
  }

  async getPO() {
    // this.status = 'PROCESSED';
    this.status = 'PENDING';
    const url = '/supplier/purchaseOrders/' + this.status;
    await this.httpService.get(url)
      .then((purchaseOrders) => {
        if (purchaseOrders.length > 0) {
          this.noPendingOrders = false;
          this.pendingpurchaseOrders = purchaseOrders;
          // tslint:disable-next-line:prefer-const
          for (let customer of (purchaseOrders)) {
            this.customerNames.push(customer.customerName);
          }
          this.uniqueItems = Array.from(new Set(this.customerNames));
          this.filterItems = JSON.parse(JSON.stringify(this.pendingpurchaseOrders));
          this.totalNetAmountPending = 0;
          for (const i of this.filterItems) {
            this.totalNetAmountPending += i.totalNetAmount;
          }
          console.log(this.totalNetAmountPending);

          console.log('Saved Pending Purchase Orders ', this.pendingpurchaseOrders);
        }
        else {
          this.noPendingOrders = true;
        }
      })

      .catch((error) => {
        console.log('Error', error);
      });
  }
  resetData() {
    this.filterItems = JSON.parse(JSON.stringify(this.pendingpurchaseOrders));
    this.selected = null;
    this.dateCount = 0;
    this.countPrice = 0;
  }
  trackByFn(index: any, item: any) {
    return index;
 }
  applyFilter(filterValue: string) {
    this.filterItems = filterValue.trim().toLowerCase();
  }

  async sortByCustomer() {
    const suppplierArray = [];
    suppplierArray.push(this.selected);
    // console.log('supplier ' + suppplierArray);
    const url = '/ops/purchaseOrders/?customerName=' + suppplierArray + `&status=PENDING&supplierCode=${this.supplierCode}`;
    console.log('URL:' + url);
    await this.httpService.get(url)
      .then((purchaseOrders) => {
        if (purchaseOrders.length > 0) {
          this.filterItems = purchaseOrders;
          console.log('Saved Supplier Pending Purchase Orders ', this.filterItems);
        }
      });
    this.filterItems = this.filterItems.map(item => ({
      ...item,
      showMore: false
    }));
    this.totalNetAmountPending = 0;
    for (const i of this.filterItems) {
      this.totalNetAmountPending += i.totalNetAmount;
    }
    console.log(this.totalNetAmountPending);
  }
  async sortPrice(){
    this.countPrice++;
    let stat;
    if (this.countPrice % 2 === 0){
     stat = '-totalNetAmount';
    }
    else{
      stat = 'totalNetAmount';
    }
    console.log(this.countPrice);
    const url = `/ops/purchaseOrders/?status=PENDING&supplierCode=${this.supplierCode}&sort=${stat}`;
    console.log('URL:' + url);
    await this.httpService.get(url)
      .then((purchaseOrders) => {
        if (purchaseOrders.length > 0) {
          this.filterItems = purchaseOrders;
          console.log('Saved Supplier Pending Purchase Orders ', this.filterItems);
        }
      });
    this.filterItems = this.filterItems.map(item => ({
      ...item,
      showMore: false
    }));
    this.totalNetAmountPending = 0;
    for (const i of this.filterItems) {
      this.totalNetAmountPending += i.totalNetAmount;
    }
    console.log(this.totalNetAmountPending);
  }
  async sortDate(){
    this.dateCount++;
    let stat;
    if (this.dateCount % 2 === 0){
     stat = '-date';
    }
    else{
      stat = 'date';
    }
    console.log(this.dateCount);
    const url = `/ops/purchaseOrders/?status=PENDING&supplierCode=${this.supplierCode}&sort=${stat}`;
    console.log('URL:' + url);
    await this.httpService.get(url)
      .then((purchaseOrders) => {
        if (purchaseOrders.length > 0) {
          this.filterItems = purchaseOrders;
          console.log('Saved Supplier Pending Purchase Orders ', this.filterItems);
        }
      });
    this.filterItems = this.filterItems.map(item => ({
      ...item,
      showMore: false
    }));
    this.totalNetAmountPending = 0;
    for (const i of this.filterItems) {
      this.totalNetAmountPending += i.totalNetAmount;
    }
    console.log(this.totalNetAmountPending);
  }

  // processed POs

  async getProcessedPO() {
    this.status = 'PROCESSED';
    const url = '/supplier/purchaseOrders/' + this.status;
    await this.httpService.get(url)
      .then((processedpurchaseOrders) => {
        if (processedpurchaseOrders.length > 0) {
          this.noProcessedOrders = false;
          this.processedpurchaseOrders = processedpurchaseOrders;
          console.log('SavedProcessedPurchase Orders ', this.processedpurchaseOrders);
          // tslint:disable-next-line:prefer-const
          for (let customer of (processedpurchaseOrders)) {
            this.customerNamesProcessed.push(customer.customerName);
          }
          this.uniqueItemsProcessed = Array.from(new Set(this.customerNamesProcessed));
          this.filterItemsProcessed = JSON.parse(JSON.stringify(this.processedpurchaseOrders));
          this.totalNetAmountProcessed = 0;
          for (const i of this.filterItemsProcessed) {
            this.totalNetAmountProcessed += i.totalNetAmount;
          }
          console.log(this.totalNetAmountProcessed);
        }
        else {
          this.noProcessedOrders = true;
        }
      })

      .catch((error) => {
        console.log('Error', error);
      });
  }
  onChangedSortProcessed(event: Event) {
    console.log(this.selected);
    this.sortByCustomerProcessed();
  }
  async sortByCustomerProcessed() {
    const suppplierArrayProcessed = [];
    suppplierArrayProcessed.push(this.selected);
    // console.log('supplier ' + suppplierArray);
    const url = '/ops/purchaseOrders/?customerName=' + suppplierArrayProcessed + `&status=PROCESSED&supplierCode=${this.supplierCode}`;
    console.log('URL:' + url);
    await this.httpService.get(url)
      .then((purchaseOrders) => {
        if (purchaseOrders.length > 0) {
          this.filterItemsProcessed = purchaseOrders;
          console.log('Saved Supplier Processed Purchase Orders ', this.filterItemsProcessed);
        }
      });
    this.filterItemsProcessed = this.filterItemsProcessed.map(item => ({
      ...item,
      showMore: false
    }));
    this.totalNetAmountProcessed = 0;
    for (const i of this.filterItemsProcessed) {
      this.totalNetAmountProcessed += i.totalNetAmount;
    }
    console.log(this.totalNetAmountProcessed);
  }
  async sortPriceProcessed(){
    this.countPrice++;
    let stat;
    if (this.countPrice % 2 === 0){
     stat = '-totalNetAmount';
    }
    else{
      stat = 'totalNetAmount';
    }
    console.log(this.countPrice);
    const url = `/ops/purchaseOrders/?status=PROCESSED&supplierCode=${this.supplierCode}&sort=${stat}`;
    console.log('URL:' + url);
    await this.httpService.get(url)
      .then((purchaseOrders) => {
        if (purchaseOrders.length > 0) {
          this.filterItemsProcessed = purchaseOrders;
        }
      });
    this.filterItemsProcessed = this.filterItemsProcessed.map(item => ({
      ...item,
      showMore: false
    }));
    this.totalNetAmountProcessed = 0;
    for (const i of this.filterItemsProcessed) {
      this.totalNetAmountProcessed += i.totalNetAmountProcessed;
    }
  }
  async sortDateProcessed(){
    this.dateCount++;
    let stat;
    if (this.dateCount % 2 === 0){
     stat = '-date';
    }
    else{
      stat = 'date';
    }
    console.log(this.dateCount);
    const url = `/ops/purchaseOrders/?status=PROCESSED&supplierCode=${this.supplierCode}&sort=${stat}`;
    console.log('URL:' + url);
    await this.httpService.get(url)
      .then((purchaseOrders) => {
        if (purchaseOrders.length > 0) {
          this.filterItemsProcessed = purchaseOrders;
          console.log('Saved Supplier Pending Purchase Orders ', this.filterItems);
        }
      });
    this.filterItemsProcessed = this.filterItemsProcessed.map(item => ({
      ...item,
      showMore: false
    }));
    this.totalNetAmountProcessed = 0;
    for (const i of this.filterItemsProcessed) {
      this.totalNetAmountProcessed += i.totalNetAmountProcessed;
    }
    console.log(this.totalNetAmountPending);
  }
  resetDataProcessed() {
    this.filterItemsProcessed = JSON.parse(JSON.stringify(this.processedpurchaseOrders));
    this.selectedProcessed = null;
  }






  viewPO(poId: any) {
    console.log(poId);

    this.router.navigate(['/purchase-orders', poId]);
  }
  getPOid(id: any) {
    console.log(this.pendingpurchaseOrders);
    return this.pendingpurchaseOrders.find((p) => p._id === id);
  }
  fulfill(poId: any) {
    this.router.navigate(['/fulfill-order', poId]);
  }
  goBack() {
    this.router.navigate(['/home']);
  }
}


