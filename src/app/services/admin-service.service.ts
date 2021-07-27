import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plan } from '../classes/plan';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  userUrl:string;
  constructor(private _http:HttpClient) {
    this.userUrl="http://localhost:8080";
   }
  public getAdmin(url:string,adminUserName:string) {
    return this._http.get(`${this.userUrl}/${url}/${adminUserName}`);
  }

  public getAllPlansForAdmin(url:string) {
    return this._http.get(`${this.userUrl}/${url}`);
  }

  public addPlanFromAdmin(url:string,plan:Plan) {
    return this._http.post<Plan>(`${this.userUrl}/${url}`,plan);
  }

  public deletePlanFromAdmin(url:string,planId:any) {
    return this._http.delete(`${this.userUrl}/${url}/${planId}`);
  }

  public getAllProductsForAdmin(url:string) {
    return this._http.get(`${this.userUrl}/${url}`);
  }

}
