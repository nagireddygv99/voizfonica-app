import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../user-login/user';
import { UserLoginComponent } from '../user-login/user-login.component';

@Component({
  selector: 'app-user-forgot-password',
  templateUrl: './user-forgot-password.component.html',
  styleUrls: ['./user-forgot-password.component.css']
})
export class UserForgotPasswordComponent  {

  user:User;

  validEmail = false;
  constructor(private _userService:UserServiceService,private _userLogin:UserLoginComponent) {
    localStorage.setItem('portion',"col-lg-6");
    this.user = new User();
   }

 redirectToLogin() {
  this.checkForEnteredPassword();
  this.checkForConfirmPassword();
  if(this.enteredPasswordValid && this.confirmPasswordValid) {
    this.user.userPassword = this.password;
    this._userService.updateUser("user/changePassword",this.phoneNumberEntered,this.user).subscribe({
      next:data=>{
        alert('successfully changed password. Login...')
        window.location.href="home-nav/login";
      },
      error:error=> {
        console.log(error);
        alert('error in change password');
      }
    })
  }
 }

 otp:any;
 phoneNumberEntered="";

 error=false;

 validPhoneNumber = true;
 checkForValidPhoneNumber() {
  this.validPhoneNumber = this._userLogin.checkForValidPhoneNumber(this.phoneNumberEntered);
  console.log(this.validPhoneNumber);
 }

 generateOtp() {
  if(this.validPhoneNumber && this.phoneNumberEntered!="") {
    this._userService.getOtp("mail/getMail",this.phoneNumberEntered).subscribe({
      next:data=> {
        this.otp = data;
        this.validEmail = true;
        console.log(this.otp);
      },
      error:error => {
        this.validEmail = false;
        this.error = true;
      }
    });
  }
  else {
    this.validPhoneNumber = false;
  }
 }


 password:string="";
 confirmPassword:string="";

 enteredPasswordValid = true;
  checkForEnteredPassword() {
    let pass = new String(this.password);

    this.enteredPasswordValid=true;
    if(pass.length<8 || pass=="") {
      this.enteredPasswordValid=false;
    }
  }

  confirmPasswordValid = true;
  checkForConfirmPassword() {
    this.confirmPasswordValid = true;
    if(this.password!=this.confirmPassword || this.confirmPassword=="") {
      this.confirmPasswordValid = false;
    }
    
  }


  enteredOtp:any;
  otpValid = false;
  firstTime = true;
  validateOtp() {
    this.firstTime = false;
    if(this.enteredOtp==this.otp.otp) {
      this.otpValid = true;
    }
  }

}
