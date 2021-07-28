import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.css']
})
export class HomeNavComponent implements OnInit {

  constructor(private _adminService:AdminServiceService) {
    localStorage.setItem('portion',"col-lg-12");
    
    if(this.portion=="col-lg-12") {
      this.isHome = true;
    }
    else {
      this.isHome = false;
    }
    this.getAllPlans();
   }


  ngOnInit(): void {
  }

  portion:any = localStorage.getItem('portion');

  isHome = true;
  onClick() {
    localStorage.setItem('portion',"col-lg-6");
    this.isHome = false;
    this.portion = localStorage.getItem('portion');

  }
  titleClick() {
    localStorage.setItem('portion',"col-lg-12");
    // this.isHome = true;
    window.location.href="home-nav"
    this.portion = localStorage.getItem('portion');
  }








  plans:any;


  getAllPlans() {
    this._adminService.getAllPlansForAdmin("plan/get-all-plans").subscribe({
      next:data => {
        this.plans = data;
        console.log(this.plans);
      },
      error:error => {
        console.log(error);
      }

    });
  }

  goLogin() {
    window.location.href = "home-nav/login";
  }




}
