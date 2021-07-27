import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../user-login/user';

@Component({
  selector: 'app-user-settings-dashboard',
  templateUrl: './user-settings-dashboard.component.html',
  styleUrls: ['./user-settings-dashboard.component.css']
})
export class UserSettingsDashboardComponent implements OnInit {

  user:any;
  constructor(private _userService:UserServiceService) {
    this.getUser();
   }
   
   getUser() {
    let userPhoneNumber:any = localStorage.getItem('user_phone_number');
    userPhoneNumber = JSON.parse(userPhoneNumber);
    this._userService.getUser("user/get-user-by-phone-number",userPhoneNumber).subscribe((data:any)=>this.user=data);
    
   }

   
   
   updateAccountSetting(msg:string) {
     this._userService.updateUser("user/updateUser",this.user.userPhoneNumber,this.user).subscribe({
       next:data=> {
         alert("successfully updated "+msg);
         window.location.href="user-dashboard/user-profile";
         this.getUser();
       },
       error:error => {
         alert("failed to update "+msg);
         this.getUser();
       }
     })
   }

   clearAccountSetting() {
     this.getUser();
   }



   enteredPassword:string="";
   newPassword:string="";
   confirmNewPassword:string="";

   
   updatePassword() {
     if(this.user.userPassword!=this.enteredPassword) {
       console.log(this.user.userPassword,this.enteredPassword)
       alert('Invalid Password');
       window.location.href="user-dashboard/user-profile"
       return;
     }
     if(this.newPassword == this.confirmNewPassword) {
       this.user.userPassword = this.newPassword;
       this.updateAccountSetting("Password");
       this.clearPasswordScreen();
     }
     else {
       alert('New password and confirm new password must be same');
     }

   }

   clearPasswordScreen() {
     this.enteredPassword = "";
     this.newPassword = "";
     this.confirmNewPassword="";
   }



  ngOnInit(): void {
  }
  

}
