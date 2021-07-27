import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../user-login/user';
import { UserLoginComponent } from '../user-login/user-login.component';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {
  user:User;
  confirmPassword:string="";
  validEmail:boolean=true;
  validPhoneNumber:boolean=true
  passwordAndConfirmPassword:boolean=true;

  constructor(private _userService:UserServiceService,private _userLogin:UserLoginComponent) { 
    this.user = new User();
    localStorage.setItem('portion',"col-lg-6")
  }

  

  checkForValidEmailId():boolean {
    let emailId = new String(this.user.userEmailId);
    if(emailId.indexOf(' ')!=-1) {
      this.validEmail = false;
      return false;
    }
    let atIndex = emailId.indexOf('@');
    if(atIndex==-1) {
      this.validEmail =false;
      return false;
    }
    let forDot = emailId.substring(atIndex+2);
    let dotIndex = forDot.indexOf('.');
    if(dotIndex==-1 || dotIndex == forDot.length-1) {
      this.validEmail=false;
      return false;
    }
    this.validEmail = true;
    return true;
  }

  
  checkForValidPhoneNumber():boolean {
    if(!this._userLogin.checkForValidPhoneNumber(this.user.userPhoneNumber)) {
      this.validPhoneNumber = false;
      return false;
    }
    this.validPhoneNumber=true;
    return true;
  }

  checkPasswordAndConfirmPassword():boolean {
     if(this.user.userPassword==this.confirmPassword) {
       this.passwordAndConfirmPassword = true;
       return true;
     }
     this.passwordAndConfirmPassword = false;
     return false;
  }

  userExists:boolean =false;
  registerUser() {
    // if(this.user.userFirstName=="" || this.checkNameValid(this.user.userFirstName)) {
    //   this.validFirstName = false;
    // }
    // if(this.user.userLastName=="" || this.checkNameValid(this.user.userLastName)) {
    //   this.validLastName = false;
    // }
    // if(this.user.userEmailId=="") {
    //   this.validEmail = false;
    // }
    // if(this.user.userPassword=="") {
    //   this.enteredPasswordValid = false;
    // }
    // if(this.confirmPassword=="") {
    //   this.passwordAndConfirmPassword = false;
    // }
    this.userExists=false;
    if(this.user.userPassword==this.confirmPassword 
      && this._userLogin.checkForValidPhoneNumber(this.user.userPhoneNumber) 
    && this.checkForValidEmailId()) {
      this._userService.registerUser("user/registeruser",this.user).subscribe({
        next:data => {
          console.log('registration success');
          window.location.href="home-nav/login";
        },
        error:error => {
          this.userExists = true;
          console.log('error find',error);
        }
      })
    }
  }

  enteredPasswordValid = true;
  checkForEnteredPassword() {
    this.enteredPasswordValid=true;
    if(this.user.userPassword.length<8) {
      this.enteredPasswordValid=false;
    }
  }

  validFirstName = true;
  validLastName = true;

  checkNameIsValid(option:string) {
    switch(option) {
      case 'firstname': {
        if(this.checkNameValid(this.user.userFirstName)) {
          this.validFirstName = true;
        }
        else {
          this.validFirstName = false;
        }
      }
        break;
      case 'lastname': {
        if(this.checkNameValid(this.user.userLastName)) {
          this.validLastName = true;
        }
        else {
          this.validLastName = false;
        }
      }
    }
    console.log(this.validFirstName);
    console.log(this.validLastName);
  }
  checkNameValid(userName:string):any {
    let name = new String(userName);
    for(let j=0;j<name.length;j++) {
      let char = name.charAt(j);
      if(!(char.length === 1 && char.match(/[a-z]/i))) {
        return false;
      }
     
    }
    return true;
  }
  
}
