import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  public isCollapsed1 = false;
  public isCollapsed2 = false;
  public isCollapsed3 = false;
  public isCollapsed4 = false;

   contact =false;
   togglecontact() {
     this.contact=!this.contact;
   }


}
