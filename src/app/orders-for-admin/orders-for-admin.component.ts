import { Component, OnInit } from '@angular/core';
import { UserOrderService } from '../services/user-order.service';

@Component({
  selector: 'app-orders-for-admin',
  templateUrl: './orders-for-admin.component.html',
  styleUrls: ['./orders-for-admin.component.css']
})
export class OrdersForAdminComponent implements OnInit {

  orders:any;
  constructor(private _userOrderService:UserOrderService) {
    _userOrderService.getAllOrders("user-order/get-all-orders").subscribe({
      next:data => {
        this.orders = data;
      },
      error:error => {
        console.log(error);
      }
    })
   }
  
  ngOnInit(): void {
  }

}
