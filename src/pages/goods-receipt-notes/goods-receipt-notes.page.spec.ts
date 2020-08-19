import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoodsReceiptNotesPage } from './goods-receipt-notes.page';

describe('GoodsReceiptNotesPage', () => {
  let component: GoodsReceiptNotesPage;
  let fixture: ComponentFixture<GoodsReceiptNotesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsReceiptNotesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoodsReceiptNotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
