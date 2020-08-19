import { Component, OnInit, NgModule } from '@angular/core';
import { HttpService } from 'src/services/http/http.service';
import { Platform } from '@ionic/angular';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { StorageService } from 'src/services/storage/storage.service';

@Component({
  selector: 'app-goods-receipt-notes',
  templateUrl: './goods-receipt-notes.page.html',
  styleUrls: ['./goods-receipt-notes.page.scss'],
})

export class GoodsReceiptNotesPage implements OnInit {
  grn: any = [];
  supplierDetails: any ;
  supplierCode: any;


  constructor(private httpService: HttpService, private router: Router, private storageService: StorageService,) { }

  async ngOnInit() {
    this.supplierDetails = await this.storageService.get('supplier');
    this.supplierCode = this.supplierDetails.code;
    console.log('SupplierCode: ' + this.supplierCode);
    this.getGRN();
  }
  async getGRN() {

    const url = `/ops/purchaseOrders/?supplierCode=${this.supplierCode}`;
    console.log(url);

    await this.httpService.get(url)
      .then((goodsReceiptNotes) => {
        if (goodsReceiptNotes) {
          this.grn = goodsReceiptNotes;
          console.log('Goods Receipt Notes...', this.grn);
        }
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }
  viewGrn(GrnId: any) {
    console.log(GrnId);

    this.router.navigate(['/goods-receipt-notes', GrnId]);
  }
  getGrnid(id: any) {
    console.log(this.grn);
    return this.grn.find((p) => p._id === id);
  }

}
