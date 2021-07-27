import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  userUrl:string;
  constructor(private _http:HttpClient) {
    this.userUrl="http://localhost:8080";
  }

  public getPlanFromPlanId(url:any,planId:any) {
    return this._http.get(`${this.userUrl}/${url}/${planId}`);
  }

  public getProductFromProductId(url:any,productId:any) {
    return this._http.get(`${this.userUrl}/${url}/${productId}`)
  }

  public getProducts(url:string) {
    return this._http.get(`${this.userUrl}/${url}`);
  }

  public plansByProductId(url:string,productId:any) {
    return this._http.get(`${this.userUrl}/${url}/${productId}`)
  } 
}
