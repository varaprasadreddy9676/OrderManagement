import { TestBed } from '@angular/core/testing';

import { PaymentGatewayService } from './payment-gateway.service';

describe('PaymentGatewayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaymentGatewayService = TestBed.get(PaymentGatewayService);
    expect(service).toBeTruthy();
  });
});
