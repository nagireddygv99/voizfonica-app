import { Component, Injectable, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { User } from './user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class UserLoginComponent  {

  user:User;
  validUser:boolean=false;
  loginAttemptUser:any;
  validLogin:boolean = false;


  constructor(private _userService:UserServiceService) {
    this.user = new User();
    localStorage.setItem('portion',"col-lg-6")
   }

  
  checkForValidPhoneNumber(phoneNumber:string):boolean {
    const phnum = new String(phoneNumber);
    if(phnum.length!=10) {
      return false;
    }
    let firchar = phnum.charAt(0);
    if(!(firchar=='9' || firchar=='8'||firchar=='7'||firchar=='6')) {
      return false;
    }
    this.validLogin=true;
    return true;
  }

  validPhoneNumber = true;
  checkPhoneNumber() {
    if(this.checkForValidPhoneNumber(this.user.userPhoneNumber)) {
      this.validPhoneNumber = true;
    }
    else {
      this.validPhoneNumber=false;
    }
    

  }
  
  validRecord = true;
  loginSubmit() {
    this.checkForEnteredPassword();
    console.log(this.validPhoneNumber);
    console.log(this.enteredPasswordValid)
    this.checkPhoneNumber()
    if(this.validPhoneNumber && this.enteredPasswordValid) {
      this.validLogin = true;
      this.validRecord=true;
      this._userService.loginUser("user/get-user-by-phone-number",this.user).subscribe({
        next:data => {
          this.loginAttemptUser = data;
          if(this.user.userPassword == this.loginAttemptUser.userPassword) {
            this.validUser = true;
            localStorage.setItem('user_phone_number',JSON.stringify(this.user.userPhoneNumber));
            window.location.href="user-dashboard";
          }
          else {
            this.validRecord = false;
          }
        },
        error:error => { 
          this.validRecord = false;
          console.log(error);
        }
      })
    }
  }
  

  signUp=false;
  signuplogin() {
    this.signUp = !this.signUp;
  }

  enteredPasswordValid = true;
  checkForEnteredPassword() {
    let pass = new String(this.user.userPassword);

    this.enteredPasswordValid=true;
    if(pass.length<8 || pass=="undefined") {
      this.enteredPasswordValid=false;
    }
  }

}
