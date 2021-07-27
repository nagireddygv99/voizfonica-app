import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-all-customers-for-admin',
  templateUrl: './all-customers-for-admin.component.html',
  styleUrls: ['./all-customers-for-admin.component.css']
})
export class AllCustomersForAdminComponent implements OnInit {

  constructor(private _userService:UserServiceService) {
    _userService.getAllUsers('user/get-all-users').subscribe((data:any)=> this.customers = data);
   }

  ngOnInit(): void {
  }
  customers:any = [];

  getAllCustomers() {
    this._userService.getAllUsers('user/get-all-users').subscribe((data:any)=> this.customers = data);
  }


}
