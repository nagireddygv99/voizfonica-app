import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { UserForgotPasswordComponent } from './user-forgot-password/user-forgot-password.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

import {MatTabsModule} from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { AppHomeComponent } from './app-home/app-home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AllCustomersForAdminComponent } from './all-customers-for-admin/all-customers-for-admin.component';
import { ProductsComponent } from './products/products.component';
import { HelpComponent } from './help/help.component';
import {MatCardModule} from '@angular/material/card';
import { UserDashboardHomeComponent } from './user-dashboard-home/user-dashboard-home.component';
import { UserOrderHistoryComponent } from './user-order-history/user-order-history.component';
import { UserSettingsDashboardComponent } from './user-settings-dashboard/user-settings-dashboard.component';
import { CompanyServicesComponent } from './company-services/company-services.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { PlansComponent } from './plans/plans.component';
import { ProductsForAdminComponent } from './products-for-admin/products-for-admin.component';
import { ReportsComponent } from './reports/reports.component';
import { PlanComponent } from './classes/plan/plan.component';
import { RechargeComponent } from './recharge/recharge.component';
import { PaymentComponent } from './payment/payment.component';
import { BillInvoiceComponent } from './bill-invoice/bill-invoice.component';
import { OrdersForAdminComponent } from './orders-for-admin/orders-for-admin.component';
import { UserProductsComponent } from './user-products/user-products.component';
import { UserReportsComponent } from './user-reports/user-reports.component';
import { ReportsToAdminComponent } from './reports-to-admin/reports-to-admin.component';
import { AdminDashboardHomeComponent } from './admin-dashboard-home/admin-dashboard-home.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { DatePipe } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    UserForgotPasswordComponent,
    UserLoginComponent,
    UserSignupComponent,
    UserDashboardComponent,
    AppHomeComponent,
    UserProfileComponent,
    AdminLoginComponent,
    AppFooterComponent,
    AdminDashboardComponent,
    AllCustomersForAdminComponent,
    ProductsComponent,
    HelpComponent,
    UserDashboardHomeComponent,
    UserOrderHistoryComponent,
    UserSettingsDashboardComponent,
    CompanyServicesComponent,
    HomeNavComponent,
    PlansComponent,
    ProductsForAdminComponent,
    ReportsComponent,
    PlanComponent,
    RechargeComponent,
    PaymentComponent,
    BillInvoiceComponent,
    OrdersForAdminComponent,
    UserProductsComponent,
    UserReportsComponent,
    ReportsToAdminComponent,
    AdminDashboardHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatListModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTabsModule,
    Ng2PageScrollModule,
    
  ],
  providers: [
   DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
