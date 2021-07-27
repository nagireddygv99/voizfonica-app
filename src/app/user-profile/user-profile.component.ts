import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user:any;

  constructor(private _userService:UserServiceService) {
    let userPhoneNumber = localStorage.getItem('user_phone_number');
    this._userService.getUser("user/get-user-by-phone-number",userPhoneNumber).subscribe((data:any)=>this.user = data);
   }

  ngOnInit(): void {
  }

  logoutUser() {
    window.location.href="login";
  }
  goToDashboard() {
    window.location.href="user-dashboard";
  }

}
