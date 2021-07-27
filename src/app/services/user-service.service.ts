import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user-login/user';
import { UserProduct } from '../classes/user-product';
import { UserReport } from '../user-reports/user-reports.component';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  userUrl:string;
  constructor(private _http:HttpClient) {
    this.userUrl="http://localhost:8080";
   }

   public getAllUsers(url:string) {
     return this._http.get(`${this.userUrl}/${url}`);
   } 
   public registerUser(url:string,user:User) {
     return this._http.post<User>(`${this.userUrl}/${url}`,user);
   }

   public loginUser(url:string,user:User) {
     return this._http.get(`${this.userUrl}/${url}/${user.userPhoneNumber}`);
   }

   public getUser(url:string,userPhoneNumber:any) {
     return this._http.get(`${this.userUrl}/${url}/${userPhoneNumber}`);
   }

   public updateUser(url:string,userPhoneNumber:any,user:User) {
     return this._http.put<User>(`${this.userUrl}/${url}/${userPhoneNumber}`,user);
   }


   public getUserProduct(url:string,userPhoneNumber:any) {
     return this._http.get(`${this.userUrl}/${url}/${userPhoneNumber}`);
   }


   public getOtp(url:string,userPhoneNumber:any) {
     return this._http.get(`${this.userUrl}/${url}/${userPhoneNumber}`);
   }

   public addUserProduct(url:string,userProduct:UserProduct) {
     return this._http.post(`${this.userUrl}/${url}`,userProduct);
   }


   public addAticket(url:string,userReport:UserReport) {
     return this._http.post(`${this.userUrl}/${url}`,userReport);
   }

   public getAllTickets(url:string) {
     return this._http.get(`${this.userUrl}/${url}`);
   }

   public getTicketByTicketNumber(url:string,ticketNumber:any) {
     return this._http.get(`${this.userUrl}/${url}/${ticketNumber}`);
   }

   public closeTicket(url:string,userReport:any) {
    return this._http.put(`${this.userUrl}/${url}`,userReport);
   }
   
}
