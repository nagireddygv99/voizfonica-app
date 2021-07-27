import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  user:any;

  userProduct:any;

  constructor(private _userService:UserServiceService) {
    let userPhoneNumber = localStorage.getItem('user_phone_number');
    this._userService.getUser("user/get-user-by-phone-number",userPhoneNumber).subscribe((data:any)=>this.user = data);
    
   }
  sideBarOpen=true;

  ngOnInit(){}

  sideBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }

  goToSelectedUrl(url:string) {
    window.location.href=url;
  }
  logoutUser() {
    localStorage.clear();
    window.location.href="login";
  }



  adminlogout = false;

}
