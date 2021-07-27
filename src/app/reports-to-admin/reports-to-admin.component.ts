import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { UserReport } from '../user-reports/user-reports.component';

@Component({
  selector: 'app-reports-to-admin',
  templateUrl: './reports-to-admin.component.html',
  styleUrls: ['./reports-to-admin.component.css']
})
export class ReportsToAdminComponent implements OnInit {


  userReports:any;
  constructor(private _userService:UserServiceService) {
    _userService.getAllTickets("user-tickets/get-all-tickets").subscribe({
      next:data => {
        this.userReports = data;
        console.log(this.userReports);
      },
      error:error => {
        console.log(error);
      }
    });
   }

  ngOnInit(): void {
  }

  closeTicket(userReport:any) {
    
    console.log(userReport);
    this._userService.closeTicket("user-ticket/closeTicket",userReport).subscribe({
      next:data => {
        alert('successfully closed ticket');
        window.location.href="admin-dashboard/admin-reports";
      },
      error:error=> {
        console.log(error);
      }
    })

  }

}
