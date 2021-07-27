import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserOrder } from '../classes/user-order';

@Injectable({
  providedIn: 'root'
})
export class UserOrderService {

  userUrl:string;
  constructor(private _http:HttpClient) {
    this.userUrl="http://localhost:8080";
   }

   public getAllOrders(url:any) {
     return this._http.get(`${this.userUrl}/${url}`);
   }
   public getOrdersOfCurrentUser(url:string,userPhoneNumber:any) {
     return this._http.get(`${this.userUrl}/${url}/${userPhoneNumber}`);
   }

   public getActiveOrdersOfCurrentUser(url:string,userPhoneNumber:any) {
    return this._http.get(`${this.userUrl}/${url}/${userPhoneNumber}`);
   }

   public getOrderDetailsByOrderId(url:string,orderId:any) {
     return this._http.get(`${this.userUrl}/${url}/${orderId}`);
   }

   public saveOrder(url:string,userOrder:UserOrder) {
     return this._http.post(`${this.userUrl}/${url}`,userOrder);
   }
}
