import { Component, OnInit } from '@angular/core';
import { UserProduct } from '../classes/user-product';
import { UserServiceService } from '../services/user-service.service';
import { UserLoginComponent } from '../user-login/user-login.component';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css']
})
export class UserProductsComponent implements OnInit {

  userProduct:UserProduct;
  

  productSelection = [
    { no:1, name:'Prepaid' },
    { no:2, name:'Postpaid' },
    { no:3, name:'Dongle' }
  ]

  constructor(private _userService:UserServiceService,private _userLogin:UserLoginComponent) { 
    this.userProduct = new UserProduct();
    this.userProduct.userNumber="";
    this.userProduct.productId = "select";
    this.userProduct.userPhoneNumber = localStorage.getItem('user_phone_number');

    
    this.FindPrepaidProductsForUser();
  }

  ngOnInit(): void {
  }


  validPhoneNumber = true;

  checkForPhoneNumber() {
    this.validPhoneNumber = this._userLogin.checkForValidPhoneNumber(this.userProduct.userNumber);
  }

  validInfo = true;

  addProductToUser() {
    this.validInfo = true;
    if(this.validPhoneNumber && this.userProduct.userNumber!="" && this.userProduct.productId!="select") {
      this._userService.addUserProduct("user-product/add-producct-to-user",this.userProduct).subscribe({
        next:data => {
          alert('Successfully added the product');
          window.location.href="user-dashboard/user-products";
        },
        error:error => {
          console.log(error);
          alert('Product already present')
        }
      })
    }
    else {
      this.validInfo = false;
    }
  }




  prePaidSubscriber = false;

  FindPrepaidProductsForUser() {
    this._userService.getUserProduct("user-product/get-user-product",this.userProduct.userPhoneNumber).subscribe({
      next:data => {
        let products:any = data;
        if(products.length!=0) {
          for(let product of products) {
            if(product.productId==1) {
              this.prePaidSubscriber = true;
              return;
            }
          }
          this.prePaidSubscriber = false;
        }
        else {
          this.prePaidSubscriber = false;
        }
      },
      error:error => {
        console.log(error);
      }
    })
  }  

}
