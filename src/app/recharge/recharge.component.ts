import { Component, OnInit } from '@angular/core';
import { PlanService } from '../services/plan.service';
import { UserLoginComponent } from '../user-login/user-login.component';





@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {

  products:any;

  productId:number=0;

 

  selectedOptionPlans:any;

  constructor(private _planService:PlanService,private _userLogin:UserLoginComponent) {
    _planService.getProducts("product/get-all-products").subscribe({
      next:data => {
        this.products = data;
        console.log(this.products);
      },
      error:error => {
        console.log(error);
      }
    })
   }
   askedToShow = false;

   plansAvailbleForProduct = false;

   searchForAvailblePlans() {
    this.plansAvailbleForProduct = false;
    this.askedToShow = true;
    
     this._planService.plansByProductId("plan/get-plans-for-a-product",this.productId).subscribe({
       next:data => {
         this.selectedOptionPlans = data;
         if(this.selectedOptionPlans.length!=0) {
           this.plansAvailbleForProduct = true;
         }
         console.log(data,'hello');
       },
       error:error => {
         console.log(error);
       }
     })
   }



   rechargePhoneNumber = "";
   phoneNumberValid = true;

   validatePhoneNubmer() {
   console.log(this.rechargePhoneNumber=="");
   this.phoneNumberValid = this._userLogin.checkForValidPhoneNumber(this.rechargePhoneNumber)&&this.rechargePhoneNumber!="";
    
   }


   goToPayment(plan:any) {
     this.validatePhoneNubmer();
     if(this.phoneNumberValid && this.rechargePhoneNumber!="") {
       localStorage.setItem('plan',JSON.stringify(plan));
       localStorage.setItem('recharge_number',this.rechargePhoneNumber);
       
       window.location.href="user-dashboard/payment";
     }
     else {
       this.phoneNumberValid = false;
     }
     
   }

  ngOnInit(): void {
  }

}
