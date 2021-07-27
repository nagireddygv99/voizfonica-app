import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';


export class UserReport {
  ticketNumber:any;
  description:any;
  ticketStatus:any;
  userNumber:any;
}


@Component({
  selector: 'app-user-reports',
  templateUrl: './user-reports.component.html',
  styleUrls: ['./user-reports.component.css']
})
export class UserReportsComponent implements OnInit {


  userReport:UserReport;
  constructor(private _userService:UserServiceService) {
    this.userReport = new UserReport();
    this.userReport.userNumber="";
    this.userReport.description = "";
   }

  ngOnInit(): void {
  }

  Track=false;
  toggleTrack(){
    this.Track= !this.Track;
  }

  
  createAReport() {
    if(this.userReport.userNumber=="") {
      this.userReport.userNumber = localStorage.getItem('user_phone_number');
    }
    this._userService.addAticket("user_tickets/registertickets",this.userReport).subscribe({
      next:data => {
        alert('Ticket raised successfully with tiket number : '+data);
        window.location.href="user-dashboard/user-reports";
      },
      error:error => {
        console.log(error);
      }
    });
  }

  ticketInfo:any;
  checkStatus = false;
  getReportStatus() {
    this._userService.getTicketByTicketNumber("user_tickets/get-user_tickets-by-ticket-id",this.userReport.ticketNumber).subscribe({
      next:data => {
        this.ticketInfo = data;
        this.checkStatus = true;
      },
      error:error => {
        console.log(error);
      }
    })
  }

}
