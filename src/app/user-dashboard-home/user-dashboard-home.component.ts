import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Plan } from '../classes/plan';
import { PlanService } from '../services/plan.service';
import { UserOrderService } from '../services/user-order.service';

import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-user-dashboard-home',
  templateUrl: './user-dashboard-home.component.html',
  styleUrls: ['./user-dashboard-home.component.css']
})
export class UserDashboardHomeComponent implements OnInit {

  userProducts:any;
  
  userHaveProducts = true;

  plans:any[]=[];

  userOrders:any;

 activePlans = true;

 today:any = new Date();

 something:any;

  constructor(private _userService:UserServiceService, private _userOrderService:UserOrderService,_planService:PlanService,private datePipe:DatePipe) {
    this.today = this.datePipe.transform(this.today, 'yyyy-MM-dd');
    let userPhoneNumber = localStorage.getItem("user_phone_number");
    _userService.getUserProduct("user-product/get-user-product",userPhoneNumber).subscribe({
      next:data=> {
        this.userProducts = data;
        console.log(this.userProducts);
        if(this.userProducts.length==0) {
          this.userHaveProducts = false;
        }
        else {
          this.userHaveProducts = true;
          for(let userProduct of this.userProducts) {
            _userOrderService.getActiveOrdersOfCurrentUser("user-order/get-orders-active-of-user",userProduct.userNumber).subscribe({
              next:data => {
                this.userOrders = data;
                console.log(this.userOrders);
                console.log('user orders')
                if(this.userOrders.length==0) {
                  this.activePlans = false;
                }
                else {
                //   let planId = this.userOrders.pop();
                // console.log(planId.planId);
                for(let order of this.userOrders) {
                  _planService.getPlanFromPlanId("plan/get-plan-by-plan-id",order.planId).subscribe({
                    next:data => {



                      var date1 = new Date(this.today); 
	                    var date2 = new Date(order.planExpiryDate); 
  
                      var Time = date2.getTime() - date1.getTime(); 
                      var Days = Time / (1000 * 3600 * 24);

                      
                      this.something = data;

                      console.log(Days)

                      this.something.planValidity = Days;
                      
                    


                      // this.plans.push(data);
                      this.plans.push(this.something);
                      console.log(this.plans);
                      console.log('worked');
                    },
                    error:error => {
                      console.log(error);
                    }
                  })
                } 
                console.log(data);
                }
              },
              error:error=> {
                console.log(error);
              }
            });
          }
          
        }
      },
      error:error => {
        console.log(error);
      }
      
    });

    // if(this.userHaveProducts) {
    //   console.log('hello');
    //   _userOrderService.getActiveOrdersOfCurrentUser("user-order/get-orders-active-of-user",this.userProducts.userNumber).subscribe({
    //     next:data => {
    //       this.userOrders = data;
    //       let planId = this.userOrders.pop();
    //       console.log(planId.planId);
    //       for(let order of this.userOrders) {
    //         _planService.getPlanFromPlanId("plan/get-plan-by-plan-id",order.planId).subscribe({
    //           next:data => {
    //             this.plans.push(data);
    //             console.log(data);
    //           },
    //           error:error => {
    //             console.log(error);
    //           }
    //         })
    //       } 
    //       console.log(data);
    //     },
    //     error:error=> {
    //       console.log(error);
    //     }
    //   });
    // }

    
    
   }

  ngOnInit(): void {
  }

}
