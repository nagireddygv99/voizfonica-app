import { Component, OnInit } from '@angular/core';
import { UserOrderService } from '../services/user-order.service';
import { UserServiceService } from '../services/user-service.service';



@Component({
  selector: 'app-user-order-history',
  templateUrl: './user-order-history.component.html',
  styleUrls: ['./user-order-history.component.css']
})
export class UserOrderHistoryComponent implements OnInit {

  orderHistory:any;
  user:any;

  constructor(private _userOrderService:UserOrderService,private _userService:UserServiceService) {
    let userPhoneNumber = localStorage.getItem('user_phone_number');
    _userOrderService.getOrdersOfCurrentUser("user-order/get-orders-of-user",userPhoneNumber).subscribe((data)=>this.orderHistory=data);
    _userService.getUser("user/get-user-by-phone-number",userPhoneNumber).subscribe((data)=>this.user=data);
  }

  ngOnInit(): void {
  }

  saveThisToGenerateBill(orderId:any) {
    localStorage.setItem('orderId',orderId);
    window.location.href="user-dashboard/bill-invoice";
  }

}




function x(x: any, arg1: (any: any) => void) {
  throw new Error('Function not implemented.');
}

