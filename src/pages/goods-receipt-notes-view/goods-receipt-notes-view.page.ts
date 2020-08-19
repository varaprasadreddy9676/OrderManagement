import { Component, OnInit } from '@angular/core';
import { GoodsReceiptNotesPage } from '../goods-receipt-notes/goods-receipt-notes.page';
import { HttpService } from 'src/services/http/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-goods-receipt-notes-view',
  templateUrl: './goods-receipt-notes-view.page.html',
  styleUrls: ['./goods-receipt-notes-view.page.scss'],
})
export class GoodsReceiptNotesViewPage implements OnInit {
  grn: any = [];
  items: any = [];


  constructor(private route: ActivatedRoute, private goodsreceiptnotes: GoodsReceiptNotesPage, private httpService: HttpService) {
    this.items = this.items.map(item => ({
      ...item,
      showMore: false
    }));
   }

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    const id = this.route.snapshot.params['id'];
    // this.grn = this.goodsreceiptnotes.getGrnid(id);
    // console.log(id);
    // console.log(this.grn);
    this.getGrnId(id);
  }
  async getGrnId(id) {
    const url = '/supplier/goodsReceiptNotes/' + id;
    await this.httpService.get(url)
      .then((grn) => {
        if (grn) {
          this.grn = grn[0];
          this.items = grn[0].items;
          console.log(this.grn);
        }
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }


}
