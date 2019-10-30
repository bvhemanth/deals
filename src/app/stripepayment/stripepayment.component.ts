import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stripepayment',
  templateUrl: './stripepayment.component.html',
  styleUrls: ['./stripepayment.component.scss']
})
export class StripepaymentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pay(amount) {    
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Token Created!!');
      }
    });
 
    handler.open({
      name: 'Payment',
      description: 'The amount will be creadit hemanth account',
      amount: amount * 100
    });
  }
}
