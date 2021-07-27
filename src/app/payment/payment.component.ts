import { Component, OnInit } from '@angular/core';
import { UserOrder } from '../classes/user-order';
import { UserOrderService } from '../services/user-order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  userOrder:UserOrder;
  plan:any;
  rechargeNumber:any;
  constructor(private _userOrderService:UserOrderService) {
    this.userOrder = new UserOrder();
    this.plan = localStorage.getItem('plan');
    this.plan = JSON.parse(this.plan);
    this.rechargeNumber = localStorage.getItem('recharge_number');
    
  }
  ngOnInit(): void {
  }
  orderId:any;
  addOrder() {
    this.userOrder.userPhoneNumber = localStorage.getItem('user_phone_number');
    this.userOrder.planId = this.plan.planId;
    this.userOrder.rechargedNumber = localStorage.getItem('recharge_number');
    this._userOrderService.saveOrder("user-order/add-order",this.userOrder).subscribe({
      next:data => {
        this.orderId = data;
        localStorage.setItem('orderId',this.orderId);
        this.paymentSuccess = true;
        setTimeout( () => {
          window.location.href = "user-dashboard/bill-invoice";
        },3000);
        // window.location.href = "user-dashboard/bill-invoice";
      },error:error => {
        console.log(error);
      }
    });

  }

  paymentSuccess = false;

}
