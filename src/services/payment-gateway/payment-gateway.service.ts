import { Platform } from '@ionic/angular';
import { OnInit } from '@angular/core';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

declare var RazorpayCheckout: any;

export interface TransactionDetails {
  paymentGatewayKey: string;
  orderId: string;
  payerName: string;
  payerPhoneNumber: string;
  payerEmail: string;
  description: string;
  amount: number;
  appName: string;
}


@Injectable({
  providedIn: 'root'
})
export class PaymentGatewayService implements OnInit {


  constructor(private platform: Platform) {
  }

  public makePayment(trxDetails: any, successCallbackFun, cancelCallbackFun) {

    this.payWithRazorpay(trxDetails, successCallbackFun, cancelCallbackFun);

  }

  private payWithRazorpay(trxDetails: TransactionDetails, successCallbackFun, cancelCallbackFun) {

    const options = {
      description: trxDetails.description,
      image: environment.BASE_URL + '/public/images/medics_logo.png',
      currency: 'INR', // your 3 letter currency code
      key: trxDetails.paymentGatewayKey, // your Key Id from Razorpay dashboard
      amount: trxDetails.amount * 100, // Payment amount in smallest denomiation e.g. paise for INR
      name: trxDetails.appName,
      // order_id: trxDetails.orderId,
      prefill: {
        email: trxDetails.payerEmail,
        contact: trxDetails.payerPhoneNumber,
        name: trxDetails.payerName
      },
      theme: {
        color: '#6c9904'
      },
      modal: {
        ondismiss: function () {
          alert('dismissed');
        }
      }
    };

    var successCallback = (success) => {
      console.log('payment_id: ' + success);
      // var orderId = success.razorpay_order_id
      // var signature = success.razorpay_signature
      // this.httpService.get("ddddd");
      successCallbackFun(success);
    };

    var cancelCallback = (error) => {
      console.log(error.description + ' (Error ' + error.code + ')');
      cancelCallbackFun(error);
    };

    RazorpayCheckout.on('payment.success', successCallback);
    RazorpayCheckout.on('payment.cancel', cancelCallback);
    RazorpayCheckout.open(options);

  }

  ngOnInit() {

    this.platform.ready().then(() => {

      document.addEventListener('resume', onResume, false);

      var onResume = function (event) {
        // Re-register the payment success and cancel callbacks
        RazorpayCheckout.on('payment.success', this.successCallbackFun);
        RazorpayCheckout.on('payment.cancel', this.cancelCallbackFun);
        // Pass on the event to RazorpayCheckout
        RazorpayCheckout.onResume(event);
      };

    });

  }

}

