import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  adminSidenav=true;
  toggleAdminSideNav() {
    this.adminSidenav = !this.adminSidenav;
  }
  // customersOption = true;

  // selectCustomerOption() {
  //   this.customersOption = false;
  // }
  sideBarOpen=true;

  sideBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }


  adminlogout = false;
  

}
