import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoodsReceiptNotesViewPage } from './goods-receipt-notes-view.page';

describe('GoodsReceiptNotesViewPage', () => {
  let component: GoodsReceiptNotesViewPage;
  let fixture: ComponentFixture<GoodsReceiptNotesViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsReceiptNotesViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoodsReceiptNotesViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
