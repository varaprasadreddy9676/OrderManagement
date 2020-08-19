import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FulfillOrderPage } from './fulfill-order.page';

describe('FulfillOrderPage', () => {
  let component: FulfillOrderPage;
  let fixture: ComponentFixture<FulfillOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FulfillOrderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FulfillOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
