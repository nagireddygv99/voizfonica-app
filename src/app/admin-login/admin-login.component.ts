import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../services/admin-service.service';
// import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
// import {ErrorStateMatcher} from '@angular/material/core';

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private _adminService:AdminServiceService) { }

  ngOnInit(): void {
  }

  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);

  // matcher = new MyErrorStateMatcher();

  error = "";
  onKeyUpInput() {
    
    this.error = "error";
  }
  inputType = "password";
  changeVisibility() {
    if(this.inputType=="password") {
      this.inputType = "text";
      this.visibility = "visibility_off";
    }
    else {
      this.inputType = "password";
      this.visibility = "visibility";
    }
  }
  visibility="visibility";
  activeElement = false;


  admin:any;
  
  adminUserName:string = "";
  adminPassword:string="";
  validAdmin=true;

  loginTheAdmin() {
    this._adminService.getAdmin("admin/get-admin",this.adminUserName).subscribe({
      next:data => {
        this.admin = data;
        if(this.admin.adminPassword==this.adminPassword) {
          this.validAdmin = true;
          window.location.href="admin-dashboard";
        }
        else {
          this.validAdmin = false;
        }

      },
      error:error => {
        this.validAdmin = false;
      }
    })
  }


}
