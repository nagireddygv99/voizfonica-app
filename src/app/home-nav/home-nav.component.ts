import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.css']
})
export class HomeNavComponent implements OnInit {

  constructor() {
    localStorage.setItem('portion',"col-lg-12");
    
    if(this.portion=="col-lg-12") {
      this.isHome = true;
    }
    else {
      this.isHome = false;
    }
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

}
